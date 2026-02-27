import React from 'react';
import { useUI } from '../contexts/UIContext';
import { PageHeader } from './PageHeader';
import { IconArrowUp, IconShoppingBag, IconDollar, IconTag, IconStore, IconCheckCircle, IconPlus } from '../constants';

export const HomePage: React.FC = () => {
    const { navigate } = useUI();

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-800">Welcome, Andre!</h1>
                <p className="text-gray-500">Here is your operation summary for today.</p>
            </div>

            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-800">Your Performance</h2>
                <div className="flex bg-gray-100 rounded-lg p-1">
                    <button className="px-4 py-1 bg-white rounded-md shadow-sm text-sm font-medium text-gray-800">7 days</button>
                    <button className="px-4 py-1 text-sm font-medium text-gray-500 hover:text-gray-700">30 days</button>
                    <button className="px-4 py-1 text-sm font-medium text-gray-500 hover:text-gray-700">Month</button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Pedidos Realizados */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-gray-100 rounded-lg">
                                <IconShoppingBag className="w-5 h-5 text-gray-600" />
                            </div>
                            <span className="font-semibold text-gray-700">Total Orders</span>
                        </div>
                        <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                            <IconArrowUp className="w-3 h-3" /> 100.0%
                        </span>
                    </div>
                    <p className="text-4xl font-bold text-gray-900">2</p>
                    <p className="text-sm text-gray-500 mt-1">vs. last 7 days</p>
                </div>

                {/* Faturamento Total */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-gray-100 rounded-lg">
                                <IconDollar className="w-5 h-5 text-gray-600" />
                            </div>
                            <span className="font-semibold text-gray-700">Total Revenue</span>
                        </div>
                        <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                            <IconArrowUp className="w-3 h-3" /> 100.0%
                        </span>
                    </div>
                    <p className="text-4xl font-bold text-gray-900">$ 39.07</p>
                    <p className="text-sm text-gray-500 mt-1">vs. last 7 days</p>
                </div>

                 {/* Ticket Médio */}
                 <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-gray-100 rounded-lg">
                                <IconChart className="w-5 h-5 text-gray-600" />
                            </div>
                            <span className="font-semibold text-gray-700">Average Order Value</span>
                        </div>
                        <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                            <IconArrowUp className="w-3 h-3" /> 100.0%
                        </span>
                    </div>
                    <p className="text-4xl font-bold text-gray-900">$ 19.54</p>
                    <p className="text-sm text-gray-500 mt-1">vs. last 7 days</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                     {/* Canal Destaque */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-gray-100 rounded-lg">
                                <IconStore className="w-5 h-5 text-gray-600" />
                            </div>
                            <span className="font-semibold text-gray-700">Top Channel</span>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-1">iFood</h3>
                        <p className="text-gray-500">Highest revenue channel</p>
                    </div>

                    {/* Dicas */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <span className="text-yellow-500">💡</span> Tips for you
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="p-1.5 bg-gray-100 rounded-md">
                                        <IconSparkles className="w-4 h-4 text-gray-600" />
                                    </div>
                                    <span className="font-semibold text-gray-800">Boost your Best Seller</span>
                                </div>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    "Colgate Total 12 Toothpaste" is your best-selling product. How about creating a promotion?
                                </p>
                            </div>
                            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="p-1.5 bg-gray-100 rounded-md">
                                        <IconTag className="w-4 h-4 text-gray-600" />
                                    </div>
                                    <span className="font-semibold text-gray-800">Complete your Listings</span>
                                </div>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    We found 5 product(s) with missing information. Complete listings sell more!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    {/* Ações Rápidas */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                        <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h3>
                        <div className="space-y-3">
                            <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors text-left group">
                                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-200">
                                    <IconPlus className="w-4 h-4 text-gray-600" />
                                </div>
                                <span className="font-medium text-gray-700">Add User</span>
                            </button>
                            <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors text-left group">
                                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-200">
                                    <IconPlus className="w-4 h-4 text-gray-600" />
                                </div>
                                <span className="font-medium text-gray-700">Publish Products</span>
                            </button>
                            <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors text-left group">
                                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-200">
                                    <IconPlus className="w-4 h-4 text-gray-600" />
                                </div>
                                <span className="font-medium text-gray-700">Activate New Channel</span>
                            </button>
                        </div>
                    </div>

                    {/* Canais Ativos */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                        <h3 className="text-lg font-bold text-gray-800 mb-4">Active Channels</h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white text-xs font-bold">iF</div>
                                    <span className="font-medium text-gray-700">iFood</span>
                                </div>
                                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">Online</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs font-bold">R</div>
                                    <span className="font-medium text-gray-700">Rappi</span>
                                </div>
                                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">Online</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">CR</div>
                                    <span className="font-medium text-gray-700">Consulta Remédios</span>
                                </div>
                                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">Online</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
import { IconChart, IconSparkles } from '../constants';
