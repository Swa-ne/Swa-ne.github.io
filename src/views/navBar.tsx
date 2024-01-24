// import { useEffect, useState } from 'react';
import '../assets/scss/nav.scss';
import DarkMode from '../components/darkMode/DarkMode';

const NavBar: React.FC = () => {
    // const [darkMode, setDarkMode] = useState();
    // useEffect(() => {}, [darkMode]);
    return (
        <nav className='w-screen p-5 bg-transparent flex justify-around'>
            <h1 className='font-black text-xl'>Swane</h1>
            <ul className='w-1/2 flex justify-around'>
                <li>Project</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <DarkMode />
        </nav>
    );
};

export default NavBar;
