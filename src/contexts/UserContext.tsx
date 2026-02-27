import React, { createContext, useContext } from 'react';
export const UserContext = createContext<any>(null);
export const UserProvider: React.FC<{children: React.ReactNode}> = ({children}) => <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
export const useUser = () => useContext(UserContext);
