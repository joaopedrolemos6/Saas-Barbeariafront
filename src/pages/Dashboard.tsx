import React from 'react';
import { 
  Calendar, 
  Users, 
  DollarSign, 
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  Star
} from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative';
  icon: React.ComponentType<{ className?: string }>;
  color: 'blue' | 'green' | 'orange' | 'purple';
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, changeType, icon: Icon, color }) => {
  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600',
    green: 'bg-green-50 text-green-600',
    orange: 'bg-orange-50 text-orange-600',
    purple: 'bg-purple-50 text-purple-600',
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-neutral-600">{title}</p>
          <p className="text-2xl font-bold text-neutral-900 mt-1">{value}</p>
          {change && (
            <p className={`text-xs mt-1 ${changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
              {change}
            </p>
          )}
        </div>
        <div className={`p-3 rounded-lg ${colorClasses[color]}`}>
          <Icon className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
};

interface RecentAppointmentProps {
  client: string;
  service: string;
  time: string;
  status: 'confirmed' | 'pending' | 'completed';
}

const RecentAppointment: React.FC<RecentAppointmentProps> = ({ client, service, time, status }) => {
  const statusConfig = {
    confirmed: { color: 'text-green-600 bg-green-50', icon: CheckCircle, text: 'Confirmado' },
    pending: { color: 'text-yellow-600 bg-yellow-50', icon: Clock, text: 'Pendente' },
    completed: { color: 'text-blue-600 bg-blue-50', icon: CheckCircle, text: 'Finalizado' },
  };

  const config = statusConfig[status];
  const StatusIcon = config.icon;

  return (
    <div className="flex items-center justify-between py-3 border-b border-neutral-100 last:border-b-0">
      <div className="flex-1">
        <p className="font-medium text-neutral-900">{client}</p>
        <p className="text-sm text-neutral-600">{service}</p>
      </div>
      <div className="flex items-center space-x-3">
        <span className="text-sm text-neutral-600">{time}</span>
        <div className={`flex items-center space-x-1 px-2 py-1 rounded-full ${config.color}`}>
          <StatusIcon className="h-3 w-3" />
          <span className="text-xs font-medium">{config.text}</span>
        </div>
      </div>
    </div>
  );
};

export const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'Agendamentos Hoje',
      value: 12,
      change: '+2 desde ontem',
      changeType: 'positive' as const,
      icon: Calendar,
      color: 'blue' as const,
    },
    {
      title: 'Faturamento Mensal',
      value: 'R$ 18.540',
      change: '+15% desde o mês passado',
      changeType: 'positive' as const,
      icon: DollarSign,
      color: 'green' as const,
    },
    {
      title: 'Clientes Ativos',
      value: 324,
      change: '+8 novos esta semana',
      changeType: 'positive' as const,
      icon: Users,
      color: 'purple' as const,
    },
    {
      title: 'Avaliação Média',
      value: '4.9',
      change: '+0.2 pontos',
      changeType: 'positive' as const,
      icon: Star,
      color: 'orange' as const,
    },
  ];

  const recentAppointments = [
    {
      client: 'Carlos Silva',
      service: 'Corte + Barba',
      time: '09:00',
      status: 'confirmed' as const,
    },
    {
      client: 'João Santos',
      service: 'Corte Masculino',
      time: '10:30',
      status: 'pending' as const,
    },
    {
      client: 'Pedro Lima',
      service: 'Barba Completa',
      time: '11:00',
      status: 'completed' as const,
    },
    {
      client: 'Rafael Costa',
      service: 'Corte + Acabamento',
      time: '14:00',
      status: 'confirmed' as const,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-neutral-900">Dashboard</h1>
        <p className="text-neutral-600">Visão geral do seu negócio</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Appointments */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-neutral-200">
            <div className="px-6 py-4 border-b border-neutral-200">
              <h3 className="text-lg font-semibold text-neutral-900">
                Agendamentos de Hoje
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-0">
                {recentAppointments.map((appointment, index) => (
                  <RecentAppointment key={index} {...appointment} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-neutral-200">
            <div className="px-6 py-4 border-b border-neutral-200">
              <h3 className="text-lg font-semibold text-neutral-900">
                Ações Rápidas
              </h3>
            </div>
            <div className="p-6 space-y-3">
              <button className="w-full flex items-center justify-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200">
                <Calendar className="h-4 w-4 mr-2" />
                Novo Agendamento
              </button>
              <button className="w-full flex items-center justify-center px-4 py-2 bg-secondary-500 text-white rounded-lg hover:bg-secondary-600 transition-colors duration-200">
                <Users className="h-4 w-4 mr-2" />
                Cadastrar Cliente
              </button>
              <button className="w-full flex items-center justify-center px-4 py-2 border border-neutral-300 text-neutral-700 rounded-lg hover:bg-neutral-50 transition-colors duration-200">
                <TrendingUp className="h-4 w-4 mr-2" />
                Ver Relatórios
              </button>
            </div>
          </div>

          {/* Performance Summary */}
          <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl text-white p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Performance Mensal</h3>
              <TrendingUp className="h-5 w-5" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-primary-100">Meta de Faturamento:</span>
                <span className="font-semibold">R$ 20.000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-primary-100">Progresso:</span>
                <span className="font-semibold">92.7%</span>
              </div>
              <div className="w-full bg-primary-400 rounded-full h-2 mt-3">
                <div className="bg-white h-2 rounded-full" style={{ width: '92.7%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};