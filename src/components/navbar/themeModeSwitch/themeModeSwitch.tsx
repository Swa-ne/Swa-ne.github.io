import { useEffect, useState } from 'react';
import { ThemeContext } from '../../../utils/handleLinkChange';

const ThemeModeSwitch: React.FC = () => {
    const [darkMode, setDarkMode] = useState(false);
    const { setTheme } = ThemeContext();
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : '');
        setTheme(darkMode ? 'dark' : '');
    }, [darkMode]);

    return (
        <div
            className='theme_mode_switch'
            onClick={() => {
                setDarkMode((prev) => !prev);
            }}
        >
            <i className={`bi ${darkMode ? 'bi-moon-fill' : 'bi-brightness-high'} cursor-pointer text-base`}></i>
        </div>
    );
};

export default ThemeModeSwitch;
