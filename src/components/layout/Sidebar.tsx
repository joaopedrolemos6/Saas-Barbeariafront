import React from 'react';
import { 
  Home, 
  Calendar, 
  Users, 
  Scissors as ScissorsIcon, 
  Building2, 
  CreditCard, 
  BarChart3,
  Star
} from 'lucide-react';

interface SidebarItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  badge?: number;
}

interface SidebarProps {
  activeItem: string;
  onItemClick: (item: string) => void;
}

const sidebarItems: SidebarItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: Home, href: '/dashboard' },
  { id: 'agendamentos', label: 'Agendamentos', icon: Calendar, href: '/agendamentos' },
  { id: 'clientes', label: 'Clientes', icon: Users, href: '/clientes' },
  { id: 'barbeiros', label: 'Barbeiros', icon: ScissorsIcon, href: '/barbeiros' },
  { id: 'barbearias', label: 'Barbearias', icon: Building2, href: '/barbearias' },
  { id: 'servicos', label: 'Serviços', icon: ScissorsIcon, href: '/servicos' },
  { id: 'pagamentos', label: 'Pagamentos', icon: CreditCard, href: '/pagamentos' },
  { id: 'relatorios', label: 'Relatórios', icon: BarChart3, href: '/relatorios' },
  { id: 'avaliacoes', label: 'Avaliações', icon: Star, href: '/avaliacoes' },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeItem, onItemClick }) => {
  return (
    <div className="w-64 bg-white h-full shadow-sm border-r border-neutral-200">
      <nav className="mt-8 px-4">
        <ul className="space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => onItemClick(item.id)}
                  className={`
                    w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200
                    ${isActive 
                      ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-600' 
                      : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                    }
                  `}
                >
                  <Icon className={`mr-3 h-5 w-5 ${isActive ? 'text-primary-600' : 'text-neutral-400'}`} />
                  {item.label}
                  {item.badge && (
                    <span className="ml-auto inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary-100 text-secondary-800">
                      {item.badge}
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};