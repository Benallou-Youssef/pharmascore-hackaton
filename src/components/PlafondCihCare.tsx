import { ArrowLeft, MoreVertical, ChevronRight } from 'lucide-react';

interface PlafondCihCareProps {
  onBack: () => void;
}

export function PlafondCihCare({ onBack }: PlafondCihCareProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b p-4 shadow-sm">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <button onClick={onBack} className="p-2">
            <ArrowLeft size={24} className="text-gray-700" />
          </button>
          <h1 className="text-gray-800">Mon Plafond CIH Care</h1>
          <button className="p-2">
            <MoreVertical size={24} className="text-gray-700" />
          </button>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-md mx-auto px-4 py-6">
        {/* Gauge Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          {/* Circular Gauge */}
          <div className="relative w-48 h-48 mx-auto mb-6">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
              {/* Background circle */}
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="20"
              />
              {/* Blue arc (available credit) */}
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="20"
                strokeDasharray={`${(1200 / 2000) * 502.4} 502.4`}
                strokeLinecap="round"
              />
              {/* Orange arc (used credit) */}
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="#fb923c"
                strokeWidth="20"
                strokeDasharray={`${(800 / 2000) * 502.4} 502.4`}
                strokeDashoffset={`${-(1200 / 2000) * 502.4}`}
                strokeLinecap="round"
              />
              
              {/* Needle indicator */}
              <g transform="rotate(216 100 100)">
                <line
                  x1="100"
                  y1="100"
                  x2="100"
                  y2="35"
                  stroke="#1f2937"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <circle cx="100" cy="100" r="5" fill="#1f2937" />
              </g>
            </svg>
            
            {/* Center text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-xs text-gray-500 mb-1">Plafond de Crédit</p>
              <p className="text-xs text-gray-500">Disponible</p>
              <p className="text-2xl text-gray-800 mt-2">2,000</p>
            </div>
          </div>

          {/* Amount Display */}
          <div className="text-center mb-4">
            <p className="text-2xl text-gray-800">1,200 DH / 2,000 DH</p>
            <p className="text-sm text-gray-600">Disponibles</p>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-orange-400" 
                style={{ width: '60%' }}
              ></div>
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
          <button className="w-full flex items-center justify-between">
            <div className="text-left">
              <h3 className="text-gray-800 mb-1">Comprendre mon Plafond</h3>
              <p className="text-sm text-gray-600">Basé sur : Revenus, Historique de remboursement,</p>
              <p className="text-sm text-gray-600">Solde moyen...</p>
              <p className="text-sm text-blue-600 mt-1">Voir détail</p>
            </div>
            <ChevronRight size={24} className="text-gray-400 flex-shrink-0" />
          </button>
        </div>
      </div>
    </div>
  );
}