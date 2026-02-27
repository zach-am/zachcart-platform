import React from 'react';
import { MOCK_PRODUCTS, IconSearch, IconFilter } from '../constants';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

export const ProductCatalog: React.FC = () => {
    const visibleProducts = MOCK_PRODUCTS.slice(0, 5);
    const publishedSkuCount = MOCK_PRODUCTS.filter((product) => product.status === 'active').length;
    const totalSkuCapacity = 2500;
    const remainingSkuCapacity = totalSkuCapacity - MOCK_PRODUCTS.length;

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                        Catalog
                    </h1>
                    <p className="text-gray-500 mt-1">Manage and publish your products across sales channels.</p>
                </div>
                <Card className="rounded-lg border-gray-200 shadow-sm">
                    <CardContent className="flex items-center gap-4 p-2">
                    <div className="text-right px-2">
                        <span className="block text-xl font-bold text-orange-500">{publishedSkuCount} <span className="text-gray-400 text-sm font-normal">/ {totalSkuCapacity.toLocaleString()}</span></span>
                        <span className="text-xs text-gray-500">Available SKUs</span>
                    </div>
                    <div className="h-8 w-px bg-gray-200"></div>
                    <div className="px-2">
                         <span className="block text-xl font-bold text-gray-800">{remainingSkuCapacity.toLocaleString()}</span>
                         <span className="text-xs text-gray-500">Remaining capacity</span>
                    </div>
                    <Button variant="secondary" className="bg-teal-50 px-3 py-1.5 text-sm font-bold text-teal-700 hover:bg-teal-100">
                        Details
                    </Button>
                    </CardContent>
                </Card>
            </div>

            <Card className="overflow-hidden rounded-xl border-gray-200 shadow-sm">
                {/* Toolbar */}
                <CardContent className="border-b border-gray-200 bg-white p-4">
                <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                    <div className="flex items-center gap-3 w-full md:w-auto">
                        <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-teal-600 focus:ring-teal-500" />
                        <span className="text-sm font-medium text-gray-700">Select all</span>
                    </div>

                    <div className="flex gap-3 w-full md:w-auto">
                        <div className="relative flex-1 md:w-96">
                            <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <Input
                                type="text" 
                                placeholder="Search by name, brand, EAN, SKU..." 
                                className="border-gray-300 bg-white pl-9 pr-4 text-sm shadow-none focus-visible:ring-teal-500"
                            />
                        </div>
                        <Button variant="outline" className="border-gray-300 text-sm font-medium text-gray-700 shadow-none hover:bg-gray-50">
                            <IconFilter className="w-4 h-4" />
                            Filters
                        </Button>
                    </div>
                </div>
                </CardContent>

                {/* Table Header */}
                <div className="bg-gray-50 px-6 py-3 border-b border-gray-200 grid grid-cols-12 gap-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    <div className="col-span-6">Product</div>
                    <div className="col-span-2 text-center">Stock</div>
                    <div className="col-span-4 text-right">Channel Pricing</div>
                </div>

                {/* List */}
                <div className="divide-y divide-gray-100">
                    {visibleProducts.map((product) => (
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
                                <Badge variant="secondary" className="border-0 bg-green-100 px-2.5 py-1 text-xs font-bold text-green-800">
                                    {product.stock} units
                                </Badge>
                            </div>

                            <div className="col-span-4 flex justify-end items-center gap-4">
                                {product.id === 1 ? (
                                    <span className="text-sm text-gray-400 italic">None</span>
                                ) : (
                                    <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5">
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
                        <Button variant="outline" size="sm" className="border-gray-300 text-sm text-gray-600 shadow-none">Previous</Button>
                        <Button size="icon" className="h-8 w-8 bg-teal-600 text-sm font-bold text-white hover:bg-teal-700">1</Button>
                        <Button variant="outline" size="icon" className="h-8 w-8 border-gray-300 text-sm font-medium text-gray-600 shadow-none hover:bg-gray-50">2</Button>
                        <span className="text-gray-400">...</span>
                        <Button variant="outline" size="icon" className="h-8 w-8 border-gray-300 text-sm font-medium text-gray-600 shadow-none hover:bg-gray-50">10</Button>
                        <Button variant="outline" size="sm" className="border-gray-300 text-sm text-gray-600 shadow-none">Next</Button>
                    </div>
                    
                    <span className="text-sm text-gray-500">Showing 1 - 20 of 200</span>
                </div>
            </Card>
        </div>
    );
};
