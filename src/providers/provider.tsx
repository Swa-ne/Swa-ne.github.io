import React, { ReactNode, useState } from 'react';
import { Context, ContextData } from '../context/contextHook';

interface ProviderProps {
    children: ReactNode;
}

const Provider: React.FC<ProviderProps> = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const contextValue: ContextData = {
        activeIndex,
        setActiveIndex,
    };

    return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default Provider;
