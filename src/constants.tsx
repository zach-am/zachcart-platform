import React from 'react';
import { 
    LayoutDashboard, 
    ShoppingCart, 
    Tags, 
    Store, 
    BarChart3, 
    Settings, 
    ExternalLink, 
    BookOpen, 
    ChevronDown, 
    Gift, 
    DollarSign,
    Search,
    Filter,
    Plus,
    MoreVertical,
    AlertTriangle,
    CheckCircle,
    X,
    Edit,
    Trash2,
    Copy,
    Info,
    ArrowUp,
    ArrowDown,
    Truck,
    ShoppingBag,
    Paperclip,
    Sparkles,
    Send,
    CreditCard,
    User,
    LogOut,
    HelpCircle,
    ChevronLeft,
    ChevronRight,
    ArrowRight,
    Clock,
    MapPin,
    Phone
} from 'lucide-react';
import { SalesChannel, Product, Order, Partner, Dica } from './types';

// Icons
export const IconHome = LayoutDashboard;
export const IconCart = ShoppingCart;
export const IconTag = Tags;
export const IconChannels = Store;
export const IconStore = Store;
export const IconChart = BarChart3;
export const IconSettings = Settings;
export const IconExternalLink = ExternalLink;
export const IconBookOpen = BookOpen;
export const IconChevronDown = ChevronDown;
export const IconGift = Gift;
export const IconDollar = DollarSign;
export const IconSearch = Search;
export const IconFilter = Filter;
export const IconPlus = Plus;
export const IconMoreVertical = MoreVertical;
export const IconWarning = AlertTriangle;
export const IconCheckCircle = CheckCircle;
export const IconClose = X;
export const IconX = X;
export const IconEdit = Edit;
export const IconTrash = Trash2;
export const IconCopy = Copy;
export const IconInformationCircle = Info;
export const IconArrowUp = ArrowUp;
export const IconArrowDown = ArrowDown;
export const IconTruck = Truck;
export const IconShoppingBag = ShoppingBag;
export const IconPaperclip = Paperclip;
export const IconSparkles = Sparkles;
export const IconPaperAirplane = Send;
export const IconCreditCard = CreditCard;
export const IconUser = User;
export const IconLogOut = LogOut;
export const IconHelp = HelpCircle;
export const IconChevronLeft = ChevronLeft;
export const IconChevronRight = ChevronRight;
export const IconArrowLongRight = ArrowRight;
export const IconCheck = CheckCircle;
export const IconClock = Clock;
export const IconMapPin = MapPin;
export const IconPhone = Phone;

// Mock Icons for Channels (Replace with SVGs if needed)
export const IconIfood = () => <span className="font-bold text-red-600">iFood</span>;
export const IconRappi = () => <span className="font-bold text-orange-500">Rappi</span>;
export const IconUberEats = () => <span className="font-bold text-green-600">Uber</span>;
export const IconGoogle = () => <span className="font-bold text-blue-500">Google</span>;
export const IconAiQFome = () => <span className="font-bold text-purple-600">Aiqfome</span>;

export const SALES_CHANNELS: SalesChannel[] = [
    { id: 'ifood', name: 'iFood', icon: <IconIfood />, color: 'bg-red-500', type: 'delivery', features: ['Digital Menu', 'Partner Drivers'], commission: '12% + 3.5%', monthlyFee: '$ 20.00' },
    { id: 'rappi', name: 'Rappi', icon: <IconRappi />, color: 'bg-orange-500', type: 'delivery', features: ['Turbo Delivery', 'Prime'], commission: '10%', monthlyFee: '$ 15.00' },
    { id: 'uber_eats', name: 'Uber Eats', icon: <IconUberEats />, color: 'bg-green-500', type: 'delivery', features: ['Fast Delivery'], commission: '15%', monthlyFee: '$ 0.00' },
    { id: 'google_shopping', name: 'Google Shopping', icon: <IconGoogle />, color: 'bg-blue-500', type: 'marketplace', features: ['Integrated Ads'], commission: 'CPV', monthlyFee: '$ 0.00' },
    { id: 'aiqfome', name: 'Aiqfome', icon: <IconAiQFome />, color: 'bg-purple-600', type: 'delivery', features: ['Regional Focus'], commission: '8%', monthlyFee: '$ 10.00' },
];

export const MOCK_PRODUCTS: Product[] = Array.from({ length: 20 }).map((_, i) => ({
    id: i + 1,
    name: `Sample Product ${i + 1}`,
    sku: `SKU-${1000 + i}`,
    ean: `789${1000000000 + i}`,
    price: 29.90 + (i * 5),
    stock: 10 + i,
    category: i % 2 === 0 ? 'Food' : 'Beverages',
    description: `Detailed description for sample product ${i + 1}.`,
    imageUrl: `https://picsum.photos/seed/${i}/200`,
    status: i % 5 === 0 ? 'paused' : 'active',
    channelPrices: [],
    createdAt: new Date(),
    updatedAt: new Date(),
}));

export const PARTNERS: Partner[] = [
    { id: 'iqvia', name: 'IQVIA', logo: <IconChart />, description: 'Pharmaceutical market data', benefit: 'Free Access', category: 'pharma', status: 'available' },
    { id: 'cimed', name: 'Cimed', logo: <IconGift />, description: 'Exclusive offers on generics', benefit: '5% Discount', category: 'pharma', status: 'available' },
];

export const HELP_TOPICS = [
    {
        category: 'Getting Started',
        icon: IconBookOpen,
        topics: [
            { question: 'How to connect iFood?', answer: 'To connect iFood, go to the "Channels" tab, click "Connect" on the iFood card, and follow the instructions to log in to the partner portal.' },
            { question: 'How to register products?', answer: 'Access the "Catalog", click "New Product", and fill in the required information such as Name, Price, and Stock.' },
        ]
    },
    {
        category: 'Orders',
        icon: IconCart,
        topics: [
            { question: 'How to accept an order?', answer: 'In the "Orders" screen, click on the order with "New" status and then on the "Confirm" button.' },
            { question: 'How to cancel an order?', answer: 'Open the order details and click "Cancel Order". You will need to provide a reason.' },
        ]
    }
];
