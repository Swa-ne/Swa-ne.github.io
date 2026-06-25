export type ThemeMode = 'light' | 'dark';
export type SectionId = 'home' | 'journey' | 'projects' | 'skills';
export type MessageRole = 'assistant' | 'user';
export type JourneyTab = 'work' | 'education' | 'awards';

export interface LinkItem {
    label: string;
    href: string;
}

export interface LabelValueItem {
    label: string;
    value: string;
}

export interface ProjectItem {
    title: string;
    image: string;
    stack: string[];
    repositoryUrl: string;
    previewUrl?: string;
    description: string;
    impact: string[];
    featured?: boolean;
}

export interface TimelineItem {
    title: string;
    organization: string;
    period: string;
    description: string;
    highlights?: string[];
    image?: string;
}

export interface CertificateItem {
    title: string;
    year: string;
    image: string;
}

export interface PortfolioData {
    brand: string;
    name: string;
    role: string;
    location: string;
    email: string;
    phone: string;
    headline: string;
    availability: string;
    resumeUrl: string;
    profileImage: string[];
    intro: string[];
    highlights: LabelValueItem[];
    capabilities: Array<{
        title: string;
        description: string;
    }>;
    toolkit: string[];
    socialLinks: LinkItem[];
    experience: TimelineItem[];
    education: TimelineItem[];
    certifications: CertificateItem[];
    projects: ProjectItem[];
    chatStarters: string[];
}

export interface NavSection {
    id: SectionId;
    label: string;
}

export interface StackGroup {
    title: string;
    items: string[];
}

export interface ChatMessage {
    id: string;
    role: MessageRole;
    content: string;
}

export interface ContributionStats {
    activeDays: number;
    activeWeeks: number;
    currentStreak: number;
    longestStreak: number;
}

export type ContributionLoadStatus = 'loading' | 'live' | 'fallback';

export interface GithubContributionPayload {
    username: string;
    fetchedAt: string;
    months: string[];
    weeks: number[][];
    totalContributions: number;
    stats: ContributionStats;
}
