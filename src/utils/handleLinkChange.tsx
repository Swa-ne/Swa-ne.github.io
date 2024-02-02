import useLinkContext from '../context/contextHook';
export const ActiveIndexContext = () => {
    const { activeIndex, setActiveIndex } = useLinkContext();

    return { activeIndex, setActiveIndex };
};

export const ThemeContext = () => {
    const { theme, setTheme } = useLinkContext();

    return { theme, setTheme };
};
