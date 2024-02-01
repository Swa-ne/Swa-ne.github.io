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
        name: 'Netflix Clone',
        img: NetflixClone,
        tech: 'React JS | CSS',
        repo: 'https://github.com/Swa-ne/netflix-clone',
        link: 'https://github.com/Swa-ne/netflix-clone',
    },
    {
        id: 2,
        name: 'Ultimate Wordle',
        img: Wordle,
        tech: 'Python | Kivy | SQLite',
        repo: 'https://github.com/Swa-ne/fWordle',
        link: 'https://github.com/Swa-ne/fWordle',
    },
];
