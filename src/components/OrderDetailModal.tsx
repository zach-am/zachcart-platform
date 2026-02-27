import React from 'react';
import { useUI } from '../contexts/UIContext';
import { useOrders } from '../contexts/OrdersContext';
import { IconX, IconUser, IconPhone, IconMapPin, IconCreditCard, IconCheckCircle } from '../constants';
import { Sheet, SheetContent } from './ui/sheet';

export const OrderDetailModal: React.FC = () => {
    const { isOrderDetailModalOpen, viewingOrderId, closeOrderDetailModal, openCancelOrderModal } = useUI();
    const { getOrderById, updateOrderStatus } = useOrders();

    if (!isOrderDetailModalOpen || !viewingOrderId) return null;

    const order = getOrderById(viewingOrderId);
    if (!order) return null;

    return (
        <Sheet open={isOrderDetailModalOpen} onOpenChange={(open) => !open && closeOrderDetailModal()}>
            <SheetContent side="right" showCloseButton={false} className="h-full w-full max-w-md overflow-y-auto border-0 p-0 shadow-2xl">
                <div className="p-6 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white z-10">
                    <div>
                        <h2 className="text-xl font-bold text-gray-900">Order #{order.id}</h2>
                        <span className="text-sm text-gray-500">{new Date(order.createdAt).toLocaleString()}</span>
                    </div>
                    <button onClick={closeOrderDetailModal} className="p-2 hover:bg-gray-100 rounded-full">
                        <IconX className="w-6 h-6 text-gray-500" />
                    </button>
                </div>

                <div className="p-6 space-y-6">
                    {/* Status */}
                    <div className="bg-blue-50 p-4 rounded-lg flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        <span className="font-medium text-blue-700 uppercase text-sm">{order.status.replace('_', ' ')}</span>
                    </div>

                    {/* Customer */}
                    <div>
                        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Customer</h3>
                        <div className="flex items-start gap-3">
                            <div className="bg-gray-100 p-2 rounded-full">
                                <IconUser className="w-5 h-5 text-gray-600" />
                            </div>
                            <div>
                                <p className="font-medium text-gray-900">{order.customer.name}</p>
                                <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                                    <IconPhone className="w-3 h-3" /> {order.customer.phone}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Delivery */}
                    <div>
                        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Delivery</h3>
                        <div className="flex items-start gap-3">
                            <div className="bg-gray-100 p-2 rounded-full">
                                <IconMapPin className="w-5 h-5 text-gray-600" />
                            </div>
                            <div>
                                <p className="font-medium text-gray-900">{order.deliveryDetails.address}</p>
                                <p className="text-sm text-gray-500 mt-1">Type: {order.deliveryDetails.type === 'delivery' ? 'Delivery' : 'Pickup'}</p>
                            </div>
                        </div>
                    </div>

                    {/* Items */}
                    <div>
                        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Order Items</h3>
                        <div className="space-y-3">
                            {order.items.map((item, idx) => (
                                <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center text-xs font-bold text-gray-500">
                                            {item.quantity}x
                                        </div>
                                        <span className="text-gray-800">Product #{item.productId}</span>
                                    </div>
                                    <span className="font-medium text-gray-900">$ {(item.unitPrice * item.quantity).toFixed(2)}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Payment */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-600">Subtotal</span>
                            <span className="font-medium">$ {order.billingSummary.subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-600">Delivery Fee</span>
                            <span className="font-medium">$ {order.billingSummary.shippingFee.toFixed(2)}</span>
                        </div>
                        <div className="border-t border-gray-200 my-2 pt-2 flex justify-between items-center">
                            <span className="font-bold text-gray-900">Total</span>
                            <span className="font-bold text-xl text-teal-600">$ {order.billingSummary.total.toFixed(2)}</span>
                        </div>
                        <div className="flex items-center gap-2 mt-3 text-sm text-gray-500">
                            <IconCreditCard className="w-4 h-4" />
                            {order.paymentDetails.method} - <span className="text-green-600 font-medium">Paid</span>
                        </div>
                    </div>
                </div>

                <div className="p-6 border-t border-gray-200 bg-gray-50 sticky bottom-0">
                    <div className="grid grid-cols-2 gap-3">
                         <button 
                            className="px-4 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg font-bold hover:bg-gray-50"
                            onClick={closeOrderDetailModal}
                        >
                            Close
                        </button>
                        {order.status === 'novo' && (
                            <button 
                                className="px-4 py-3 bg-teal-600 text-white rounded-lg font-bold hover:bg-teal-700 flex items-center justify-center gap-2"
                                onClick={() => {
                                    updateOrderStatus(order.id, 'confirmado');
                                    closeOrderDetailModal();
                                }}
                            >
                                <IconCheckCircle className="w-5 h-5" />
                                Confirm
                            </button>
                        )}
                        {order.status !== 'cancelado' && order.status !== 'concluido' && (
                             <button 
                                className="px-4 py-3 bg-red-50 text-red-700 border border-red-100 rounded-lg font-bold hover:bg-red-100 flex items-center justify-center gap-2 col-span-2 mt-2"
                                onClick={() => {
                                    closeOrderDetailModal();
                                    openCancelOrderModal(order.id);
                                }}
                            >
                                Cancel Order
                            </button>
                        )}
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
};
