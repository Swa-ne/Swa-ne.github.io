import type { NavSection, StackGroup } from '../types/portfolio';

export const sections: NavSection[] = [
    { id: 'home', label: 'About' },
    { id: 'journey', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
];

export const stackGroups: StackGroup[] = [
    {
        title: 'Programming Languages',
        items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'Kotlin', 'Dart', 'C/C++', 'PHP'],
    },
    {
        title: 'Frontend and Mobile',
        items: ['React', 'Next.js', 'React Native', 'Flutter', 'HTML', 'CSS', 'Tailwind CSS', 'Sass'],
    },
    {
        title: 'Backend and AI',
        items: ['Node.js', 'Express.js', 'Django', 'Flask', 'Socket.IO', 'Laravel', 'LangChain'],
    },
    {
        title: 'Cloud, Data, and Tools',
        items: ['AWS', 'Google Cloud', 'Firebase', 'Docker', 'MySQL', 'MongoDB', 'Postgres', 'Redis', 'Git', 'GitHub', 'Figma'],
    },
];
