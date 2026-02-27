import React from 'react';
import { useUI } from '../contexts/UIContext';
import { IconArrowUp, IconShoppingBag, IconDollar, IconTag, IconStore, IconCheckCircle, IconPlus, IconChart, IconSparkles } from '../constants';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

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
                    <Button variant="secondary" className="h-auto rounded-md bg-white px-4 py-1 text-sm font-medium text-gray-800 shadow-sm hover:bg-white">7 days</Button>
                    <Button variant="ghost" className="h-auto px-4 py-1 text-sm font-medium text-gray-500 hover:text-gray-700">30 days</Button>
                    <Button variant="ghost" className="h-auto px-4 py-1 text-sm font-medium text-gray-500 hover:text-gray-700">Month</Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Pedidos Realizados */}
                <Card className="rounded-xl border-gray-200 shadow-sm">
                    <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-gray-100 rounded-lg">
                                <IconShoppingBag className="w-5 h-5 text-gray-600" />
                            </div>
                            <span className="font-semibold text-gray-700">Total Orders</span>
                        </div>
                        <Badge variant="secondary" className="gap-1 border-0 bg-green-100 px-2 py-1 text-xs font-bold text-green-700">
                            <IconArrowUp className="w-3 h-3" /> 100.0%
                        </Badge>
                    </div>
                    <p className="text-4xl font-bold text-gray-900">2</p>
                    <p className="text-sm text-gray-500 mt-1">vs. last 7 days</p>
                    </CardContent>
                </Card>

                {/* Faturamento Total */}
                <Card className="rounded-xl border-gray-200 shadow-sm">
                    <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-gray-100 rounded-lg">
                                <IconDollar className="w-5 h-5 text-gray-600" />
                            </div>
                            <span className="font-semibold text-gray-700">Total Revenue</span>
                        </div>
                        <Badge variant="secondary" className="gap-1 border-0 bg-green-100 px-2 py-1 text-xs font-bold text-green-700">
                            <IconArrowUp className="w-3 h-3" /> 100.0%
                        </Badge>
                    </div>
                    <p className="text-4xl font-bold text-gray-900">$ 39.07</p>
                    <p className="text-sm text-gray-500 mt-1">vs. last 7 days</p>
                    </CardContent>
                </Card>

                 {/* Ticket Médio */}
                 <Card className="rounded-xl border-gray-200 shadow-sm">
                    <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-gray-100 rounded-lg">
                                <IconChart className="w-5 h-5 text-gray-600" />
                            </div>
                            <span className="font-semibold text-gray-700">Average Order Value</span>
                        </div>
                        <Badge variant="secondary" className="gap-1 border-0 bg-green-100 px-2 py-1 text-xs font-bold text-green-700">
                            <IconArrowUp className="w-3 h-3" /> 100.0%
                        </Badge>
                    </div>
                    <p className="text-4xl font-bold text-gray-900">$ 19.54</p>
                    <p className="text-sm text-gray-500 mt-1">vs. last 7 days</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                     {/* Canal Destaque */}
                    <Card className="rounded-xl border-gray-200 shadow-sm">
                        <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-gray-100 rounded-lg">
                                <IconStore className="w-5 h-5 text-gray-600" />
                            </div>
                            <span className="font-semibold text-gray-700">Top Channel</span>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-1">iFood</h3>
                        <p className="text-gray-500">Highest revenue channel</p>
                        </CardContent>
                    </Card>

                    {/* Dicas */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <span className="text-yellow-500">💡</span> Tips for you
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Card className="rounded-xl border-gray-200 shadow-sm">
                                <CardContent className="p-5">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="p-1.5 bg-gray-100 rounded-md">
                                        <IconSparkles className="w-4 h-4 text-gray-600" />
                                    </div>
                                    <span className="font-semibold text-gray-800">Boost your Best Seller</span>
                                </div>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    "Colgate Total 12 Toothpaste" is your best-selling product. How about creating a promotion?
                                </p>
                                </CardContent>
                            </Card>
                            <Card className="rounded-xl border-gray-200 shadow-sm">
                                <CardContent className="p-5">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="p-1.5 bg-gray-100 rounded-md">
                                        <IconTag className="w-4 h-4 text-gray-600" />
                                    </div>
                                    <span className="font-semibold text-gray-800">Complete your Listings</span>
                                </div>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    We found 5 product(s) with missing information. Complete listings sell more!
                                </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    {/* Ações Rápidas */}
                    <Card className="rounded-xl border-gray-200 shadow-sm">
                        <CardContent className="p-6">
                        <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h3>
                        <div className="space-y-3">
                            <Button variant="ghost" className="h-auto w-full justify-start gap-3 p-3 text-left group hover:bg-gray-50" onClick={() => navigate({ type: 'settings' })}>
                                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-200">
                                    <IconPlus className="w-4 h-4 text-gray-600" />
                                </div>
                                <span className="font-medium text-gray-700">Add User</span>
                            </Button>
                            <Button variant="ghost" className="h-auto w-full justify-start gap-3 p-3 text-left group hover:bg-gray-50" onClick={() => navigate({ type: 'catalog' })}>
                                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-200">
                                    <IconPlus className="w-4 h-4 text-gray-600" />
                                </div>
                                <span className="font-medium text-gray-700">Publish Products</span>
                            </Button>
                            <Button variant="ghost" className="h-auto w-full justify-start gap-3 p-3 text-left group hover:bg-gray-50" onClick={() => navigate({ type: 'channels' })}>
                                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-200">
                                    <IconPlus className="w-4 h-4 text-gray-600" />
                                </div>
                                <span className="font-medium text-gray-700">Activate New Channel</span>
                            </Button>
                        </div>
                        </CardContent>
                    </Card>

                    {/* Canais Ativos */}
                    <Card className="rounded-xl border-gray-200 shadow-sm">
                        <CardContent className="p-6">
                        <h3 className="text-lg font-bold text-gray-800 mb-4">Active Channels</h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white text-xs font-bold">iF</div>
                                    <span className="font-medium text-gray-700">iFood</span>
                                </div>
                                <Badge variant="secondary" className="border-0 bg-green-100 px-2 py-1 text-xs font-bold text-green-700">Online</Badge>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs font-bold">R</div>
                                    <span className="font-medium text-gray-700">Rappi</span>
                                </div>
                                <Badge variant="secondary" className="border-0 bg-green-100 px-2 py-1 text-xs font-bold text-green-700">Online</Badge>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">CR</div>
                                    <span className="font-medium text-gray-700">Consulta Remédios</span>
                                </div>
                                <Badge variant="secondary" className="border-0 bg-green-100 px-2 py-1 text-xs font-bold text-green-700">Online</Badge>
                            </div>
                        </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};
