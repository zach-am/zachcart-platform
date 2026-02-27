import React from 'react';
import { useUI } from '../contexts/UIContext';
import { IconCheckCircle, IconWarning } from '../constants';
import { Dialog, DialogContent } from './ui/dialog';

export const SuccessModal: React.FC = () => {
    const { isSuccessModalOpen, successModalInfo, closeSuccessModal } = useUI();

    if (!isSuccessModalOpen || !successModalInfo) return null;

    const isSuccess = successModalInfo.type !== 'warning';

    return (
        <Dialog open={isSuccessModalOpen} onOpenChange={(open) => !open && closeSuccessModal()}>
            <DialogContent showCloseButton={false} className="max-w-sm p-6 gap-0 rounded-lg border-0 shadow-xl text-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${isSuccess ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'}`}>
                    {isSuccess ? <IconCheckCircle className="w-6 h-6" /> : <IconWarning className="w-6 h-6" />}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{successModalInfo.title}</h3>
                <p className="text-gray-600 mb-6">{successModalInfo.message}</p>
                
                {successModalInfo.basePrice && successModalInfo.newPrice && (
                    <div className="bg-gray-50 p-3 rounded-lg mb-6 text-sm">
                        <div className="flex justify-between mb-1">
                            <span className="text-gray-500">Base Price:</span>
                            <span className="font-medium">$ {successModalInfo.basePrice.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-500">New Price ({successModalInfo.channelName}):</span>
                            <span className="font-bold text-green-600">$ {successModalInfo.newPrice.toFixed(2)}</span>
                        </div>
                    </div>
                )}

                <button 
                    onClick={closeSuccessModal}
                    className="w-full px-4 py-2 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700"
                >
                    Got it
                </button>
            </DialogContent>
        </Dialog>
    );
};
