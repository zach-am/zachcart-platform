import React, { createContext, useContext, useState } from 'react';
import { ViewState } from '../types';

interface ConfirmationModalConfig {
    title: string;
    message: string;
    onConfirm: () => void;
}

interface SuccessModalInfo {
    title: string;
    message: string;
    type?: 'success' | 'warning';
    basePrice?: number;
    newPrice?: number;
    channelName?: string;
}

interface UIContextType {
    isSidebarCollapsed: boolean;
    toggleSidebar: () => void;
    currentView: ViewState;
    navigate: (view: ViewState) => void;
    
    // Modals
    isConfirmationModalOpen: boolean;
    confirmationModalConfig: ConfirmationModalConfig | null;
    openConfirmationModal: (config: ConfirmationModalConfig) => void;
    closeConfirmationModal: () => void;

    isSuccessModalOpen: boolean;
    successModalInfo: SuccessModalInfo | null;
    openSuccessModal: (info: SuccessModalInfo) => void;
    closeSuccessModal: () => void;

    isOrderDetailModalOpen: boolean;
    viewingOrderId: string | null;
    openOrderDetailModal: (orderId: string) => void;
    closeOrderDetailModal: () => void;

    isCancelOrderModalOpen: boolean;
    cancelingOrderId: string | null;
    openCancelOrderModal: (orderId: string) => void;
    closeCancelOrderModal: () => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export const UIProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [currentView, setCurrentView] = useState<ViewState>({ type: 'home' });
    
    const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
    const [confirmationModalConfig, setConfirmationModalConfig] = useState<ConfirmationModalConfig | null>(null);

    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const [successModalInfo, setSuccessModalInfo] = useState<SuccessModalInfo | null>(null);

    const [isOrderDetailModalOpen, setIsOrderDetailModalOpen] = useState(false);
    const [viewingOrderId, setViewingOrderId] = useState<string | null>(null);

    const [isCancelOrderModalOpen, setIsCancelOrderModalOpen] = useState(false);
    const [cancelingOrderId, setCancelingOrderId] = useState<string | null>(null);

    const toggleSidebar = () => setIsSidebarCollapsed(prev => !prev);
    const navigate = (view: ViewState) => setCurrentView(view);

    const openConfirmationModal = (config: ConfirmationModalConfig) => {
        setConfirmationModalConfig(config);
        setIsConfirmationModalOpen(true);
    };
    const closeConfirmationModal = () => {
        setIsConfirmationModalOpen(false);
        setConfirmationModalConfig(null);
    };

    const openSuccessModal = (info: SuccessModalInfo) => {
        setSuccessModalInfo(info);
        setIsSuccessModalOpen(true);
    };
    const closeSuccessModal = () => {
        setIsSuccessModalOpen(false);
        setSuccessModalInfo(null);
    };

    const openOrderDetailModal = (orderId: string) => {
        setViewingOrderId(orderId);
        setIsOrderDetailModalOpen(true);
    };
    const closeOrderDetailModal = () => {
        setIsOrderDetailModalOpen(false);
        setViewingOrderId(null);
    };

    const openCancelOrderModal = (orderId: string) => {
        setCancelingOrderId(orderId);
        setIsCancelOrderModalOpen(true);
    };
    const closeCancelOrderModal = () => {
        setIsCancelOrderModalOpen(false);
        setCancelingOrderId(null);
    };

    return (
        <UIContext.Provider value={{
            isSidebarCollapsed, toggleSidebar, currentView, navigate,
            isConfirmationModalOpen, confirmationModalConfig, openConfirmationModal, closeConfirmationModal,
            isSuccessModalOpen, successModalInfo, openSuccessModal, closeSuccessModal,
            isOrderDetailModalOpen, viewingOrderId, openOrderDetailModal, closeOrderDetailModal,
            isCancelOrderModalOpen, cancelingOrderId, openCancelOrderModal, closeCancelOrderModal
        }}>
            {children}
        </UIContext.Provider>
    );
};

export const useUI = () => {
    const context = useContext(UIContext);
    if (!context) throw new Error('useUI must be used within UIProvider');
    return context;
};
