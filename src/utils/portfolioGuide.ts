import { portfolioData } from '../data/portfolioData';

interface SwaneAIChatResponse {
    answer: string;
}

export function makeMessageId() {
    return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function joinItems(items: string[]) {
    if (items.length === 0) {
        return '';
    }

    if (items.length === 1) {
        return items[0];
    }

    if (items.length === 2) {
        return `${items[0]} and ${items[1]}`;
    }

    return `${items.slice(0, -1).join(', ')}, and ${items[items.length - 1]}`;
}

export function buildPortfolioReply(question: string) {
    const normalized = question.toLowerCase();
    const featuredProjectNames = portfolioData.projects.filter((project) => project.featured).map((project) => project.title);
    const topStack = ['React', 'TypeScript', 'Node.js', 'Laravel', 'MongoDB', 'MySQL', 'Python', 'Flutter'];
    const certificateNames = portfolioData.certifications.map((certificate) => `${certificate.title} (${certificate.year})`);

    if (normalized.includes('project') || normalized.includes('work') || normalized.includes('portfolio')) {
        return `Start with ${joinItems(featuredProjectNames)}. Sakay shows realtime mobility thinking, UniLodge shows marketplace and booking flows, and PHINMA Hub shows cross-platform education tooling.`;
    }

    if (normalized.includes('skill') || normalized.includes('stack') || normalized.includes('tech')) {
        return `Stephen works most often with ${joinItems(topStack)}. His wider resume stack includes React Native, Flutter, Express, Django, Flask, Socket.IO, LangChain, Docker, AWS, Google Cloud, Firebase, Postgres, Redis, Git, and Figma.`;
    }

    if (normalized.includes('education') || normalized.includes('study') || normalized.includes('school')) {
        return `Stephen completed a Bachelor of Science in Information Technology in Systems Development at PHINMA University of Pangasinan in 2026. He also earned his high school diploma there in March 2022.`;
    }

    if (normalized.includes('certificate') || normalized.includes('certification') || normalized.includes('award')) {
        return `The listed credentials are ${joinItems(certificateNames)}. They include a systems development award, CS50, and a blockchain-focused certificate.`;
    }

    if (normalized.includes('experience') || normalized.includes('internship') || normalized.includes('role') || normalized.includes('fit')) {
        return `Stephen is a strong fit for full-stack, product engineering, frontend, backend, and AI-assisted web development roles. His recent internships were Full Stack Developer Intern at ActionLabs and Web Developer Intern at Mind You.`;
    }

    if (normalized.includes('contact') || normalized.includes('hire') || normalized.includes('reach')) {
        return `Stephen is open to full-stack and product engineering roles. You can reach him at ${portfolioData.email}, ${portfolioData.phone}, LinkedIn, or GitHub.`;
    }

    return `${portfolioData.name} is a ${portfolioData.role} based in ${portfolioData.location}. He focuses on full-stack product delivery, polished user experience, practical AI workflows, and maintainable engineering.`;
}

export async function requestPortfolioGuideReply(question: string) {
    const backendReply = await requestSwaneAIReply(question);

    if (backendReply) {
        return backendReply;
    }

    await new Promise((resolve) => window.setTimeout(resolve, 300));
    return buildPortfolioReply(question);
}

async function requestSwaneAIReply(question: string) {
    const baseUrl = import.meta.env.VITE_SWANEAI_API_URL?.trim();

    if (!baseUrl) {
        return null;
    }

    try {
        const response = await fetch(`${baseUrl.replace(/\/$/, '')}/chat`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ question }),
        });

        if (!response.ok) {
            return null;
        }

        const data = (await response.json()) as Partial<SwaneAIChatResponse>;

        if (typeof data.answer !== 'string' || data.answer.trim().length === 0) {
            return null;
        }

        return data.answer.trim();
    } catch {
        return null;
    }
}
