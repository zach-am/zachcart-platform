import React from 'react';
import { PageHeader } from './PageHeader';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

export const FinancialPage: React.FC = () => {
    return (
        <div className="p-6 max-w-7xl mx-auto">
            <PageHeader title="Financial" description="Manage your invoices and payments." />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1 space-y-6">
                    <Card className="rounded-xl border-gray-200 shadow-sm">
                        <CardContent className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Your Subscription</h3>
                        <p className="text-gray-500 mb-6">Napp Essential Plan</p>
                        
                        <div className="bg-gray-50 p-6 rounded-xl text-center mb-6">
                            <p className="text-sm text-gray-500 mb-1">Next billing on 09/10/2025</p>
                            <p className="text-3xl font-bold text-gray-900">$ 199.90</p>
                        </div>

                        <div className="space-y-4">
                            <Button variant="ghost" className="h-auto w-full justify-start gap-3 rounded-lg p-3 hover:bg-gray-50">
                                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
                                </div>
                                <span className="font-medium text-gray-700">Payment Methods</span>
                            </Button>
                             <Button variant="ghost" className="h-auto w-full justify-start gap-3 rounded-lg p-3 hover:bg-gray-50">
                                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/></svg>
                                </div>
                                <span className="font-medium text-gray-700">Billing Information</span>
                            </Button>
                        </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="lg:col-span-2">
                    <Card className="overflow-hidden rounded-xl border-gray-200 shadow-sm">
                        <div className="p-6 border-b border-gray-200">
                            <h3 className="text-lg font-bold text-gray-900">Invoice History</h3>
                        </div>
                        
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-gray-50 text-xs uppercase font-bold text-gray-500">
                                    <tr>
                                        <th className="px-6 py-3">Period</th>
                                        <th className="px-6 py-3">Due Date</th>
                                        <th className="px-6 py-3">Amount</th>
                                        <th className="px-6 py-3">Status</th>
                                        <th className="px-6 py-3"></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="hover:bg-gray-50">
                                        <td className="px-6 py-4 font-medium text-gray-900">Next Month</td>
                                        <td className="px-6 py-4 text-gray-500">03/10/2026</td>
                                        <td className="px-6 py-4 font-bold text-gray-900">$ 279.80</td>
                                        <td className="px-6 py-4"><Badge variant="secondary" className="border-0 bg-yellow-100 text-yellow-800">Pending Payment</Badge></td>
                                        <td className="px-6 py-4 text-gray-400">v</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="px-6 py-4 font-medium text-gray-900">Current Month</td>
                                        <td className="px-6 py-4 text-gray-500">02/15/2026</td>
                                        <td className="px-6 py-4 font-bold text-gray-900">$ 199.90</td>
                                        <td className="px-6 py-4"><Badge variant="secondary" className="border-0 bg-red-100 text-red-800">Overdue</Badge></td>
                                        <td className="px-6 py-4 text-gray-400">v</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="px-6 py-4 font-medium text-gray-900">Last Month</td>
                                        <td className="px-6 py-4 text-gray-500">01/10/2026</td>
                                        <td className="px-6 py-4 font-bold text-gray-900">$ 149.90</td>
                                        <td className="px-6 py-4"><Badge variant="secondary" className="border-0 bg-green-100 text-green-800">Paid</Badge></td>
                                        <td className="px-6 py-4 text-gray-400">v</td>
                                    </tr>
                                    {[2,3,4,5,6,7].map(i => (
                                        <tr key={i} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 font-medium text-gray-900">{i} Months Ago</td>
                                            <td className="px-6 py-4 text-gray-500">{12-i+1}/10/2025</td>
                                            <td className="px-6 py-4 font-bold text-gray-900">$ 199.90</td>
                                            <td className="px-6 py-4"><Badge variant="secondary" className="border-0 bg-green-100 text-green-800">Paid</Badge></td>
                                            <td className="px-6 py-4 text-gray-400">v</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};
