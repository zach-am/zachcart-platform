import React from 'react';
import { SalesChannel } from '../types';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';

export const ChannelCard: React.FC<{ channel: SalesChannel; status: string; onClick: () => void }> = ({ channel, status, onClick }) => {
    const isConnected = status === 'active';
    const statusLabel = isConnected ? 'Active' : status === 'available' ? 'Available' : status.replace(/_/g, ' ');
    const statusClassName = isConnected
        ? 'bg-green-100 text-green-800'
        : 'bg-slate-100 text-slate-700';

    return (
        <button onClick={onClick} className="group h-full w-full text-left">
            <Card className="h-full rounded-xl border-gray-200 shadow-sm transition-all group-hover:shadow-md">
                <CardContent className="flex h-full flex-col justify-between p-6">
                    <div className="flex flex-col items-center w-full">
                        <div className="mb-2 flex w-full justify-between">
                            <div className="flex items-center gap-2">
                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${channel.color} text-white shadow-sm`}>
                                    {channel.icon}
                                </div>
                                <div className="text-left">
                                    <h3 className="text-lg font-bold text-gray-800 leading-tight">{channel.name}</h3>
                                    <p className="text-xs text-gray-500">{channel.type === 'delivery' ? 'Sales Channel' : 'Advertising Channel'}</p>
                                </div>
                            </div>
                            <Badge variant="secondary" className={cn('h-fit border-0 text-xs font-bold', statusClassName)}>
                                {statusLabel}
                            </Badge>
                        </div>

                        <p className="text-sm text-gray-600 text-left w-full mt-2 mb-4 line-clamp-3">
                            {channel.description || `Complete integration with ${channel.name} for catalog and order synchronization.`}
                        </p>
                    </div>
                    
                    <div className="w-full pt-4 border-t border-gray-100">
                        <span className={cn(buttonVariants({ variant: 'outline' }), 'w-full border-gray-300 text-sm font-semibold text-gray-700 shadow-none hover:bg-gray-50')}>
                            {isConnected ? 'Manage Channel' : 'View Details'}
                        </span>
                    </div>
                </CardContent>
            </Card>
        </button>
    );
};
