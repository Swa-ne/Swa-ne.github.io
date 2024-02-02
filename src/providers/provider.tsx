import React, { ReactNode, useState } from 'react';
import { Context, ContextData } from '../context/contextHook';

interface ProviderProps {
    children: ReactNode;
}

const Provider: React.FC<ProviderProps> = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [theme, setTheme] = useState<string>('');

    const contextValue: ContextData = {
        activeIndex,
        setActiveIndex,
        theme,
        setTheme,
    };

    return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default Provider;
