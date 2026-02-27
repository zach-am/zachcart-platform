import React from 'react';
import { Partner } from '../types';

export const PartnerCard: React.FC<{ partner: Partner; status: string; onClick: () => void }> = ({ partner, onClick }) => (
    <div onClick={onClick} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 cursor-pointer hover:shadow-md transition-all">
        <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-teal-600">
                {partner.logo}
            </div>
            <div>
                <h3 className="font-bold text-gray-800">{partner.name}</h3>
                <span className="text-xs font-semibold text-teal-600 bg-teal-50 px-2 py-1 rounded-full">{partner.category}</span>
            </div>
        </div>
        <p className="text-sm text-gray-600 mb-3">{partner.description}</p>
        <div className="text-sm font-bold text-teal-700">{partner.benefit}</div>
    </div>
);
