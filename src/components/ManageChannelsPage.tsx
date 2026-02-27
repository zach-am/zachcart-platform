import React from 'react';
import { PageHeader } from './PageHeader';
import { SALES_CHANNELS, IconSearch, IconFilter, IconPlus, IconCheckCircle } from '../constants';
import { ChannelCard } from './ChannelCard';
import { useChannels } from '../contexts/ChannelsContext';
import { useUI } from '../contexts/UIContext';

export const ManageChannelsPage: React.FC = () => {
    const { channelStatuses, openOnboardingModal } = useChannels();
    const { navigate } = useUI();

    const activeChannels = SALES_CHANNELS.filter(c => channelStatuses.get(c.id) === 'active');
    const availableChannels = SALES_CHANNELS.filter(c => channelStatuses.get(c.id) !== 'active');

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <PageHeader title="Channels" description="Activate and manage your business integrations" />

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Onboarding</p>
                        <p className="text-3xl font-bold text-gray-900 mt-1">0</p>
                    </div>
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600">
                        <IconPlus className="w-6 h-6" />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Available</p>
                        <p className="text-3xl font-bold text-gray-900 mt-1">{availableChannels.length}</p>
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                        <IconPlus className="w-6 h-6" />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Active</p>
                        <p className="text-3xl font-bold text-gray-900 mt-1">{activeChannels.length}</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                        <IconCheckCircle className="w-6 h-6" />
                    </div>
                </div>
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Available Channels</h2>
                
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="relative flex-1">
                        <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input 
                            type="text" 
                            placeholder="Search" 
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                        />
                    </div>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg flex items-center gap-2 text-gray-700 hover:bg-gray-50">
                        Sort: A-Z
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {SALES_CHANNELS.map(channel => (
                        <ChannelCard 
                            key={channel.id} 
                            channel={channel} 
                            status={channelStatuses.get(channel.id) || 'available'} 
                            onClick={() => {
                                if (channelStatuses.get(channel.id) === 'active') {
                                    navigate({ type: 'channelManagement', channelId: channel.id });
                                } else {
                                    openOnboardingModal(channel);
                                }
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

