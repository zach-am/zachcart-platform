import React from 'react';
import { useUI } from '../contexts/UIContext';
import { Dialog, DialogContent } from './ui/dialog';

export const ConfirmationModal: React.FC = () => {
    const { isConfirmationModalOpen, confirmationModalConfig, closeConfirmationModal } = useUI();

    if (!isConfirmationModalOpen || !confirmationModalConfig) return null;

    return (
        <Dialog open={isConfirmationModalOpen} onOpenChange={(open) => !open && closeConfirmationModal()}>
            <DialogContent showCloseButton={false} className="max-w-md p-6 gap-0 rounded-lg border-0 shadow-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{confirmationModalConfig.title}</h3>
                <p className="text-gray-600 mb-6">{confirmationModalConfig.message}</p>
                <div className="flex justify-end gap-3">
                    <button 
                        onClick={closeConfirmationModal}
                        className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg font-medium"
                    >
                        Cancel
                    </button>
                    <button 
                        onClick={() => {
                            confirmationModalConfig.onConfirm();
                            closeConfirmationModal();
                        }}
                        className="px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700"
                    >
                        Confirm
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    );
};
