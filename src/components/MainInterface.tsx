import { useState } from 'react';
import { Menu, Mail, Bell, Settings, LogOut, CreditCard, Send, Smartphone, FileText, Building2, Car, Eye } from 'lucide-react';
import { SideMenu } from './SideMenu';
import cihLogo from 'figma:asset/f5aae62986fcfdf4eae36d4fd7016b7ee4dc674c.png';

interface MainInterfaceProps {
  onNavigate: (page: 'home' | 'cihcare') => void;
}

export function MainInterface({ onNavigate }: MainInterfaceProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBalance, setShowBalance] = useState(false);

  const actions = [
    { icon: CreditCard, label: 'Mes Cartes', color: 'text-orange-500' },
    { icon: Send, label: 'Effectuez un virement', color: 'text-orange-500' },
    { icon: Smartphone, label: 'Effectuez une recharge', color: 'text-orange-500' },
    { icon: FileText, label: 'Payez vos factures', color: 'text-orange-500' },
    { icon: Building2, label: 'Financer mon projet immobilier', color: 'text-orange-500' },
    { icon: Car, label: 'Payer vignette', color: 'text-orange-500' },
  ];

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 p-4 shadow-sm">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            <div className="flex items-center gap-4">
              <button onClick={() => setMenuOpen(true)} className="p-2">
                <Menu size={24} className="text-blue-600" />
              </button>
              <button className="p-2">
                <Mail size={24} className="text-blue-600" />
              </button>
              <button className="p-2 relative">
                <Bell size={24} className="text-blue-600" />
              </button>
            </div>
            
            <img src={cihLogo} alt="CIH Bank" className="h-8" />

            <div className="flex items-center gap-4">
              <button className="p-2">
                <Settings size={24} className="text-blue-600" />
              </button>
              <button className="p-2">
                <LogOut size={24} className="text-blue-600" />
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
          {/* Welcome Section */}
          <div className="flex items-center justify-between">
            <h1 className="text-orange-500">Bonjour MLLE NADA BELAHCEN !</h1>
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            </div>
          </div>

          {/* Account Card */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="text-center space-y-2">
              <p className="text-gray-600">Compte chèques</p>
              <p className="text-blue-600">2357099211005300</p>
              <p className="text-gray-600">Solde</p>
              <div className="flex items-center justify-center gap-3">
                <p className="text-2xl text-gray-800">
                  {showBalance ? '25 450,00 DH' : '****'}
                </p>
                <button 
                  onClick={() => setShowBalance(!showBalance)}
                  className="text-blue-500"
                >
                  <Eye size={24} />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Actions Grid */}
          <div className="grid grid-cols-2 gap-4">
            {actions.map((action, index) => (
              <button
                key={index}
                className="flex flex-col items-center gap-3 p-6 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-shadow"
              >
                <div className="bg-orange-50 p-4 rounded-full">
                  <action.icon size={32} className={action.color} />
                </div>
                <span className="text-gray-700 text-center text-sm">{action.label}</span>
              </button>
            ))}
          </div>

          {/* Products Button */}
          <button className="w-full border-2 border-orange-500 text-orange-500 py-4 rounded-lg hover:bg-orange-50 transition-colors flex items-center justify-center gap-2">
            <span className="bg-orange-500 text-white px-2 py-0.5 rounded text-xs">NEW</span>
            <span>DÉCOUVREZ NOS PRODUITS ET SERVICES</span>
          </button>

          {/* Footer */}
          <div className="grid grid-cols-2 gap-4 pt-6">
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
              <div className="bg-white p-3 rounded-full border border-gray-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-800">VOTRE</p>
                <p className="text-orange-500">AVIS</p>
                <p className="text-gray-800">NOUS INTÉRESSE</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
              <div className="bg-white p-3 rounded-full border border-gray-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-800">CONTACTER MON</p>
                <p className="text-orange-500">CONSEILLER</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Side Menu */}
      <SideMenu 
        isOpen={menuOpen} 
        onClose={() => setMenuOpen(false)} 
        onNavigate={onNavigate}
      />
    </>
  );
}
