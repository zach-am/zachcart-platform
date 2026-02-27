import { ReactNode } from 'react';

export type ViewType = 
    | 'home' 
    | 'catalog' 
    | 'productDetail' 
    | 'channels' 
    | 'channelManagement' 
    | 'orders' 
    | 'partners' 
 
    | 'financial' 
    | 'paymentMethods'
    | 'settings' 
    | 'help';

export interface ViewState {
    type: ViewType;
    productId?: number;
    channelId?: string;
}

export type ProductStatus = 'active' | 'paused' | 'blocked' | 'draft';
export type ChannelStatus = 'active' | 'paused' | 'blocked' | 'not_integrated' | 'pending' | 'in_progress' | 'credentials_pending' | 'available';

export interface ChannelPrice {
    channelId: string;
    price: number;
    status: ProductStatus;
}

export interface Product {
    id: number;
    name: string;
    sku: string;
    ean: string;
    price: number;
    promotionalPrice?: number;
    stock: number;
    category: string;
    description: string;
    imageUrl: string;
    status: ProductStatus;
    channelPrices: ChannelPrice[];
    createdAt: Date;
    updatedAt: Date;
    brand?: string;
    weight?: number;
    dimensions?: {
        width: number;
        height: number;
        depth: number;
    };
}

export interface SalesChannel {
    id: string;
    name: string;
    icon: ReactNode;
    color: string;
    type: 'marketplace' | 'ecommerce' | 'delivery';
    description?: string;
    features?: string[];
    setupTime?: string;
    monthlyFee?: string;
    commission?: string;
}

export type OrderStatus = 'novo' | 'confirmado' | 'em_preparo' | 'em_rota' | 'concluido' | 'cancelado';

export interface OrderItem {
    productId: number;
    quantity: number;
    unitPrice: number;
    observation?: string;
    separationStatus: 'pending' | 'checked' | 'cancelled';
}

export interface Order {
    id: string;
    channelId: string;
    customer: {
        name: string;
        document?: string;
        email?: string;
        phone?: string;
        cpfOnInvoice?: boolean;
    };
    items: OrderItem[];
    status: OrderStatus;
    total: number;
    createdAt: Date;
    orderDate: Date;
    deliveryDetails: {
        type: 'delivery' | 'pickup';
        address?: string;
        estimatedTime?: string;
        responsibleParty?: 'store' | 'channel';
    };
    paymentDetails: {
        method: string;
        status: 'paid' | 'pending';
        card?: {
            brand: string;
            lastDigits: string;
            type: 'credit' | 'debit';
        };
        promoCode?: string;
        observations?: string;
    };
    billingSummary: {
        subtotal: number;
        shippingFee: number;
        discount?: number;
        surcharge?: number;
        change?: number;
        total: number;
    };
    statusHistory: { status: OrderStatus; date: Date }[];
    observations?: string;
}

export interface Partner {
    id: string;
    name: string;
    logo: ReactNode;
    description: string;
    benefit: string;
    category: 'pharma' | 'retail' | 'logistics' | 'marketing';
    status: 'active' | 'available' | 'in_progress';
    longDescription?: string;
    requirements?: string[];
}

export interface Dica {
    id: string;
    type: 'PERFORMANCE_SALES' | 'PERFORMANCE_ORDERS' | 'PERFORMANCE_TICKET' | 'TIP_STOCK' | 'TIP_PRICE' | 'TIP_CHANNEL';
    title: string;
    value?: string;
    change?: number;
    period?: string;
    shortDescription?: string;
    fullDescription?: string;
    actionLabel?: string;
    actionLink?: ViewType;
    icon: ReactNode;
    priority: 'high' | 'medium' | 'low';
}

export type WeekDay = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';

export interface TimeSlot {
    open: string;
    close: string;
}

export interface DaySchedule {
    enabled: boolean;
    slots: TimeSlot[];
}

export type WorkingHours = Record<WeekDay, DaySchedule>;

export interface PriceAdjustment {
    id: string;
    name: string;
    type: 'percentage' | 'fixed';
    value: number;
}

export interface ScheduledTimeSlot {
    startTime: string;
    endTime: string;
    maxOrders: number;
}

export interface ScheduledDayConfig {
    enabled: boolean;
    slots: ScheduledTimeSlot[];
}

export type ScheduledHours = Record<WeekDay, ScheduledDayConfig>;

export interface ChannelConfig {
    channelId: string;
    workingHours?: WorkingHours;
    priceAdjustments?: PriceAdjustment[];
    preparationTimeInMinutes?: number;
    minimumOrderValue?: number;
    autoAcceptOrders?: boolean;
    schedulingEnabled?: boolean;
    maxScheduledDays?: number;
    scheduledHours?: ScheduledHours;
}

export const WEEK_DAYS: WeekDay[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
