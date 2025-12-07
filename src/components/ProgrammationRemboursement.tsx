import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { useState } from 'react';
import cihLogo from 'figma:asset/f5aae62986fcfdf4eae36d4fd7016b7ee4dc674c.png';

interface ProgrammationRemboursementProps {
  onBack: () => void;
}

export function ProgrammationRemboursement({ onBack }: ProgrammationRemboursementProps) {
  const [selectedDate, setSelectedDate] = useState(17);
  const [showToday, setShowToday] = useState(true);

  const daysOfWeek = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  
  // Janvier 2024 calendar data
  const calendarDays = [
    { day: null, disabled: true },
    { day: 1, disabled: false },
    { day: 2, disabled: false },
    { day: null, disabled: true },
    { day: 4, disabled: false },
    { day: null, disabled: true },
    { day: null, disabled: true },
    { day: null, disabled: true },
    { day: 5, disabled: false },
    { day: 6, disabled: false },
    { day: 6, disabled: false },
    { day: 7, disabled: false },
    { day: 8, disabled: false },
    { day: 9, disabled: false },
    { day: 10, disabled: false },
    { day: 11, disabled: false },
    { day: 12, disabled: false },
    { day: 13, disabled: false },
    { day: 13, disabled: false },
    { day: 14, disabled: false },
    { day: 15, disabled: false },
    { day: 17, disabled: false, selected: true },
    { day: 18, disabled: false },
    { day: null, disabled: true },
    { day: 22, disabled: false },
    { day: 23, disabled: false },
    { day: 20, disabled: false },
    { day: 21, disabled: false },
    { day: 22, disabled: false },
    { day: 23, disabled: false },
    { day: 25, disabled: false },
    { day: 28, disabled: false },
    { day: 29, disabled: false },
    { day: 30, disabled: false },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center justify-between max-w-md mx-auto mb-4">
          <button onClick={onBack} className="p-2">
            <ArrowLeft size={24} className="text-gray-700" />
          </button>
          <img src={cihLogo} alt="CIH Bank" className="h-8" />
        </div>
        <div className="max-w-md mx-auto">
          <h1 className="text-xl text-gray-800">Programmation du Remboursement</h1>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-md mx-auto px-4 py-6">
        {/* Date Selection Buttons */}
        <div className="flex gap-3 mb-6">
          <button 
            onClick={() => setShowToday(true)}
            className={`flex-1 py-2 px-4 rounded-full transition-colors ${
              showToday 
                ? 'bg-orange-500 text-white' 
                : 'bg-gray-100 text-gray-700 border border-gray-300'
            }`}
          >
            Aujourd&apos;hui
          </button>
          <button 
            onClick={() => setShowToday(false)}
            className={`flex-1 py-2 px-4 rounded-full transition-colors ${
              !showToday 
                ? 'bg-orange-500 text-white' 
                : 'bg-gray-100 text-gray-700 border border-gray-300'
            }`}
          >
            20 Mars (3 mos max)
          </button>
        </div>

        {/* Calendar Card */}
        <div className="bg-white border border-gray-200 rounded-3xl shadow-lg p-6 mb-6">
          <h2 className="text-center text-gray-800 mb-6">Janvier</h2>
          
          {/* Days of Week Header */}
          <div className="grid grid-cols-7 gap-2 mb-3">
            {daysOfWeek.map((day, index) => (
              <div key={index} className="text-center text-sm text-gray-400 py-1">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-2">
            {calendarDays.map((item, index) => (
              <button
                key={index}
                disabled={item.disabled || item.day === null}
                onClick={() => item.day && setSelectedDate(item.day)}
                className={`aspect-square flex items-center justify-center rounded-full text-sm transition-all ${
                  item.day === null || item.disabled
                    ? 'invisible'
                    : item.day === selectedDate
                    ? 'bg-orange-500 text-white scale-110'
                    : index % 7 === 0
                    ? 'text-orange-400 hover:bg-orange-50'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.day}
              </button>
            ))}
          </div>
        </div>

        {/* Cost Card */}
        <div className="bg-white border border-gray-200 rounded-3xl shadow-lg p-6">
          <h3 className="text-gray-800 mb-2">Coût du service :</h3>
          <p className="text-3xl text-gray-800 mb-1">10 DH</p>
          <p className="text-sm text-gray-500 mb-4">(Frais de dossier)</p>
          <p className="text-sm text-gray-600 mb-6">Pour le 30 Janvier :</p>

          {/* Warning */}
          <div className="bg-orange-50 border-l-4 border-orange-400 rounded-lg p-4 flex gap-3 mb-6">
            <AlertTriangle className="text-orange-500 flex-shrink-0 mt-0.5" size={20} />
            <p className="text-sm text-gray-700">
              <span>Attention :</span> Passé le 20 Mars (3 mois max), une majoration de retard de 10% sera appliquée sur le montant restant.
            </p>
          </div>

          {/* Validate Button */}
          <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            Valider le prélèvement
          </button>
        </div>
      </div>
    </div>
  );
}
