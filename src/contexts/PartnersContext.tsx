import React, { createContext, useContext, useState } from 'react';
import { Partner } from '../types';

interface PartnersContextType {
    partnerStatuses: Map<string, 'active' | 'available' | 'in_progress'>;
    openPartnerModal: (partner: Partner) => void;
}

const PartnersContext = createContext<PartnersContextType | undefined>(undefined);

export const PartnersProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [partnerStatuses] = useState(new Map([['iqvia', 'available'], ['cimed', 'available']]));
    const openPartnerModal = (_partner: Partner) => {};

    return (
        <PartnersContext.Provider value={{ partnerStatuses, openPartnerModal }}>
            {children}
        </PartnersContext.Provider>
    );
};

export const usePartners = () => {
    const context = useContext(PartnersContext);
    if (!context) throw new Error('usePartners must be used within PartnersProvider');
    return context;
};
