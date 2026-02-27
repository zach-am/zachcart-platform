import React from 'react';
import { PageHeader } from './PageHeader';
import { useOrders } from '../contexts/OrdersContext';
import { useUI } from '../contexts/UIContext';
import { IconSearch, IconFilter, IconShoppingBag, IconCheckCircle, IconClock, IconDollar } from '../constants';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const CHANNEL_BADGE_STYLES: Record<string, string> = {
    ifood: 'bg-red-100 text-red-600',
    rappi: 'bg-orange-100 text-orange-600',
    uber_eats: 'bg-green-100 text-green-600',
    aiqfome: 'bg-purple-100 text-purple-600',
};

const CHANNEL_BADGE_LABELS: Record<string, string> = {
    ifood: 'iF',
    rappi: 'Rp',
    uber_eats: 'Ub',
    aiqfome: 'aiq',
};

export const OrdersPage: React.FC = () => {
    const { orders, getStatusInfo, updateOrderStatus } = useOrders();
    const { openOrderDetailModal } = useUI();
    const newOrdersCount = orders.filter(order => order.status === 'novo').length;
    const inProgressCount = orders.filter(order => ['confirmado', 'em_preparo', 'em_rota'].includes(order.status)).length;
    const historyCount = orders.filter(order => ['concluido', 'cancelado'].includes(order.status)).length;
    const revenue = orders
        .filter(order => order.status !== 'cancelado')
        .reduce((total, order) => total + order.total, 0);

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <PageHeader title="Orders" description="View and manage orders from all your channels." />

            {/* Filters Bar */}
            <Card className="mb-6 rounded-xl border-gray-200 shadow-sm">
                <CardContent className="flex flex-col gap-4 p-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-4 w-full md:w-auto">
                    <div className="relative">
                        <Button variant="outline" className="gap-2 border-gray-300 text-sm font-medium text-gray-700 shadow-none hover:bg-gray-50">
                            <span className="text-gray-500">📅</span> 19/02 - 25/02
                        </Button>
                    </div>
                    <div className="relative flex-1 md:w-96">
                        <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <Input
                            type="text" 
                            placeholder="Search by ID, customer, product..." 
                            className="rounded-full border-gray-300 bg-white pl-9 pr-4 text-sm shadow-none focus-visible:ring-teal-500"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-4 w-full md:w-auto justify-end">
                    <Button className="gap-2 bg-teal-500 text-sm font-bold text-white shadow-sm hover:bg-teal-600">
                        <IconFilter className="w-4 h-4" />
                        Filters
                        <span className="bg-white text-teal-600 text-[10px] w-5 h-5 flex items-center justify-center rounded-full">1</span>
                    </Button>
                    <Button variant="ghost" className="h-auto px-0 text-sm font-bold text-red-500 hover:bg-transparent hover:text-red-600 hover:underline">
                        Clear Filters
                    </Button>
                </div>
                </CardContent>
            </Card>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <Card className="relative overflow-hidden rounded-xl border-teal-500 shadow-sm">
                    <CardContent className="p-5">
                        <div className="flex items-start gap-4">
                        <div className="p-3 bg-blue-50 rounded-lg">
                            <IconShoppingBag className="w-6 h-6 text-blue-500" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium">New Orders</p>
                            <p className="text-3xl font-bold text-gray-900 mt-1">{newOrdersCount}</p>
                        </div>
                    </div>
                    </CardContent>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-teal-500"></div>
                </Card>
                <Card className="rounded-xl border-gray-200 shadow-sm">
                    <CardContent className="p-5">
                        <div className="flex items-start gap-4">
                        <div className="p-3 bg-orange-50 rounded-lg">
                            <IconClock className="w-6 h-6 text-orange-500" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium">In Progress</p>
                            <p className="text-3xl font-bold text-gray-900 mt-1">{inProgressCount}</p>
                        </div>
                    </div>
                    </CardContent>
                </Card>
                <Card className="rounded-xl border-gray-200 shadow-sm">
                    <CardContent className="p-5">
                        <div className="flex items-start gap-4">
                        <div className="p-3 bg-green-50 rounded-lg">
                            <IconCheckCircle className="w-6 h-6 text-green-500" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium">History</p>
                            <p className="text-3xl font-bold text-gray-900 mt-1">{historyCount}</p>
                        </div>
                    </div>
                    </CardContent>
                </Card>
                <Card className="rounded-xl border-gray-200 shadow-sm">
                    <CardContent className="p-5">
                        <div className="flex items-start gap-4">
                        <div className="p-3 bg-teal-50 rounded-lg">
                            <IconDollar className="w-6 h-6 text-teal-600" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium">Revenue</p>
                            <p className="text-3xl font-bold text-gray-900 mt-1">$ {revenue.toFixed(2)}</p>
                        </div>
                    </div>
                    </CardContent>
                </Card>
            </div>

            {/* Orders List */}
            <div className="space-y-6">
                <h2 className="text-lg font-bold text-gray-800">Orders to Prepare</h2>
                
                <Card className="overflow-hidden rounded-xl border-gray-200 shadow-sm">
                    {orders.map((order) => {
                        const statusInfo = getStatusInfo(order.status);
                        const nextStatus = statusInfo.nextStatus;
                        const channelBadgeClassName = CHANNEL_BADGE_STYLES[order.channelId] || 'bg-slate-100 text-slate-600';
                        const channelBadgeLabel = CHANNEL_BADGE_LABELS[order.channelId] || order.channelId.slice(0, 3);

                        return (
                            <div key={order.id} className="p-6 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors cursor-pointer" onClick={() => openOrderDetailModal(order.id)}>
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm ${channelBadgeClassName}`}>
                                            {channelBadgeLabel}
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <h3 className="text-lg font-bold text-gray-900">#{order.id}</h3>
                                                <span className="text-sm text-gray-500">7 minutes ago</span>
                                            </div>
                                            <p className="font-medium text-gray-800">{order.customer.name}</p>
                                            <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                                                <IconShoppingBag className="w-3 h-3" />
                                                {order.deliveryDetails.type === 'pickup' ? 'Pickup' : 'Delivery'}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-6">
                                        <div className="text-right">
                                            <Badge variant="secondary" className={`mb-1 border-0 px-3 py-1 text-xs font-bold ${statusInfo.color}`}>
                                                {statusInfo.text}
                                            </Badge>
                                            <p className="text-xl font-bold text-gray-900">$ {order.total.toFixed(2)}</p>
                                        </div>
                                        {statusInfo.actionText && (
                                            <Button
                                                variant="secondary"
                                                className="bg-blue-100 text-blue-700 hover:bg-blue-200"
                                                onClick={(event) => {
                                                    event.stopPropagation();
                                                    if (nextStatus) {
                                                        updateOrderStatus(order.id, nextStatus);
                                                    }
                                                }}
                                            >
                                                {statusInfo.actionText}
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Card>

                {/* Footer Pagination */}
                <div className="flex items-center justify-between text-sm text-gray-500 pt-4">
                     <div className="flex items-center gap-2">
                        <span>Items per page:</span>
                        <select className="border border-gray-300 rounded px-2 py-1 outline-none">
                            <option>20</option>
                        </select>
                    </div>
                    <div className="flex items-center gap-2">
                        <span>Showing 1 - 7 of 7</span>
                        <Button variant="secondary" className="h-auto gap-1 bg-gray-100 px-3 py-1 text-sm text-gray-600 hover:bg-gray-200">
                            <IconFilter className="w-3 h-3" /> Active Filter
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
