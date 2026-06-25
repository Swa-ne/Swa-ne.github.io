import Resume from '../assets/Resume.pdf';
import Profile from '../assets/image/profile.jpg';
import ProfileDark from '../assets/image/profile-dark.jpg';
import Upang from '../assets/image/Upang.png';
import CS50 from '../assets/image/certificate/CS50x.png';
import Blockchain from '../assets/image/certificate/blockchain.jpg';
import Sakay from '../assets/image/project/sakay.png';
import Unilodge from '../assets/image/project/Unilodge.jpg';
import FundChain from '../assets/image/project/FundChain.jpg';
import MessagingApp from '../assets/image/project/messaging-app.jpg';
import PhinmaHub from '../assets/image/project/phinma-hub.jpg';
import PhinmaPulse from '../assets/image/project/phinma-pulse.png';
import NetflixClone from '../assets/image/project/netflix-clone.png';
import WheelWander from '../assets/image/project/wheel-wander.png';
import Wordle from '../assets/image/project/wordle.jpg';
import type { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
    brand: 'Swane',
    name: 'Stephen Paul Bautista',
    role: 'Full-Stack Developer',
    location: 'Quezon City, Philippines',
    email: 'spaulbautista@gmail.com',
    phone: '+63 938 734 8674',
    headline: 'Building production-ready web and mobile products with clean architecture, practical AI, and polished UX.',
    availability: 'Open to full-stack, product engineering, and AI-assisted web development roles.',
    resumeUrl: Resume,
    profileImage: [Profile, ProfileDark],
    intro: [
        'I design and build full-stack applications that balance clear interfaces, maintainable systems, and fast product execution.',
        'My experience spans React, Node.js, Laravel, mobile development, AI-powered features, and database-backed products built for real workflows.',
        'I bring a product-minded engineering style: understand the user flow, ship the core experience cleanly, and keep the codebase easy to extend.',
    ],
    highlights: [
        { label: 'Current focus', value: 'Full-stack product engineering' },
        { label: 'Recent experience', value: 'ActionLabs and Mind You internships' },
        { label: 'Primary stack', value: 'React, TypeScript, Node.js, Laravel' },
        { label: 'Working style', value: 'Polished UX, clean APIs, practical AI' },
    ],
    capabilities: [
        {
            title: 'Full-stack product delivery',
            description: 'React, mobile, Node.js, Laravel, and database-backed applications shaped around usable product flows.',
        },
        {
            title: 'Clean interface architecture',
            description: 'Structured UI systems, reusable components, and calm layouts that make complex workflows feel approachable.',
        },
        {
            title: 'AI-assisted workflow thinking',
            description: 'Practical AI integrations, automation tools, and decision-support features that improve real product operations.',
        },
    ],
    toolkit: ['JavaScript', 'TypeScript', 'Python', 'Java', 'Kotlin', 'Dart', 'C/C++', 'PHP', 'React', 'Next.js', 'React Native', 'Flutter', 'HTML', 'CSS', 'Tailwind CSS', 'Sass', 'Node.js', 'Express.js', 'Django', 'Flask', 'Socket.IO', 'Laravel', 'LangChain', 'AWS', 'Google Cloud Platform', 'Firebase', 'Docker', 'MySQL', 'MongoDB', 'Postgres', 'Redis', 'Git', 'GitHub', 'Figma', 'Postman', 'Android Studio'],
    socialLinks: [
        { label: 'GitHub', href: 'https://github.com/Swa-ne' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/stephen-bautista/' },
        { label: 'Email', href: 'mailto:spaulbautista@gmail.com' },
        { label: 'Phone', href: 'tel:+639387348674' },
        { label: 'Instagram', href: 'https://www.instagram.com/14tepen/' },
        { label: 'Facebook', href: 'https://www.facebook.com/stephenpaul.bautista' },
    ],
    experience: [
        {
            title: 'Full Stack Developer Intern',
            organization: 'ActionLabs',
            period: 'Nov 2025 - Mar 2026',
            description: 'Designed and developed a scalable full-stack web application from scratch using Laravel, React.js, and MySQL, contributing to frontend architecture and backend API development.',
            highlights: [
                'Implemented secure role-based access control with dynamic user schemas and protected CRUD operations.',
                'Led Git repository management for frontend and backend codebases with structured branching practices.',
                'Built Python automation tools for database backup, validation, and structured dataset preparation.',
            ],
        },
        {
            title: 'Web Developer Intern',
            organization: 'Mind You',
            period: 'Apr 2025 - Nov 2025',
            description: 'Developed production-facing web features, AI-assisted workflows, and internal dashboard tools while collaborating with senior developers in agile sprints.',
            highlights: [
                'Built AI-powered features including image generation workflows and an LLM-based support ticket categorization system.',
                'Created developer and admin dashboard views for ticket data, metrics, and operational visibility.',
                'Participated in scrum meetings, code reviews, bug fixing, and iterative production-quality delivery.',
            ],
        },
    ],
    education: [
        {
            title: 'Bachelor of Science in Information Technology in Systems Development',
            organization: 'PHINMA University of Pangasinan',
            period: '2026',
            description: 'Degree program focused on systems development, software engineering fundamentals, and applied product-building practice.',
            image: Upang,
        },
        {
            title: 'High School Diploma',
            organization: 'PHINMA University of Pangasinan',
            period: 'March 2022',
            description: 'Completed high school before moving into college-level systems development and software engineering work.',
            image: Upang,
        },
    ],
    certifications: [
        {
            title: 'Best System Development Project',
            year: 'University of Pangasinan, 2026',
            image: Upang,
        },
        {
            title: "CS50's Introduction to Computer Science",
            year: 'Harvard University, June 2020',
            image: CS50,
        },
        {
            title: 'Harnessing Blockchain to Succeed with the New Normal',
            year: 'Lyceum-Northwestern University, March 2021',
            image: Blockchain,
        },
    ],
    projects: [
        {
            title: 'Sakay',
            image: Sakay,
            stack: ['Figma', 'Flutter', 'Node.js', 'Express.js', 'MongoDB', 'Python', 'Flask', 'Redis', 'Docker'],
            repositoryUrl: 'https://github.com/Swa-ne/Sakay',
            description: 'A GPS-powered bus tracking and commuter assistance platform for the Lingayen-Dagupan route.',
            impact: ['Implemented realtime tracking, ETA predictions, and proximity alerts.', 'Reduced average passenger waiting time by an estimated 25%.', 'Built driver-side tools for demand visibility and route optimization.'],
            featured: true,
        },
        {
            title: 'UniLodge',
            image: Unilodge,
            stack: ['Figma', 'Flutter', 'Node.js', 'Express.js', 'MongoDB', 'Python', 'Flask'],
            repositoryUrl: 'https://github.com/Swa-ne/UniLodge',
            description: 'A dormitory rental and listing platform that helps students and young professionals search, compare, and book housing.',
            impact: ['Engineered advanced filters for location, price, and amenities.', 'Enabled dorm owners to publish listings, track bookings, and view rental performance.', 'Implemented booking, messaging, reviews, and ratings to improve trust.'],
            featured: true,
        },
        {
            title: 'PHINMA Hub',
            image: PhinmaHub,
            stack: ['Figma', 'React.js', 'React Native', 'Node.js', 'Express.js', 'MongoDB'],
            repositoryUrl: 'https://github.com/Zaisuki/PHubFinalProj',
            description: 'A cross-platform learning and communication tool for professors and students.',
            impact: ['Built instructor and student panels for homework, grading, and progress monitoring.', 'Implemented notifications, chat rooms, and calendar integration.', 'Streamlined academic task management and announcements.'],
            featured: true,
        },
        {
            title: 'Messaging App',
            image: MessagingApp,
            stack: ['TypeScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB'],
            repositoryUrl: 'https://github.com/Swa-ne/messagingApp',
            previewUrl: 'https://messagingappclient.onrender.com',
            description: 'A full-stack messaging application focused on responsive conversation flows and clean API structure.',
            impact: ['Built reusable React interfaces for conversations and message states.', 'Implemented Express and MongoDB-backed message persistence.', 'Published a live preview for quick product review.'],
        },
        {
            title: 'FundChain',
            image: FundChain,
            stack: ['Figma', 'TypeScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'ReOwn'],
            repositoryUrl: 'https://github.com/ITHINKERBELL/ITHINKERBELL---FundChain',
            description: 'A fundraising platform concept exploring transparent digital donation workflows.',
            impact: ['Designed product flows in Figma before implementation.', 'Built full-stack web features with React and Express.', 'Explored wallet-connected fundraising experiences using ReOwn.'],
        },
        {
            title: 'PHINMA Pulse',
            image: PhinmaPulse,
            stack: ['Figma', 'TypeScript', 'React.js', 'React Native', 'Node.js', 'Express.js', 'MongoDB'],
            repositoryUrl: 'https://github.com/Swa-ne/HATAKONTITANS',
            description: 'A campus-oriented product build using web and mobile interfaces for student-centered workflows.',
            impact: ['Contributed to cross-platform UI implementation.', 'Used React Native and React to support mobile and web experiences.', 'Worked across backend services and MongoDB data flows.'],
        },
        {
            title: 'Wheel Wander',
            image: WheelWander,
            stack: ['Figma', 'TypeScript', 'Kotlin', 'Android Studio', 'Node.js', 'Express.js', 'MySQL'],
            repositoryUrl: 'https://github.com/Swa-ne/Wheel-Wander',
            description: 'A travel and mobility application built with Android and backend technologies.',
            impact: ['Designed product flows before development.', 'Built Android app functionality with Kotlin.', 'Connected mobile behavior to Node.js, Express, and MySQL services.'],
        },
        {
            title: 'Netflix Clone',
            image: NetflixClone,
            stack: ['JavaScript', 'React.js', 'Sass'],
            repositoryUrl: 'https://github.com/Swa-ne/netflix-clone',
            previewUrl: 'http://swa-ne.github.io/netflix-clone/',
            description: 'A frontend recreation project focused on layout, styling, and component practice.',
            impact: ['Practiced React component composition and responsive Sass styling.', 'Recreated a familiar streaming interface to sharpen frontend execution.'],
        },
        {
            title: 'Ultimate Wordle',
            image: Wordle,
            stack: ['Python', 'Kivy', 'SQLite'],
            repositoryUrl: 'https://github.com/Swa-ne/fWordle',
            description: 'A Python desktop game project built with Kivy and SQLite-backed persistence.',
            impact: ['Implemented interactive game logic and local data storage.', 'Used the project to deepen Python UI and database fundamentals.'],
        },
    ],
    chatStarters: ['What roles is Stephen a fit for?', 'What technologies does he use most?', 'Tell me about his internships.', 'Which projects should I check first?'],
};
