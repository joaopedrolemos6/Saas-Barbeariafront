import React from 'react';
import { Scissors, User, Settings, LogOut } from 'lucide-react';
import { Button } from '../ui/Button';

interface HeaderProps {
  user?: {
    name: string;
    avatar?: string;
  };
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ user, onLogout }) => {
  return (
    <header className="bg-white shadow-sm border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="bg-primary-600 p-2 rounded-lg">
                <Scissors className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-xl font-bold text-primary-600">
                BarberPro
              </h1>
            </div>
          </div>

          {/* User Menu */}
          {user && (
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 bg-primary-100 rounded-full flex items-center justify-center">
                  {user.avatar ? (
                    <img 
                      src={user.avatar} 
                      alt={user.name}
                      className="h-8 w-8 rounded-full object-cover"
                    />
                  ) : (
                    <User className="h-4 w-4 text-primary-600" />
                  )}
                </div>
                <span className="text-sm font-medium text-neutral-700">
                  {user.name}
                </span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" icon={Settings}>
                  Configurações
                </Button>
                <Button variant="outline" size="sm" icon={LogOut} onClick={onLogout}>
                  Sair
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};