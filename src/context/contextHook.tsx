import React, { createContext, useContext } from 'react';

export interface ContextData {
    activeIndex: number;
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const Context = createContext<ContextData | undefined>(undefined);

// Create a custom hook to use the context
const UseLinkContext = (): ContextData => {
    const context = useContext(Context);
    if (!context) {
        throw new Error('useLinkContext must be used within a Provider');
    }
    return context;
};

export default UseLinkContext;
