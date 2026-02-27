import React from 'react';
import { UIProvider, useUI } from './contexts/UIContext';
import { ChannelsProvider } from './contexts/ChannelsContext';
import { OrdersProvider } from './contexts/OrdersContext';
import { PartnersProvider } from './contexts/PartnersContext';
import { UserProvider } from './contexts/UserContext';
import { CatalogProvider } from './contexts/CatalogContext';
import { CompanyProvider } from './contexts/CompanyContext';

import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { ProductCatalog } from './components/ProductCatalog';
import { ManageChannelsPage } from './components/ManageChannelsPage';
import { ChannelManagementPage } from './components/ChannelManagementPage';
import { OrdersPage } from './components/OrdersPage';
import { ManagePartnersPage } from './components/ManagePartnersPage';
import { HelpCenterPage } from './components/HelpCenterPage';
import { FinancialPage } from './components/FinancialPage';
import { SettingsPage } from './components/SettingsPage';

import { ConfirmationModal } from './components/ConfirmationModal';
import { SuccessModal } from './components/SuccessModal';
import { OrderDetailModal } from './components/OrderDetailModal';



const MainContent: React.FC = () => {
    const { currentView } = useUI();

    const renderView = () => {
        switch (currentView.type) {
            case 'home': return <HomePage />;
            case 'catalog': return <ProductCatalog />;
            case 'channels': return <ManageChannelsPage />;
            case 'channelManagement': return <ChannelManagementPage />;
            case 'orders': return <OrdersPage />;
            case 'partners': return <ManagePartnersPage />;
            case 'help': return <HelpCenterPage />;
            case 'financial': return <FinancialPage />;
            case 'settings': return <SettingsPage />;

            default: return <HomePage />;
        }
    };

    return (
        <main className="flex-1 overflow-y-auto bg-gray-50 relative">
            {renderView()}
        </main>
    );
};

import { CancelOrderModal } from './components/CancelOrderModal';

const AppLayout: React.FC = () => {
    return (
        <div className="flex h-screen w-full bg-gray-50 font-sans text-gray-900">
            <Sidebar />
            <div className="flex-1 flex flex-col h-screen overflow-hidden">
                <Header />
                <MainContent />
            </div>
            
            {/* Modals */}
            <ConfirmationModal />
            <SuccessModal />
            <OrderDetailModal />
            <CancelOrderModal />
        </div>
    );
};

const App: React.FC = () => {
    return (
        <UIProvider>
            <UserProvider>
                <CompanyProvider>
                    <ChannelsProvider>
                        <OrdersProvider>
                            <PartnersProvider>
                                <CatalogProvider>
                                    <AppLayout />
                                </CatalogProvider>
                            </PartnersProvider>
                        </OrdersProvider>
                    </ChannelsProvider>
                </CompanyProvider>
            </UserProvider>
        </UIProvider>
    );
};

export default App;
