import { X, Send, Smartphone, FileText, Wallet, Settings, Calculator, Phone, CreditCard, Heart, Car, Target } from 'lucide-react';
import { PageType } from '../App';
import cihLogo from 'figma:asset/f5aae62986fcfdf4eae36d4fd7016b7ee4dc674c.png';

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: PageType) => void;
}

export function SideMenu({ isOpen, onClose, onNavigate }: SideMenuProps) {
  const handleCihCareClick = () => {
    onNavigate('cihcare');
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Side Menu */}
      <div 
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="bg-white border-b border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <img src={cihLogo} alt="CIH Bank" className="h-6" />
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
              <X size={24} className="text-gray-600" />
            </button>
          </div>
          <div>
            <p className="text-sm text-gray-600">Bienvenue,</p>
            <p className="text-lg text-gray-800">Mlle Belahcen Nada</p>
          </div>
        </div>

        {/* Menu Content */}
        <div className="overflow-y-auto h-[calc(100%-140px)] p-4">
          {/* Paiements et Transferts */}
          <div className="mb-6">
            <div className="space-y-1">
              <MenuItem icon={Send} label="Transfert CIH EXPRESS" />
              <MenuItem icon={FileText} label="Paiements de Factures" />
              <MenuItem icon={Smartphone} label="Recharges" />
              <MenuItem icon={Car} label="Paiement de la Vignette" />
              <MenuItem icon={Target} label="Paiement Fatourati" />
            </div>
          </div>

          {/* Mes Services */}
          <div className="mb-6">
            <h3 className="text-orange-500 mb-3 px-2">Mes Services</h3>
            <div className="space-y-1">
              <MenuItem icon={Wallet} label="CIH PAY" />
              <MenuItem 
                icon={Heart} 
                label="CIH Care" 
                onClick={handleCihCareClick}
                iconColor="text-orange-500"
              />
              <MenuItem icon={Settings} label="Paramètres" />
              <MenuItem icon={Calculator} label="Simulation Crédit" />
            </div>
          </div>

          {/* Mes Demandes en Ligne */}
          <div className="mb-6">
            <h3 className="text-orange-500 mb-3 px-2">Mes Demandes en Ligne</h3>
            <div className="space-y-1">
              <MenuItem icon={Phone} label="SOS Assistance" />
              <MenuItem icon={CreditCard} label="Demande de renvoi du Code PIN" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

interface MenuItemProps {
  icon: any;
  label: string;
  onClick?: () => void;
  iconColor?: string;
}

function MenuItem({ icon: Icon, label, onClick, iconColor = 'text-gray-600' }: MenuItemProps) {
  return (
    <button 
      onClick={onClick}
      className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors text-left"
    >
      <Icon size={20} className={iconColor} />
      <span className="text-gray-700 text-sm">{label}</span>
    </button>
  );
}