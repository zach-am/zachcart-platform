import React, { createContext, useContext } from 'react';

interface UserContextValue {}

const defaultUserValue: UserContextValue = {};

export const UserContext = createContext<UserContextValue>(defaultUserValue);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <UserContext.Provider value={defaultUserValue}>{children}</UserContext.Provider>
);

export const useUser = () => useContext(UserContext);
