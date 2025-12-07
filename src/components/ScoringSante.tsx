import { ArrowLeft, Menu, CheckCircle2, Wallet, TrendingUp, Package } from 'lucide-react';
import cihLogo from 'figma:asset/f5aae62986fcfdf4eae36d4fd7016b7ee4dc674c.png';

interface ScoringSanteProps {
  onBack: () => void;
}

export function ScoringSante({ onBack }: ScoringSanteProps) {
  const keyFactors = [
    { 
      icon: TrendingUp, 
      label: 'Revenus réguliers', 
      badge: null,
      color: 'text-orange-500'
    },
    { 
      icon: CheckCircle2, 
      label: 'Virements réguliers', 
      badge: 'Pondération IA',
      color: 'text-orange-500'
    },
    { 
      icon: Wallet, 
      label: 'Solde moyen stable', 
      badge: 'Pondération IA',
      color: 'text-orange-500'
    },
    { 
      icon: Package, 
      label: 'Historique de remboursement', 
      subtext: 'Basé sur le CIH Care',
      badge: null,
      color: 'text-orange-500'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center justify-between max-w-md mx-auto mb-6">
          <button onClick={onBack} className="p-2">
            <ArrowLeft size={24} className="text-gray-700" />
          </button>
          <h1 className="text-xl text-gray-800">Mon Score Santé</h1>
          <button className="p-2">
            <Menu size={24} className="text-gray-700" />
          </button>
        </div>

        {/* Profile Status */}
        <div className="max-w-md mx-auto text-center mb-2">
          <p className="text-gray-600">Votre profil est jugé</p>
          <p className="text-gray-800">Excellent</p>
        </div>
      </header>

      {/* Score Gauge */}
      <div className="max-w-md mx-auto px-4 py-8 mb-8">
        <div className="relative w-64 h-64 mx-auto">
          <svg className="w-full h-full transform -rotate-180" viewBox="0 0 200 200">
            {/* Background arc */}
            <path
              d="M 30 170 A 85 85 0 1 1 170 170"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="20"
              strokeLinecap="round"
            />
            {/* Orange arc (good score) */}
            <path
              d="M 30 170 A 85 85 0 0 1 100 15"
              fill="none"
              stroke="#f97316"
              strokeWidth="20"
              strokeLinecap="round"
            />
            {/* Light orange arc (medium) */}
            <path
              d="M 100 15 A 85 85 0 0 1 150 40"
              fill="none"
              stroke="#fb923c"
              strokeWidth="20"
              strokeLinecap="round"
            />
            {/* Red arc (low) */}
            <path
              d="M 150 40 A 85 85 0 0 1 170 170"
              fill="none"
              stroke="#ef4444"
              strokeWidth="20"
              strokeLinecap="round"
            />
            
            {/* Tick marks */}
            {[0, 20, 40, 60, 80, 100].map((value, index) => {
              const angle = -180 + (value / 100) * 180;
              const radian = (angle * Math.PI) / 180;
              const x1 = 100 + 75 * Math.cos(radian);
              const y1 = 100 + 75 * Math.sin(radian);
              const x2 = 100 + 85 * Math.cos(radian);
              const y2 = 100 + 85 * Math.sin(radian);
              
              return (
                <line
                  key={index}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#6b7280"
                  strokeWidth="2"
                />
              );
            })}
          </svg>
          
          {/* Center text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-5xl text-gray-800 mb-2">85/100</p>
            <p className="text-sm text-gray-600">Votre profil est jugé</p>
            <p className="text-sm text-gray-800">Excellent</p>
          </div>
        </div>
      </div>

      {/* Key Factors Card */}
      <div className="max-w-md mx-auto px-4 pb-6">
        <div className="bg-white border border-gray-200 rounded-3xl shadow-xl p-6">
          <h2 className="text-gray-800 mb-6">Les Facteurs Clés :</h2>
          
          <div className="space-y-4 mb-6">
            {keyFactors.map((factor, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="bg-orange-50 p-2 rounded flex-shrink-0">
                  <factor.icon className={factor.color} size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-700">{factor.label}</p>
                  {factor.subtext && (
                    <p className="text-sm text-gray-500">{factor.subtext}</p>
                  )}
                </div>
                {factor.badge && (
                  <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap">
                    {factor.badge}
                  </span>
                )}
                <div className="flex-shrink-0">
                  <CheckCircle2 className="text-orange-500" size={24} />
                </div>
              </div>
            ))}
          </div>

          {/* Info Text */}
          <p className="text-sm text-gray-600 text-center mb-2">
            Ce score vous permet de bénéficier d&apos;un plafond de 2000 DH.
          </p>
          <p className="text-sm text-gray-400 text-center mb-6">
            Score mis à jour le 15/01/2024
          </p>

          {/* Improve Score Button */}
          <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            Améliorer mon score
          </button>
        </div>
      </div>
    </div>
  );
}
