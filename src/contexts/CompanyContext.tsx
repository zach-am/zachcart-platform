import React, { createContext, useContext } from 'react';
export const CompanyContext = createContext<any>({ hasOverduePayment: false });
export const CompanyProvider: React.FC<{children: React.ReactNode}> = ({children}) => <CompanyContext.Provider value={{ hasOverduePayment: false }}>{children}</CompanyContext.Provider>;
export const useCompany = () => useContext(CompanyContext);
