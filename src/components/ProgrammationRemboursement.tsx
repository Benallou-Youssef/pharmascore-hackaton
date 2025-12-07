import { ArrowLeft, AlertTriangle, Calendar } from 'lucide-react';
import { useState } from 'react';
import cihLogo from 'figma:asset/f5aae62986fcfdf4eae36d4fd7016b7ee4dc674c.png';

interface ProgrammationRemboursementProps {
  onBack: () => void;
}

export function ProgrammationRemboursement({ onBack }: ProgrammationRemboursementProps) {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);

  const daysOfWeek = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  
  // Janvier 2025 - commence un Mercredi (index 3)
  const firstDayOfMonth = 3; // Mercredi
  const daysInMonth = 31;
  
  // Créer les jours vides au début
  const calendarDays = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push({ day: null, disabled: true });
  }
  
  // Ajouter tous les jours du mois
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push({ day, disabled: false });
  }

  // Calculer la date de remboursement (+90 jours)
  const getRepaymentDate = (selectedDay: number | null) => {
    if (!selectedDay) return null;
    
    const currentDate = new Date(2025, 0, selectedDay); // Janvier 2025
    const repaymentDate = new Date(currentDate);
    repaymentDate.setDate(repaymentDate.getDate() + 90);
    
    const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
    
    return {
      day: repaymentDate.getDate(),
      month: months[repaymentDate.getMonth()],
      year: repaymentDate.getFullYear(),
      formatted: `${repaymentDate.getDate()} ${months[repaymentDate.getMonth()]} ${repaymentDate.getFullYear()}`
    };
  };

  const repaymentDate = getRepaymentDate(selectedDate);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center justify-between max-w-md mx-auto mb-4">
          <button onClick={onBack} className="p-2">
            <ArrowLeft size={24} className="text-gray-700" />
          </button>
          <img src={cihLogo} alt="CIH Bank" className="h-8" />
          <div className="w-10"></div> {/* Spacer for centering */}
        </div>
        <div className="max-w-md mx-auto">
          <h1 className="text-xl text-gray-800">Programmation du Remboursement</h1>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-md mx-auto px-4 py-6">
        {/* Calendar Card */}
        <div className="bg-white border border-gray-200 rounded-3xl shadow-lg p-6 mb-6">
          <h2 className="text-center text-gray-800 mb-6">Janvier 2025</h2>
          
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

        {/* Selected Date Info */}
        {selectedDate && repaymentDate && (
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-3xl shadow-lg p-6 mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="text-orange-600" size={24} />
              <h3 className="text-gray-800">Dates programmées</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4">
                <p className="text-sm text-gray-500 mb-1">Date sélectionnée</p>
                <p className="text-xl text-gray-800">{selectedDate} Janvier 2025</p>
              </div>
              
              <div className="bg-white rounded-xl p-4 border-2 border-orange-300">
                <p className="text-sm text-gray-500 mb-1">Date de remboursement</p>
                <p className="text-xl text-orange-600">{repaymentDate.formatted}</p>
                <p className="text-xs text-gray-500 mt-1">(+90 jours)</p>
              </div>
            </div>
          </div>
        )}

        {/* Information Card */}
        <div className="bg-white border border-gray-200 rounded-3xl shadow-lg p-6">
          <h3 className="text-gray-800 mb-4">Informations importantes</h3>
          
          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center pb-3 border-b border-gray-200">
              <span className="text-sm text-gray-600">Taux d&apos;intérêt</span>
              <span className="text-gray-800">8%</span>
            </div>
            
            <div className="flex justify-between items-center pb-3 border-b border-gray-200">
              <span className="text-sm text-gray-600">Durée maximale</span>
              <span className="text-gray-800">3 mois</span>
            </div>
          </div>

          {/* Warning */}
          <div className="bg-orange-50 border-l-4 border-orange-400 rounded-lg p-4 flex gap-3 mb-6">
            <AlertTriangle className="text-orange-500 flex-shrink-0 mt-0.5" size={20} />
            <p className="text-sm text-gray-700">
              <span>Attention :</span> En cas de dépassement de la date de remboursement programmée, une pénalité sera appliquée sur le montant restant.
            </p>
          </div>

          {/* Validate Button */}
          <button 
            disabled={!selectedDate}
            className={`w-full py-4 rounded-xl shadow-lg transition-all ${
              selectedDate
                ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-xl'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            {selectedDate ? 'Valider le prélèvement' : 'Sélectionnez une date'}
          </button>
        </div>
      </div>
    </div>
  );
}