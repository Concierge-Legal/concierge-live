import React, { createContext, useContext, ReactNode } from 'react';

type ChatContextType = {
    currentlyStreamingBlockId: String;
    showLoadingIcon: boolean;
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const useChatContext = () => {
    const context = useContext(ChatContext);
    if (!context) throw new Error('useChatContext must be used within a ChatContextProvider');
    return context;
};

interface ChatContextProviderProps {
    children: ReactNode;
    value: ChatContextType;
}

export const ChatContextProvider: React.FC<ChatContextProviderProps> = ({ children, value }) => (
    <ChatContext.Provider value={value}>{children}</ChatContext.Provider>
);
