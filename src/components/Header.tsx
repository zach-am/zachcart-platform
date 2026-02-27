import React from 'react';
import { IconUser, IconHelp, IconChevronDown } from '../constants';
import { useUI } from '../contexts/UIContext';
import zachcartIcon from '../assets/branding/zachcart-icon.png';

export const Header: React.FC = () => {
    const { navigate } = useUI();
    return (
        <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6 z-20 sticky top-0">
            <div className="flex items-center gap-2 md:hidden">
                <img src={zachcartIcon} alt="ZachCart" className="h-8 w-8 rounded-lg object-cover" />
            </div>
            <div className="flex-1"></div>
            <div className="flex items-center gap-4">
                <div className="hidden md:flex flex-col items-end mr-2">
                    <span className="text-xs text-gray-500">Company</span>
                    <div className="flex items-center gap-1 font-medium text-sm text-gray-700">
                        Nossa Pharmacy (H... <IconChevronDown className="w-3 h-3" />
                    </div>
                </div>
                <button onClick={() => navigate({ type: 'help' })} className="p-2 text-white bg-teal-500 hover:bg-teal-600 rounded-full shadow-sm">
                    <IconHelp className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1 rounded-lg transition-colors">
                    <div className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center">
                        <IconUser className="w-5 h-5 text-white" />
                    </div>
                </div>
            </div>
        </header>
    );
};
