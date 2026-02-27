import React from 'react';
import { IconChevronLeft } from '../constants';
import { useUI } from '../contexts/UIContext';

interface PageHeaderProps {
    title: string;
    description?: string;
    actions?: React.ReactNode;
    showBackButton?: boolean;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, description, actions, showBackButton }) => {
    const { navigate } = useUI();
    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
                {showBackButton && (
                    <button onClick={() => navigate({ type: 'home' })} className="p-2 hover:bg-gray-200 rounded-full">
                        <IconChevronLeft className="w-6 h-6 text-gray-600" />
                    </button>
                )}
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
                    {description && <p className="text-gray-500 mt-1">{description}</p>}
                </div>
            </div>
            {actions && <div className="flex items-center gap-3">{actions}</div>}
        </div>
    );
};
