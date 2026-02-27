import React from 'react';
import { PageHeader } from './PageHeader';
import { useUI } from '../contexts/UIContext';
import { useChannels } from '../contexts/ChannelsContext';
import { SALES_CHANNELS, IconEdit, IconCopy } from '../constants';

export const ChannelManagementPage: React.FC = () => {
    const { currentView } = useUI();
    const { channelConfigs } = useChannels();
    const channelId = currentView.channelId;
    const channel = SALES_CHANNELS.find(c => c.id === channelId);
    const config = channelConfigs.get(channelId || '') || { channelId: channelId || '' };

    if (!channel) return <div>Channel not found</div>;

    return (
        <div className="p-6 max-w-5xl mx-auto">
            <PageHeader 
                title={channel.name} 
                description="Manage settings and business rules for this channel." 
                showBackButton
                actions={
                    <div className="flex gap-2">
                        <button className="px-4 py-2 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50">Pricing Rules</button>
                        <button className="px-4 py-2 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50">Schedule</button>
                    </div>
                }
            />

            <div className="space-y-6">
                {/* Status da Loja */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Store Status</h3>
                    <p className="text-gray-500 mb-6">Control if your store is open or closed on this channel.</p>

                    <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg mb-4">
                        <span className="font-medium text-gray-700">Manual Store Status</span>
                        <div className="flex bg-gray-200 rounded-lg p-1">
                            <button className="px-4 py-1.5 rounded-md text-sm font-medium text-gray-600">Closed</button>
                            <button className="px-4 py-1.5 bg-green-600 text-white rounded-md text-sm font-medium shadow-sm">Open</button>
                        </div>
                    </div>

                    <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                        <div>
                            <span className="font-medium text-gray-700 block">Use Business Hours</span>
                            <span className="text-sm text-gray-500">Automatically opens and closes the store. <a href="#" className="text-teal-600 hover:underline">Configure schedule</a>.</span>
                        </div>
                        <div className="w-12 h-6 bg-gray-300 rounded-full relative cursor-pointer">
                            <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5 shadow-sm"></div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 space-y-6">
                        {/* Tempo de Preparo */}
                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">Order Prep Time</h3>
                                    <p className="text-gray-500 text-sm">Average time your store takes to prepare an order.</p>
                                </div>
                                <button className="p-2 hover:bg-gray-100 rounded-full"><IconEdit className="w-4 h-4 text-gray-500" /></button>
                            </div>
                            <p className="text-3xl font-bold text-gray-900">{config.preparationTimeInMinutes || 15} minutes</p>
                            <p className="text-sm text-gray-500 mt-2">This time will be used to automatically move scheduled orders to the prep screen.</p>
                        </div>

                         {/* Horário de Funcionamento */}
                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-lg font-bold text-gray-900">Business Hours</h3>
                                <button className="p-2 hover:bg-gray-100 rounded-full"><IconEdit className="w-4 h-4 text-gray-500" /></button>
                            </div>
                            <div className="space-y-3">
                                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
                                    <div key={day} className="flex justify-between text-sm items-center border-b border-gray-50 pb-2 last:border-0">
                                        <span className="text-gray-600">{day}</span>
                                        <span className="font-medium bg-green-50 text-green-700 px-2 py-0.5 rounded">08:00 - 18:00</span>
                                    </div>
                                ))}
                                {['Saturday', 'Sunday'].map((day) => (
                                    <div key={day} className="flex justify-between text-sm items-center border-b border-gray-50 pb-2 last:border-0">
                                        <span className="text-gray-600">{day}</span>
                                        <span className="font-medium bg-gray-100 text-gray-500 px-2 py-0.5 rounded">Closed</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {/* Taxas */}
                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-lg font-bold text-gray-900">Pricing Rules</h3>
                                <button className="p-2 hover:bg-gray-100 rounded-full"><IconEdit className="w-4 h-4 text-gray-500" /></button>
                            </div>
                            <p className="text-sm text-gray-500 mb-4">Automatic price adjustments for this channel.</p>
                            
                            <div className="space-y-3">
                                <div className="bg-gray-50 p-3 rounded-lg flex justify-between items-center">
                                    <span className="text-sm font-medium text-gray-700">Channel Fee</span>
                                    <span className="text-sm font-bold text-green-600">+ 14.00%</span>
                                </div>
                                <div className="bg-gray-50 p-3 rounded-lg flex justify-between items-center">
                                    <span className="text-sm font-medium text-gray-700">Safety Margin</span>
                                    <span className="text-sm font-bold text-green-600">+ 2.00%</span>
                                </div>
                                <div className="border-t border-gray-200 pt-2 flex justify-between items-center">
                                    <span className="text-sm font-bold text-gray-900">Total Markup</span>
                                    <span className="text-sm font-bold text-teal-600">+ 16.00%</span>
                                </div>
                            </div>
                        </div>

                        {/* Credenciais */}
                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Credentials</h3>
                            <p className="text-sm text-gray-500 mb-4">Integration credentials saved for this channel.</p>
                            
                            <div className="space-y-4">
                                <div>
                                    <label className="text-xs font-semibold text-gray-500 uppercase">Merchant ID</label>
                                    <div className="flex items-center gap-2 bg-gray-50 p-2 rounded border border-gray-200 mt-1">
                                        <span className="text-sm text-gray-600 truncate flex-1">Not configured</span>
                                        <IconCopy className="w-4 h-4 text-gray-400 cursor-pointer" />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-xs font-semibold text-gray-500 uppercase">API Key</label>
                                    <div className="flex items-center gap-2 bg-gray-50 p-2 rounded border border-gray-200 mt-1">
                                        <span className="text-sm text-gray-600 truncate flex-1">•••••••••••••••</span>
                                        <IconCopy className="w-4 h-4 text-gray-400 cursor-pointer" />
                                    </div>
                                </div>
                            </div>

                            <button className="w-full mt-6 py-2 border border-gray-300 rounded-lg text-sm font-medium text-teal-700 hover:bg-teal-50">
                                Manage Credentials
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
