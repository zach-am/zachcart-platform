import React, { createContext, useContext } from 'react';

interface CompanyContextValue {
    hasOverduePayment: boolean;
}

const defaultCompanyValue: CompanyContextValue = { hasOverduePayment: false };

export const CompanyContext = createContext<CompanyContextValue>(defaultCompanyValue);

export const CompanyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <CompanyContext.Provider value={defaultCompanyValue}>{children}</CompanyContext.Provider>
);

export const useCompany = () => useContext(CompanyContext);
