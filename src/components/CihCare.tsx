import { ArrowLeft, MapPin, Trophy, ChevronRight } from 'lucide-react';
import { PageType } from '../App';
import { useState } from 'react';
import cihLogo from 'figma:asset/f5aae62986fcfdf4eae36d4fd7016b7ee4dc674c.png';

interface CihCareProps {
  onBack: () => void;
  onNavigate: (page: PageType) => void;
}

export function CihCare({ onBack, onNavigate }: CihCareProps) {
  const [activeTab, setActiveTab] = useState<'services' | 'plafonds' | 'operations'>('services');

  const services = [
    { icon: '🎁', label: 'Avantages Carte', color: 'text-blue-500', action: null },
    { icon: '💰', label: 'Gérer le remboursement', color: 'text-gray-700', action: 'remboursement' as PageType },
    { icon: '💊', label: 'Pharmacies partenaires', color: 'text-gray-700', action: 'pharmacies' as PageType },
    { icon: '🏆', label: 'Scoring', color: 'text-gray-700', action: 'scoring' as PageType },
  ];

  const handleTabClick = (tab: 'services' | 'plafonds' | 'operations') => {
    setActiveTab(tab);
    if (tab === 'plafonds') {
      onNavigate('plafond');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 p-4 shadow-sm">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <button onClick={onBack} className="p-2">
            <ArrowLeft size={24} className="text-gray-700" />
          </button>
          <h1 className="text-gray-800">CIH Care</h1>
          <img src={cihLogo} alt="CIH Bank" className="h-6" />
        </div>
      </header>

      {/* Content */}
      <div className="max-w-md mx-auto px-4 py-6">
        {/* Card Image Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
          {/* Card Visual */}
          <div className="relative bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 p-6 h-48">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-white/80 text-sm">CIH Care</p>
                <p className="text-white text-2xl mt-2">Carte Santé</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                <p className="text-white">CODE30</p>
              </div>
            </div>
            <div className="absolute bottom-6 left-6">
              <p className="text-white/80 text-xs">Titulaire</p>
              <p className="text-white">Mohamed Ali</p>
            </div>
          </div>

          {/* Fonctionnalité activée */}
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-orange-100 p-2 rounded">
                  <span className="text-orange-600">📱</span>
                </div>
                <span className="text-gray-700">Fonctionnalité activée</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
              </label>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b">
            <button 
              onClick={() => handleTabClick('services')}
              className={`flex-1 py-3 ${
                activeTab === 'services' 
                  ? 'text-orange-500 border-b-2 border-orange-500' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              SERVICES
            </button>
            <button 
              onClick={() => handleTabClick('plafonds')}
              className={`flex-1 py-3 ${
                activeTab === 'plafonds' 
                  ? 'text-orange-500 border-b-2 border-orange-500' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              PLAFONDS
            </button>
            <button 
              onClick={() => handleTabClick('operations')}
              className={`flex-1 py-3 ${
                activeTab === 'operations' 
                  ? 'text-orange-500 border-b-2 border-orange-500' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              OPÉRATIONS
            </button>
          </div>

          {/* Services List */}
          <div className="p-4 space-y-3">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => service.action && onNavigate(service.action)}
                className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  {service.icon === '🎁' ? (
                    <div className="bg-blue-50 p-2 rounded">
                      <span className="text-xl">{service.icon}</span>
                    </div>
                  ) : service.icon === '💰' ? (
                    <div className="bg-orange-50 p-2 rounded">
                      <span className="text-xl">{service.icon}</span>
                    </div>
                  ) : service.icon === '💊' ? (
                    <div className="bg-red-50 p-2 rounded">
                      <MapPin className="text-red-500" size={20} />
                    </div>
                  ) : (
                    <div className="bg-orange-50 p-2 rounded">
                      <Trophy className="text-orange-500" size={20} />
                    </div>
                  )}
                  <span className={service.color}>{service.label}</span>
                </div>
                <ChevronRight size={20} className="text-gray-400" />
              </button>
            ))}
          </div>
        </div>

        {/* PharmaCredit Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-gray-800 mb-4">PharmaCredit - <span className="text-green-600">Active</span></h2>
          
          <div className="flex items-center gap-6 mb-6">
            {/* Health Score Gauge */}
            <div className="relative">
              <svg className="w-24 h-24 transform -rotate-90">
                <circle
                  cx="48"
                  cy="48"
                  r="40"
                  stroke="#e5e7eb"
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="48"
                  cy="48"
                  r="40"
                  stroke="url(#gradient)"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${(85 / 100) * 251.2} 251.2`}
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="50%" stopColor="#eab308" />
                    <stop offset="100%" stopColor="#22c55e" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-xs text-gray-500">Score IA</p>
                  <p className="text-xl text-gray-800">Santé</p>
                </div>
              </div>
            </div>

            {/* Score Details */}
            <div>
              <p className="text-sm text-gray-600 mb-1">Score IA Santé</p>
              <p className="text-2xl text-green-600 mb-1">85/100</p>
              <p className="text-xs text-gray-500">(Excellent)</p>
            </div>
          </div>

          {/* Plafond */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-4">
            <p className="text-sm text-gray-600 mb-1">Plafond Disponible :</p>
            <p className="text-2xl text-gray-800">2 000 DH <span className="text-gray-500">/ 3 000 DH</span></p>
            <div className="mt-3 bg-gray-200 rounded-full h-2 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-full" style={{ width: '66.6%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
