import { useEffect, useState } from 'react';
import type { ThemeMode } from '../types/portfolio';

function getInitialTheme(): ThemeMode {
    if (typeof window === 'undefined') {
        return 'light';
    }

    const savedTheme = window.localStorage.getItem('portfolio-theme');

    if (savedTheme === 'light' || savedTheme === 'dark') {
        return savedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function useThemeMode() {
    const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        window.localStorage.setItem('portfolio-theme', theme);
    }, [theme]);

    return { theme, setTheme };
}
