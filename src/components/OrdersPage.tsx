import React from 'react';
import { PageHeader } from './PageHeader';
import { useOrders } from '../contexts/OrdersContext';
import { useUI } from '../contexts/UIContext';
import { IconSearch, IconFilter, IconShoppingBag, IconCheckCircle, IconClock, IconDollar, IconX } from '../constants';

export const OrdersPage: React.FC = () => {
    const { orders, getStatusInfo } = useOrders();
    const { openOrderDetailModal } = useUI();

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <PageHeader title="Orders" description="View and manage orders from all your channels." />

            {/* Filters Bar */}
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="flex items-center gap-4 w-full md:w-auto">
                    <div className="relative">
                        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
                            <span className="text-gray-500">📅</span> 19/02 - 25/02
                        </button>
                    </div>
                    <div className="relative flex-1 md:w-96">
                        <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input 
                            type="text" 
                            placeholder="Search by ID, customer, product..." 
                            className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-4 w-full md:w-auto justify-end">
                    <button className="px-4 py-2 bg-teal-500 text-white rounded-lg flex items-center gap-2 text-sm font-bold hover:bg-teal-600 shadow-sm">
                        <IconFilter className="w-4 h-4" />
                        Filters
                        <span className="bg-white text-teal-600 text-[10px] w-5 h-5 flex items-center justify-center rounded-full">1</span>
                    </button>
                    <button className="text-red-500 text-sm font-bold hover:underline">Clear Filters</button>
                </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white p-5 rounded-xl border border-teal-500 shadow-sm relative overflow-hidden">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-blue-50 rounded-lg">
                            <IconShoppingBag className="w-6 h-6 text-blue-500" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium">New Orders</p>
                            <p className="text-3xl font-bold text-gray-900 mt-1">7</p>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-teal-500"></div>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-orange-50 rounded-lg">
                            <IconClock className="w-6 h-6 text-orange-500" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium">In Progress</p>
                            <p className="text-3xl font-bold text-gray-900 mt-1">4</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-green-50 rounded-lg">
                            <IconCheckCircle className="w-6 h-6 text-green-500" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium">History</p>
                            <p className="text-3xl font-bold text-gray-900 mt-1">17</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-teal-50 rounded-lg">
                            <IconDollar className="w-6 h-6 text-teal-600" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium">Revenue</p>
                            <p className="text-3xl font-bold text-gray-900 mt-1">$ 39.07</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Orders List */}
            <div className="space-y-6">
                <h2 className="text-lg font-bold text-gray-800">Orders to Prepare</h2>
                
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                    {orders.map((order) => {
                        const statusInfo = getStatusInfo(order.status);
                        return (
                            <div key={order.id} className="p-6 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors cursor-pointer" onClick={() => openOrderDetailModal(order.id)}>
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-sm">
                                            aiq
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
                                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${statusInfo.color} mb-1`}>
                                                {statusInfo.text}
                                            </span>
                                            <p className="text-xl font-bold text-gray-900">$ {order.total.toFixed(2)}</p>
                                        </div>
                                        {statusInfo.actionText && (
                                            <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-bold text-sm hover:bg-blue-200 transition-colors">
                                                {statusInfo.actionText}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

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
                        <button className="px-3 py-1 bg-gray-100 rounded-lg flex items-center gap-1 hover:bg-gray-200">
                            <IconFilter className="w-3 h-3" /> Active Filter
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
