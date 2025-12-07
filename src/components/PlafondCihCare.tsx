import { ArrowLeft, ChevronRight, TrendingUp, Calendar, CreditCard } from 'lucide-react';
import cihLogo from 'figma:asset/f5aae62986fcfdf4eae36d4fd7016b7ee4dc674c.png';
import { useState } from 'react';

interface PlafondCihCareProps {
  onBack: () => void;
}

export function PlafondCihCare({ onBack }: PlafondCihCareProps) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 p-4 shadow-sm">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <button onClick={onBack} className="p-2">
            <ArrowLeft size={24} className="text-gray-700" />
          </button>
          <h1 className="text-gray-800">Plafonds</h1>
          <img src={cihLogo} alt="CIH Bank" className="h-6" />
        </div>
      </header>

      {/* Content */}
      <div className="max-w-md mx-auto px-4 py-6 space-y-6">
        {/* Gauge Chart Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-gray-800 mb-6 text-center">Plafond Disponible</h2>
          
          {/* Circular Gauge */}
          <div className="relative w-48 h-48 mx-auto mb-6">
            <svg className="w-full h-full transform -rotate-90">
              {/* Background circle */}
              <circle
                cx="96"
                cy="96"
                r="80"
                stroke="#e5e7eb"
                strokeWidth="16"
                fill="none"
              />
              {/* Progress circle */}
              <circle
                cx="96"
                cy="96"
                r="80"
                stroke="url(#gaugeGradient)"
                strokeWidth="16"
                fill="none"
                strokeDasharray={`${(2000 / 3000) * 502.4} 502.4`}
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#60a5fa" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Center text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-xs text-gray-500 mb-1">Plafond de Crédit</p>
              <p className="text-xs text-gray-500">Disponible</p>
              <p className="text-2xl text-gray-800 mt-2">2,000</p>
            </div>
          </div>

          {/* Plafond Details */}
          <div className="space-y-3">
            <div className="flex justify-between items-center pb-3 border-b border-gray-200">
              <span className="text-sm text-gray-600">Plafond Total</span>
              <span className="text-gray-800">3,000 DH</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-gray-200">
              <span className="text-sm text-gray-600">Plafond Utilisé</span>
              <span className="text-gray-800">1,000 DH</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-gray-200">
              <span className="text-sm text-gray-600">Plafond Disponible</span>
              <span className="text-blue-600">2,000 DH</span>
            </div>
          </div>

          {/* Score Badge */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg py-3 px-4 text-center">
            <p className="text-sm text-gray-700">
              Votre Score IA actuel : <span className="text-blue-600">85/100 (Excellent)</span>
            </p>
          </div>
        </div>

        {/* Understand My Credit Card */}
        <div className="bg-white rounded-2xl shadow-lg p-4">
          <button 
            onClick={() => setShowDetails(!showDetails)}
            className="w-full flex items-center justify-between"
          >
            <div className="text-left">
              <h3 className="text-gray-800 mb-1">Comprendre mon Plafond</h3>
              <p className="text-sm text-gray-600">Basé sur : Revenus, Historique de remboursement,</p>
              <p className="text-sm text-gray-600">Solde moyen...</p>
              <p className="text-sm text-blue-600 mt-1">Voir détail</p>
            </div>
            <ChevronRight 
              size={24} 
              className={`text-gray-400 flex-shrink-0 transition-transform ${showDetails ? 'rotate-90' : ''}`} 
            />
          </button>

          {/* Details Section */}
          {showDetails && (
            <div className="mt-4 pt-4 border-t border-gray-200 space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-3">
                  <TrendingUp className="text-blue-600" size={20} />
                  <h4 className="text-gray-800">Revenus</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Vos revenus mensuels influencent votre plafond de crédit. Des revenus stables et réguliers augmentent votre capacité d&apos;emprunt.
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="text-green-600" size={20} />
                  <h4 className="text-gray-800">Historique de remboursement</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Un bon historique de remboursement à temps améliore votre score et peut augmenter votre plafond disponible.
                </p>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-3">
                  <CreditCard className="text-orange-600" size={20} />
                  <h4 className="text-gray-800">Solde moyen</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Votre solde bancaire moyen mensuel est pris en compte pour déterminer votre capacité de remboursement.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-4 border border-purple-200">
                <h4 className="text-gray-800 mb-2">Comment améliorer mon plafond ?</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    <span>Remboursez vos crédits à temps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    <span>Maintenez un solde bancaire positif</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    <span>Utilisez régulièrement votre carte CIH Care</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    <span>Augmentez votre score IA Santé</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
