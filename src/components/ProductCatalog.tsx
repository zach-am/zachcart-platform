import React from 'react';
import { PageHeader } from './PageHeader';
import { MOCK_PRODUCTS, IconSearch, IconFilter, IconPlus, IconMoreVertical } from '../constants';

export const ProductCatalog: React.FC = () => {
    return (
        <div className="p-6 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                        Catalog
                    </h1>
                    <p className="text-gray-500 mt-1">Manage and publish your products across sales channels.</p>
                </div>
                <div className="flex items-center gap-4 bg-white p-2 rounded-lg border border-gray-200 shadow-sm">
                    <div className="text-right px-2">
                        <span className="block text-xl font-bold text-orange-500">185 <span className="text-gray-400 text-sm font-normal">/ 2,500</span></span>
                        <span className="text-xs text-gray-500">Available SKUs</span>
                    </div>
                    <div className="h-8 w-px bg-gray-200"></div>
                    <div className="px-2">
                         <span className="block text-xl font-bold text-gray-800">2,315</span>
                         <span className="text-xs text-gray-500">Available SKUs</span>
                    </div>
                    <button className="bg-teal-50 text-teal-700 px-3 py-1.5 rounded-md text-sm font-bold hover:bg-teal-100">
                        Details
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                {/* Toolbar */}
                <div className="p-4 border-b border-gray-200 flex flex-col md:flex-row gap-4 justify-between items-center bg-white">
                    <div className="flex items-center gap-3 w-full md:w-auto">
                        <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-teal-600 focus:ring-teal-500" />
                        <span className="text-sm font-medium text-gray-700">Select all</span>
                    </div>

                    <div className="flex gap-3 w-full md:w-auto">
                        <div className="relative flex-1 md:w-96">
                            <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <input 
                                type="text" 
                                placeholder="Search by name, brand, EAN, SKU..." 
                                className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                            />
                        </div>
                        <button className="px-4 py-2 border border-gray-300 rounded-lg flex items-center gap-2 text-gray-700 hover:bg-gray-50 text-sm font-medium">
                            <IconFilter className="w-4 h-4" />
                            Filters
                        </button>
                    </div>
                </div>

                {/* Table Header */}
                <div className="bg-gray-50 px-6 py-3 border-b border-gray-200 grid grid-cols-12 gap-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    <div className="col-span-6">Product</div>
                    <div className="col-span-2 text-center">Stock</div>
                    <div className="col-span-4 text-right">Channel Pricing</div>
                </div>

                {/* List */}
                <div className="divide-y divide-gray-100">
                    {MOCK_PRODUCTS.slice(0, 5).map((product) => (
                        <div key={product.id} className="px-6 py-4 grid grid-cols-12 gap-4 items-center hover:bg-gray-50 transition-colors group">
                            <div className="col-span-6 flex items-center gap-4">
                                <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-teal-600 focus:ring-teal-500" />
                                <div className="w-12 h-12 bg-blue-500 rounded-md flex items-center justify-center text-white text-[10px] font-bold overflow-hidden shrink-0">
                                    <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-gray-900 group-hover:text-teal-600 transition-colors">{product.name}</h3>
                                    <p className="text-xs text-gray-500 mt-0.5">{product.sku}</p>
                                </div>
                            </div>
                            
                            <div className="col-span-2 flex justify-center">
                                <span className="bg-green-100 text-green-800 text-xs font-bold px-2.5 py-1 rounded-full">
                                    {product.stock} units
                                </span>
                            </div>

                            <div className="col-span-4 flex justify-end items-center gap-4">
                                {product.id === 1 ? (
                                    <span className="text-sm text-gray-400 italic">None</span>
                                ) : (
                                    <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
                                        <div className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center text-[8px] text-white font-bold">iF</div>
                                        <span className="text-sm font-bold text-gray-900">$ {product.price.toFixed(2)}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="p-4 border-t border-gray-200 flex items-center justify-between bg-white">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span>Items per page:</span>
                        <select className="border border-gray-300 rounded px-2 py-1 outline-none focus:border-teal-500">
                            <option>20</option>
                            <option>50</option>
                            <option>100</option>
                        </select>
                    </div>

                    <div className="flex items-center gap-2">
                        <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-50">Previous</button>
                        <button className="w-8 h-8 bg-teal-600 text-white rounded text-sm font-bold flex items-center justify-center">1</button>
                        <button className="w-8 h-8 border border-gray-300 text-gray-600 rounded text-sm font-medium flex items-center justify-center hover:bg-gray-50">2</button>
                        <span className="text-gray-400">...</span>
                        <button className="w-8 h-8 border border-gray-300 text-gray-600 rounded text-sm font-medium flex items-center justify-center hover:bg-gray-50">10</button>
                        <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50">Next</button>
                    </div>
                    
                    <span className="text-sm text-gray-500">Showing 1 - 20 of 200</span>
                </div>
            </div>
        </div>
    );
};
