import React, { createContext, useContext } from 'react';
export const CatalogContext = createContext<any>(null);
export const CatalogProvider: React.FC<{children: React.ReactNode}> = ({children}) => <CatalogContext.Provider value={{}}>{children}</CatalogContext.Provider>;
export const useCatalog = () => useContext(CatalogContext);
