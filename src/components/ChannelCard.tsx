import React from 'react';
import { SalesChannel } from '../types';
import { IconCheckCircle, IconSettings, IconPlus } from '../constants';

export const ChannelCard: React.FC<{ channel: SalesChannel; status: string; onClick: () => void }> = ({ channel, status, onClick }) => {
    const isConnected = status === 'active';
    return (
        <button onClick={onClick} className="flex flex-col items-center p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all w-full text-center group h-full justify-between">
            <div className="flex flex-col items-center w-full">
                <div className="flex justify-between w-full mb-2">
                     <div className="flex items-center gap-2">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${channel.color} text-white shadow-sm`}>
                            {channel.icon}
                        </div>
                        <div className="text-left">
                            <h3 className="text-lg font-bold text-gray-800 leading-tight">{channel.name}</h3>
                            <p className="text-xs text-gray-500">{channel.type === 'delivery' ? 'Sales Channel' : 'Advertising Channel'}</p>
                        </div>
                     </div>
                     <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full h-fit">Available</span>
                </div>
                
                <p className="text-sm text-gray-600 text-left w-full mt-2 mb-4 line-clamp-3">
                    {channel.description || `Complete integration with ${channel.name} for catalog and order synchronization.`}
                </p>
            </div>
            
            <div className="w-full pt-4 border-t border-gray-100">
                <div className="w-full py-2 rounded-lg border border-gray-300 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                    Details
                </div>
            </div>
        </button>
    );
};
