export function ChatAvatarIcon() {
    return (
        <svg viewBox='0 0 24 24'>
            <path d='M7.25 8.25a4.75 4.75 0 0 1 9.5 0v.5h.5a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2H6.75a2 2 0 0 1-2-2v-5.5a2 2 0 0 1 2-2h.5v-.5Z' />
            <path d='M9.25 12.25h.01' />
            <path d='M14.75 12.25h.01' />
            <path d='M10 15.25c1.12.67 2.88.67 4 0' />
        </svg>
    );
}

export function ChatHeadIcon() {
    return (
        <svg className='chat-head-icon' viewBox='0 0 24 24' aria-hidden='true'>
            <path d='M4.75 6.75C4.75 5.65 5.65 4.75 6.75 4.75h10.5c1.1 0 2 .9 2 2v7.5c0 1.1-.9 2-2 2H10l-4.25 3v-3.1a2 2 0 0 1-1-1.73V6.75Z' />
            <path d='M8.5 9.25h7' />
            <path d='M8.5 12.25h4.75' />
        </svg>
    );
}

export function SendIcon() {
    return (
        <svg viewBox='0 0 24 24' aria-hidden='true'>
            <path d='M5 12h13' />
            <path d='m13 6 6 6-6 6' />
        </svg>
    );
}
