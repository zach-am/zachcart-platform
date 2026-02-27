import React, { createContext, useContext, useState } from 'react';
import { ChannelStatus, ChannelConfig, SalesChannel } from '../types';

interface ChannelsContextType {
    channelStatuses: Map<string, ChannelStatus>;
    channelConfigs: Map<string, ChannelConfig>;
    openOnboardingModal: (channel: SalesChannel) => void;
    updateChannelConfig: (channelId: string, config: Partial<ChannelConfig>) => void;
}

const ChannelsContext = createContext<ChannelsContextType | undefined>(undefined);

export const ChannelsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [channelStatuses] = useState<Map<string, ChannelStatus>>(new Map([
        ['ifood', 'active'],
        ['rappi', 'available'],
        ['uber_eats', 'available'],
        ['google_shopping', 'available'],
        ['aiqfome', 'active']
    ]));
    
    const [channelConfigs, setChannelConfigs] = useState<Map<string, ChannelConfig>>(new Map([
        ['ifood', { channelId: 'ifood', preparationTimeInMinutes: 20, autoAcceptOrders: true }],
        ['aiqfome', { channelId: 'aiqfome', preparationTimeInMinutes: 30 }]
    ]));

    const openOnboardingModal = (_channel: SalesChannel) => {};

    const updateChannelConfig = (channelId: string, config: Partial<ChannelConfig>) => {
        setChannelConfigs(prev => {
            const newMap = new Map<string, ChannelConfig>(prev);
            const current = newMap.get(channelId) || ({ channelId } as ChannelConfig);
            newMap.set(channelId, { ...current, ...config });
            return newMap;
        });
    };

    return (
        <ChannelsContext.Provider value={{ channelStatuses, channelConfigs, openOnboardingModal, updateChannelConfig }}>
            {children}
        </ChannelsContext.Provider>
    );
};

export const useChannels = () => {
    const context = useContext(ChannelsContext);
    if (!context) throw new Error('useChannels must be used within ChannelsProvider');
    return context;
};
