import Sakay from '../assets/image/project/sakay.png';
import Unilodge from '../assets/image/project/Unilodge.jpg';
import FundChain from '../assets/image/project/FundChain.jpg';
import MessagingApp from '../assets/image/project/messaging-app.jpg';
import PhinmaHub from '../assets/image/project/phinma-hub.jpg';
import PhinmaPulse from '../assets/image/project/phinma-pulse.png';
import NetflixClone from '../assets/image/project/netflix-clone.png';
import WheelWander from '../assets/image/project/wheel-wander.png';
import Wordle from '../assets/image/project/wordle.jpg';

interface projectDataInterface {
    id: number;
    name: string;
    img: string;
    tech: string;
    repo: string;
    link: string;
}
export const projectData: Array<projectDataInterface> = [
    {
        id: 1,
        name: 'Ultimate Wordle',
        img: Wordle,
        tech: 'Python | Kivy | SQLite',
        repo: 'https://github.com/Swa-ne/fWordle',
        link: 'https://github.com/Swa-ne/fWordle',
    },
    {
        id: 2,
        name: 'Netflix Clone',
        img: NetflixClone,
        tech: 'JavaScript | React.js | Sass',
        repo: 'https://github.com/Swa-ne/netflix-clone',
        link: 'https://github.com/Swa-ne/netflix-clone',
    },
    {
        id: 3,
        name: 'Wheel Wander',
        img: WheelWander,
        tech: 'Figma | TypeScript | Kotlin | Android Studio | Node.js | Express.js | MySQL',
        repo: 'https://github.com/Swa-ne/Wheel-Wander',
        link: 'https://github.com/Swa-ne/Wheel-Wander',
    },
    {
        id: 4,
        name: 'PHINMA Pulse',
        img: PhinmaPulse,
        tech: 'Figma | TypeScript | React.js | React Native | Node.js | Express.js | MongoDB',
        repo: 'https://github.com/Swa-ne/HATAKONTITANS',
        link: 'https://github.com/Swa-ne/HATAKONTITANS',
    },
    {
        id: 5,
        name: 'FundChain',
        img: FundChain,
        tech: 'Figma | TypeScript | React.js | Node.js | Express.js | MongoDB | ReOwn',
        repo: 'https://github.com/ITHINKERBELL/ITHINKERBELL---FundChain',
        link: 'https://github.com/ITHINKERBELL/ITHINKERBELL---FundChain',
    },
    {
        id: 6,
        name: 'Messaging App',
        img: MessagingApp,
        tech: 'TypeScript | React.js | Node.js | Express.js | MongoDB',
        repo: 'https://github.com/Swa-ne/messagingApp',
        link: 'https://messagingappclient.onrender.com',
    },
    {
        id: 7,
        name: 'PHINMA Hub',
        img: PhinmaHub,
        tech: 'Figma | React.js | React Native | TypeScript | Node.js | Express.js | MongoDB',
        repo: 'https://github.com/Zaisuki/PHubFinalProj',
        link: 'https://github.com/Zaisuki/PHubFinalProj',
    },
    {
        id: 8,
        name: 'Unilodge',
        img: Unilodge,
        tech: 'Figma | Flutter | TypeScript | Node.js | Express.js | MongoDB | Python',
        repo: 'https://github.com/Swa-ne/UniLodge',
        link: 'https://github.com/Swa-ne/UniLodge',
    },
    {
        id: 9,
        name: 'Sakay',
        img: Sakay,
        tech: 'Figma | Flutter | TypeScript | Node.js | Express.js | MongoDB | Python | Redis',
        repo: 'https://github.com/Swa-ne/Sakay',
        link: 'https://github.com/Swa-ne/Sakay',
    },
];
