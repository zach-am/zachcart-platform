import React, { createContext, useContext, useState } from 'react';
import { Order, OrderStatus } from '../types';

interface OrdersContextType {
    orders: Order[];
    getOrderById: (id: string) => Order | undefined;
    updateOrderStatus: (orderId: string, status: OrderStatus, options?: { showSuccessModal?: boolean }) => void;
    confirmSeparationAndUpdateStatus: (orderId: string, status: OrderStatus, options?: { showSuccessModal?: boolean }) => void;
    updateOrderItemSeparationStatus: (orderId: string, productId: number, status: 'pending' | 'checked' | 'cancelled') => void;
    getStatusInfo: (status: OrderStatus) => { text: string; color: string; nextStatus?: OrderStatus; actionText?: string };
}

const OrdersContext = createContext<OrdersContextType | undefined>(undefined);

export const OrdersProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [orders, setOrders] = useState<Order[]>([
        {
            id: '1001',
            channelId: 'ifood',
            customer: { name: 'João Silva', phone: '(11) 99999-9999' },
            items: [{ productId: 1, quantity: 2, unitPrice: 29.90, separationStatus: 'pending' }],
            status: 'novo',
            total: 59.80,
            createdAt: new Date(),
            orderDate: new Date(),
            deliveryDetails: { type: 'delivery', address: 'Rua A, 123' },
            paymentDetails: { method: 'Credit Card', status: 'paid' },
            billingSummary: { subtotal: 59.80, shippingFee: 5.00, total: 64.80 },
            statusHistory: []
        },
        {
            id: '1002',
            channelId: 'rappi',
            customer: { name: 'Maria Oliveira', phone: '(11) 98888-8888' },
            items: [{ productId: 2, quantity: 1, unitPrice: 45.00, separationStatus: 'pending' }],
            status: 'em_preparo',
            total: 45.00,
            createdAt: new Date(Date.now() - 3600000),
            orderDate: new Date(Date.now() - 3600000),
            deliveryDetails: { type: 'delivery', address: 'Rua B, 456' },
            paymentDetails: { method: 'Debit Card', status: 'paid' },
            billingSummary: { subtotal: 45.00, shippingFee: 0, total: 45.00 },
            statusHistory: [{ status: 'novo', date: new Date(Date.now() - 3600000) }, { status: 'confirmado', date: new Date(Date.now() - 3000000) }]
        }
    ]);

    const getOrderById = (id: string) => orders.find(o => o.id === id);

    const updateOrderStatus = (orderId: string, status: OrderStatus) => {
        setOrders(prev => prev.map(o => o.id === orderId ? { ...o, status, statusHistory: [...o.statusHistory, { status, date: new Date() }] } : o));
    };

    const confirmSeparationAndUpdateStatus = (orderId: string, status: OrderStatus) => {
        updateOrderStatus(orderId, status);
    };

    const updateOrderItemSeparationStatus = (orderId: string, productId: number, status: 'pending' | 'checked' | 'cancelled') => {
        setOrders(prev => prev.map(o => {
            if (o.id !== orderId) return o;
            const newItems = o.items.map(i => i.productId === productId ? { ...i, separationStatus: status } : i);
            return { ...o, items: newItems };
        }));
    };

    const getStatusInfo = (status: OrderStatus) => {
        switch (status) {
            case 'novo': return { text: 'New', color: 'bg-blue-100 text-blue-800', nextStatus: 'confirmado', actionText: 'Confirm' };
            case 'confirmado': return { text: 'Confirmed', color: 'bg-yellow-100 text-yellow-800', nextStatus: 'em_preparo', actionText: 'Start Prep' };
            case 'em_preparo': return { text: 'Preparing', color: 'bg-orange-100 text-orange-800', nextStatus: 'em_rota', actionText: 'Dispatch' };
            case 'em_rota': return { text: 'Out for Delivery', color: 'bg-purple-100 text-purple-800', nextStatus: 'concluido', actionText: 'Complete' };
            case 'concluido': return { text: 'Completed', color: 'bg-green-100 text-green-800' };
            case 'cancelado': return { text: 'Cancelled', color: 'bg-red-100 text-red-800' };
            default: return { text: status, color: 'bg-gray-100' };
        }
    };

    return (
        <OrdersContext.Provider value={{ orders, getOrderById, updateOrderStatus, confirmSeparationAndUpdateStatus, updateOrderItemSeparationStatus, getStatusInfo }}>
            {children}
        </OrdersContext.Provider>
    );
};

export const useOrders = () => {
    const context = useContext(OrdersContext);
    if (!context) throw new Error('useOrders must be used within OrdersProvider');
    return context;
};
