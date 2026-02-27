import React from 'react';
import { useUI } from '../contexts/UIContext';
import { IconHome, IconShoppingBag, IconTag, IconStore, IconChart, IconSettings, IconDollar, IconBookOpen } from '../constants';
import zachcartLogo from '../assets/branding/zachcart-logo.svg';
import zachcartIcon from '../assets/branding/zachcart-icon.png';
import { buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';
import { ViewType } from '../types';

type SidebarView = Extract<ViewType, 'home' | 'orders' | 'catalog' | 'channels' | 'partners' | 'settings' | 'financial' | 'help'>;

interface SidebarMenuItem {
    id: SidebarView;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    hasSubmenu?: boolean;
}

export const Sidebar: React.FC = () => {
    const { currentView, navigate, isSidebarCollapsed } = useUI();

    const menuItems: SidebarMenuItem[] = [
        { id: 'home', label: 'Home', icon: IconHome },
        { id: 'orders', label: 'Orders', icon: IconShoppingBag },
        { id: 'catalog', label: 'Catalog', icon: IconTag },
        { id: 'channels', label: 'Channels', icon: IconStore, hasSubmenu: true },
        { id: 'partners', label: 'Partners', icon: IconChart },

        { id: 'settings', label: 'Settings', icon: IconSettings },
        { id: 'financial', label: 'Finance', icon: IconDollar },
        { id: 'help', label: 'Help Center', icon: IconBookOpen },
    ];

    return (
        <aside className={`bg-white border-r border-gray-200 h-screen sticky top-0 flex flex-col transition-all duration-300 ${isSidebarCollapsed ? 'w-20' : 'w-64'} z-30 hidden md:flex`}>
            <div className="h-16 flex items-center px-6 border-b border-gray-200">
                {isSidebarCollapsed ? (
                    <img src={zachcartIcon} alt="ZachCart" className="h-9 w-9 rounded-lg object-cover" />
                ) : (
                    <img src={zachcartLogo} alt="ZachCart" className="h-8 w-auto" />
                )}
            </div>

            <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
                {menuItems.map((item) => {
                    const isActive = currentView.type === item.id || (item.id === 'channels' && currentView.type === 'channelManagement');
                    return (
                        <div key={item.id}>
                            <button
                                onClick={() => navigate({ type: item.id })}
                                className={cn(
                                    buttonVariants({ variant: 'ghost' }),
                                    `w-full justify-start gap-3 px-3 py-2.5 rounded-lg transition-colors h-auto ${
                                    isActive 
                                        ? 'bg-teal-50 text-teal-700 font-medium' 
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                }`
                                )}
                            >
                                <item.icon className={`w-5 h-5 ${isActive ? 'text-teal-600' : 'text-gray-500'}`} />
                                {!isSidebarCollapsed && (
                                    <span className="flex-1 text-left">{item.label}</span>
                                )}
                                {!isSidebarCollapsed && item.hasSubmenu && (
                                    <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-teal-600' : ''}`} />
                                )}
                            </button>
                            
                            {/* Submenu for Channels if active */}
                            {!isSidebarCollapsed && item.id === 'channels' && isActive && (
                                <div className="ml-11 mt-1 space-y-1">
                                    <button onClick={() => navigate({ type: 'channels' })} className="block text-sm text-teal-700 font-medium py-1">Manage Channels</button>
                                    <button onClick={() => navigate({ type: 'channelManagement', channelId: 'ifood' })} className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 py-1">
                                        <div className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center text-[8px] text-white">iF</div>
                                        iFood
                                    </button>
                                    <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 py-1">
                                        <div className="w-4 h-4 rounded-full bg-orange-500 flex items-center justify-center text-[8px] text-white">R</div>
                                        Rappi
                                    </button>
                                    <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 py-1">
                                        <div className="w-4 h-4 rounded-full bg-purple-600 flex items-center justify-center text-[8px] text-white">Ai</div>
                                        AiQFome
                                    </button>
                                </div>
                            )}
                        </div>
                    );
                })}
            </nav>
        </aside>
    );
};
