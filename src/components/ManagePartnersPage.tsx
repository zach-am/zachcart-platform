import React from 'react';
import { PageHeader } from './PageHeader';
import { PARTNERS } from '../constants';
import { PartnerCard } from './PartnerCard';
import { usePartners } from '../contexts/PartnersContext';

export const ManagePartnersPage: React.FC = () => {
    const { partnerStatuses, openPartnerModal } = usePartners();

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <PageHeader title="Partners" description="Connect with partners to boost your business." />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PARTNERS.map(partner => (
                    <PartnerCard 
                        key={partner.id} 
                        partner={partner} 
                        status={partnerStatuses.get(partner.id) || 'available'} 
                        onClick={() => openPartnerModal(partner)} 
                    />
                ))}
            </div>
        </div>
    );
};
