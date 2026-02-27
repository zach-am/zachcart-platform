import React from 'react';
import { useUI } from '../contexts/UIContext';
import { useOrders } from '../contexts/OrdersContext';
import { IconWarning } from '../constants';
import { Dialog, DialogContent } from './ui/dialog';

export const CancelOrderModal: React.FC = () => {
    const { isCancelOrderModalOpen, cancelingOrderId, closeCancelOrderModal } = useUI();
    const { updateOrderStatus } = useOrders();

    if (!isCancelOrderModalOpen || !cancelingOrderId) return null;

    const handleConfirm = () => {
        updateOrderStatus(cancelingOrderId, 'cancelado');
        closeCancelOrderModal();
    };

    return (
        <Dialog open={isCancelOrderModalOpen} onOpenChange={(open) => !open && closeCancelOrderModal()}>
            <DialogContent showCloseButton={false} className="max-w-md p-6 gap-0 rounded-lg border-0 shadow-xl">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                    <IconWarning className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">Cancel Order #{cancelingOrderId}?</h3>
                <p className="text-gray-600 mb-6 text-center">
                    Are you sure you want to cancel this order? This action cannot be undone and the customer will be notified.
                </p>
                
                <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-700">Cancellation Reason</label>
                    <select className="w-full border border-gray-300 rounded-lg p-2 text-sm outline-none focus:ring-2 focus:ring-red-500">
                        <option>Item unavailable</option>
                        <option>Store closed</option>
                        <option>Delivery issues</option>
                        <option>Other</option>
                    </select>
                </div>

                <div className="flex justify-end gap-3 mt-6">
                    <button 
                        onClick={closeCancelOrderModal}
                        className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg font-medium"
                    >
                        Back
                    </button>
                    <button 
                        onClick={handleConfirm}
                        className="px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700"
                    >
                        Confirm Cancellation
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    );
};
