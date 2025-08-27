import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ToastProvider } from './context/ToastContext';
import { PrivateRoute } from './components/PrivateRoute';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/Login';

const AppContent: React.FC = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const [activeItem, setActiveItem] = useState('dashboard');

  if (!isAuthenticated) {
    return <Login />;
  }

  const renderContent = () => {
    switch (activeItem) {
      case 'dashboard':
        return <Dashboard />;
      case 'agendamentos':
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-neutral-900">Agendamentos</h2>
            <p className="text-neutral-600 mt-2">Módulo em desenvolvimento</p>
          </div>
        );
      case 'clientes':
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-neutral-900">Clientes</h2>
            <p className="text-neutral-600 mt-2">Módulo em desenvolvimento</p>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="h-screen bg-neutral-50 flex flex-col">
      <Header user={user!} onLogout={logout} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar activeItem={activeItem} onItemClick={setActiveItem} />
        <main className="flex-1 overflow-y-auto p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ToastProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ToastProvider>
  );
};

export default App;