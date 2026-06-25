import { type FormEvent, type KeyboardEvent, type ReactNode, useState } from 'react';
import type { ChatMessage } from '../../types/portfolio';
import { makeMessageId, requestPortfolioGuideReply } from '../../utils/portfolioGuide';
import { ChatAvatarIcon, ChatHeadIcon, SendIcon } from './shared/PortfolioIcons';

interface PortfolioGuideProps {
    profileName: string;
    chatStarters: string[];
}

function createWelcomeMessage(profileName: string): ChatMessage {
    return {
        id: 'welcome',
        role: 'assistant',
        content: `Ask me about ${profileName}, his internships, projects, stack, education, awards, or contact details.`,
    };
}

function renderInlineMarkdown(text: string) {
    return text.split(/(\*\*[^*]+\*\*|https?:\/\/[^\s<]+|mailto:[^\s<]+|tel:\+?[^\s<]+)/g).map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>;
        }

        if (/^(https?:\/\/|mailto:|tel:)/.test(part)) {
            const [, href, trailingText = ''] = part.match(/^(.+?)([.,!?;:]*)$/) ?? [part, part, ''];
            const isWebLink = href.startsWith('http');

            return (
                <span key={`${part}-${index}`}>
                    <a className='chat-message-link' href={href} target={isWebLink ? '_blank' : undefined} rel={isWebLink ? 'noreferrer' : undefined}>
                        {href}
                    </a>
                    {trailingText}
                </span>
            );
        }

        return <span key={`${part}-${index}`}>{part}</span>;
    });
}

function renderMessageContent(content: string): ReactNode {
    const normalizedContent = content.replace(/\s+\*\s+/g, '\n* ');
    const lines = normalizedContent
        .split(/\n+/)
        .map((line) => line.trim())
        .filter(Boolean);
    const contentBlocks: ReactNode[] = [];
    let listItems: string[] = [];

    const flushList = () => {
        if (listItems.length === 0) {
            return;
        }

        const items = listItems;
        listItems = [];
        contentBlocks.push(
            <ul key={`list-${contentBlocks.length}`} className='chat-message-list'>
                {items.map((item, index) => (
                    <li key={`${item}-${index}`}>{renderInlineMarkdown(item)}</li>
                ))}
            </ul>,
        );
    };

    lines.forEach((line) => {
        if (/^[-*]\s+/.test(line)) {
            listItems.push(line.replace(/^[-*]\s+/, ''));
            return;
        }

        flushList();
        contentBlocks.push(<p key={`paragraph-${contentBlocks.length}`}>{renderInlineMarkdown(line)}</p>);
    });

    flushList();

    return <div className='chat-message-content'>{contentBlocks}</div>;
}

export function PortfolioGuide({ profileName, chatStarters }: PortfolioGuideProps) {
    const [question, setQuestion] = useState('');
    const [isReplying, setIsReplying] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>(() => [createWelcomeMessage(profileName)]);

    const submitQuestion = async (value: string) => {
        const trimmedValue = value.trim();

        if (!trimmedValue || isReplying) {
            return;
        }

        setMessages((currentMessages) => [
            ...currentMessages,
            {
                id: makeMessageId(),
                role: 'user',
                content: trimmedValue,
            },
        ]);
        setQuestion('');
        setIsReplying(true);
        setIsChatOpen(true);

        const reply = await requestPortfolioGuideReply(trimmedValue);

        setMessages((currentMessages) => [
            ...currentMessages,
            {
                id: makeMessageId(),
                role: 'assistant',
                content: reply,
            },
        ]);
        setIsReplying(false);
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await submitQuestion(question);
    };

    const handleQuestionKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key !== 'Enter' || event.shiftKey) {
            return;
        }

        event.preventDefault();
        void submitQuestion(question);
    };

    return (
        <div className='chat-widget'>
            {isChatOpen ? (
                <div className='chat-widget-panel'>
                    <div className='chat-widget-header'>
                        <div className='chat-profile'>
                            <div className='chat-avatar' aria-hidden='true'>
                                <ChatAvatarIcon />
                            </div>
                            <div>
                                <p className='mini-label'>SwaneAI</p>
                                <h3>Ask about Stephen</h3>
                                <span className='chat-presence'>Online now</span>
                            </div>
                        </div>
                        <button type='button' className='chat-widget-close' onClick={() => setIsChatOpen(false)} aria-label='Close portfolio guide'>
                            x
                        </button>
                    </div>

                    <div className='chat-thread'>
                        {messages.map((message) => (
                            <div key={message.id} className={`chat-message ${message.role}`}>
                                <span className='chat-message-author'>{message.role === 'assistant' ? 'SwaneAI' : 'You'}</span>
                                {renderMessageContent(message.content)}
                            </div>
                        ))}

                        {isReplying ? (
                            <div className='chat-message assistant pending'>
                                <span className='chat-message-author'>SwaneAI</span>
                                {renderMessageContent('Checking the portfolio details...')}
                            </div>
                        ) : null}
                    </div>

                    <div className='starter-list'>
                        {chatStarters.map((starter) => (
                            <button key={starter} type='button' className='starter-chip' onClick={() => void submitQuestion(starter)}>
                                {starter}
                            </button>
                        ))}
                    </div>

                    <form className='chat-form' onSubmit={handleSubmit}>
                        <label htmlFor='portfolio-question' className='sr-only'>
                            Ask a question
                        </label>
                        <textarea id='portfolio-question' value={question} onChange={(event) => setQuestion(event.target.value)} onKeyDown={handleQuestionKeyDown} rows={1} placeholder='Message SwaneAI...' />
                        <button type='submit' className='send-button' disabled={isReplying} aria-label={isReplying ? 'Waiting for reply' : 'Send message'}>
                            <SendIcon />
                        </button>
                    </form>
                </div>
            ) : null}

            <button type='button' className={`chat-head ${isChatOpen ? 'active' : ''}`} onClick={() => setIsChatOpen((currentState) => !currentState)} aria-label={isChatOpen ? 'Close portfolio guide' : 'Open portfolio guide'}>
                <ChatHeadIcon />
                <span className='chat-head-status' />
            </button>
        </div>
    );
}
