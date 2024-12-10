import Unilodge from '../assets/image/project/Unilodge.jpg';
import FundChain from '../assets/image/project/FundChain.jpg';
import MessagingApp from '../assets/image/project/messaging-app.jpg';
import PhinmaHub from '../assets/image/project/phinma-hub.jpg';
import NetflixClone from '../assets/image/project/netflix-clone.jpg';
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
        name: 'Unilodge',
        img: Unilodge,
        tech: 'Flutter | NodeJS | MongoDB',
        repo: 'https://github.com/Swa-ne/UniLodge',
        link: 'https://github.com/Swa-ne/UniLodge',
    },
    {
        id: 2,
        name: 'FundChain',
        img: FundChain,
        tech: 'ReactJS | TypeScript | NodeJS | WalletConnect',
        repo: 'https://github.com/ITHINKERBELL/ITHINKERBELL---FundChain',
        link: 'https://github.com/ITHINKERBELL/ITHINKERBELL---FundChain',
    },
    {
        id: 3,
        name: 'Messaging App',
        img: MessagingApp,
        tech: 'Python | Kivy | SQLite',
        repo: 'https://github.com/Swa-ne/messagingApp',
        link: 'https://messagingappclient.onrender.com',
    },
    {
        id: 4,
        name: 'PHINMA Hub',
        img: PhinmaHub,
        tech: 'ReactJS | React Native | NodeJS | MongoDB',
        repo: 'https://github.com/Zaisuki/PHubFinalProj',
        link: 'https://github.com/Zaisuki/PHubFinalProj',
    },
    {
        id: 5,
        name: 'Netflix Clone',
        img: NetflixClone,
        tech: 'React JS | CSS',
        repo: 'https://github.com/Swa-ne/netflix-clone',
        link: 'https://github.com/Swa-ne/netflix-clone',
    },
    {
        id: 6,
        name: 'Ultimate Wordle',
        img: Wordle,
        tech: 'Python | Kivy | SQLite',
        repo: 'https://github.com/Swa-ne/fWordle',
        link: 'https://github.com/Swa-ne/fWordle',
    },
];
