import React, { createContext, useContext } from 'react';

interface CatalogContextValue {}

const defaultCatalogValue: CatalogContextValue = {};

export const CatalogContext = createContext<CatalogContextValue>(defaultCatalogValue);

export const CatalogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <CatalogContext.Provider value={defaultCatalogValue}>{children}</CatalogContext.Provider>
);

export const useCatalog = () => useContext(CatalogContext);
