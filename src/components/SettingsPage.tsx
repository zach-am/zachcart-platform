import React from 'react';
import { PageHeader } from './PageHeader';
import { IconEdit } from '../constants';

export const SettingsPage: React.FC = () => {
    return (
        <div className="p-6 max-w-5xl mx-auto">
            <PageHeader title="Settings" description="Fill in your company details once. We will use this information to speed up new channel activation." />

            <div className="space-y-6">
                {/* Dados da Empresa */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-gray-100 rounded-lg text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M5 21V7l8-4 8 4v14"/><path d="M8 21V12a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v9"/></svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900">Company Details</h3>
                        </div>
                        <button className="p-2 hover:bg-gray-100 rounded-full text-gray-500">
                            <IconEdit className="w-5 h-5" />
                        </button>
                    </div>
                    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <label className="block text-sm text-gray-500 mb-1">Legal Name</label>
                            <p className="font-medium text-gray-900 text-lg">Our Pharmacy LLC</p>
                        </div>
                        <div>
                            <label className="block text-sm text-gray-500 mb-1">Trade Name</label>
                            <p className="font-medium text-gray-900 text-lg">Our Pharmacy (HQ)</p>
                        </div>
                        <div>
                            <label className="block text-sm text-gray-500 mb-1">Tax ID (EIN)</label>
                            <p className="font-medium text-gray-900 text-lg">12-3456789</p>
                        </div>
                        <div>
                            <label className="block text-sm text-gray-500 mb-1">State Registration</label>
                            <p className="font-medium text-gray-900 text-lg">123.456.789.110</p>
                        </div>
                    </div>
                </div>

                {/* Endereço Principal */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-gray-100 rounded-lg text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900">Main Address</h3>
                        </div>
                        <button className="p-2 hover:bg-gray-100 rounded-full text-gray-500">
                            <IconEdit className="w-5 h-5" />
                        </button>
                    </div>
                    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <label className="block text-sm text-gray-500 mb-1">Zip Code</label>
                            <p className="font-medium text-gray-900 text-lg">10001</p>
                        </div>
                        <div>
                            <label className="block text-sm text-gray-500 mb-1">Address</label>
                            <p className="font-medium text-gray-900 text-lg">123 Main St, Suite A</p>
                        </div>
                        <div>
                            <label className="block text-sm text-gray-500 mb-1">Neighborhood</label>
                            <p className="font-medium text-gray-900 text-lg">Downtown</p>
                        </div>
                        <div>
                            <label className="block text-sm text-gray-500 mb-1">City / State</label>
                            <p className="font-medium text-gray-900 text-lg">New York / NY</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
