import React from 'react';
import { Partner } from '../types';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

export const PartnerCard: React.FC<{ partner: Partner; status: string; onClick: () => void }> = ({ partner, status, onClick }) => (
    <button onClick={onClick} className="w-full text-left">
        <Card className="rounded-xl border-gray-200 shadow-sm transition-all hover:shadow-md">
            <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 text-teal-600">
                        {partner.logo}
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-800">{partner.name}</h3>
                        <Badge variant="secondary" className="border-0 bg-teal-50 px-2 py-1 text-xs font-semibold text-teal-600">{partner.category}</Badge>
                    </div>
                </div>
                <p className="mb-3 text-sm text-gray-600">{partner.description}</p>
                <div className="flex items-center justify-between">
                    <div className="text-sm font-bold text-teal-700">{partner.benefit}</div>
                    <Badge variant="secondary" className="border-0 bg-slate-100 text-slate-700">{status.replace(/_/g, ' ')}</Badge>
                </div>
            </CardContent>
        </Card>
    </button>
);
