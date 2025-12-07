import { ArrowLeft, Search, MapPin, Navigation } from 'lucide-react';
import { useState } from 'react';
import cihLogo from 'figma:asset/f5aae62986fcfdf4eae36d4fd7016b7ee4dc674c.png';

interface PharmaciesPartenairesProps {
  onBack: () => void;
}

export function PharmaciesPartenaires({ onBack }: PharmaciesPartenairesProps) {
  const [selectedPharmacy, setSelectedPharmacy] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const allPharmacies = [
    { name: 'Pharmacie Agdal', distance: '0.3 km', address: 'Adresse de Grabate, Rabat - de Ouverto', x: 35, y: 45 },
    { name: 'Pharmacie Ibn Sina', distance: '0.7 km', address: '18 Lira Agdal - Ibn Sina Ouverto', x: 55, y: 30 },
    { name: 'Pharmacie Centrale', distance: '1.1 km', address: 'Place de Ville Centrale, 123 T...', x: 45, y: 65 },
    { name: 'Pharmacie Hassan', distance: '1.4 km', address: 'Avenue Hassan II, Rabat', x: 25, y: 55 },
    { name: 'Pharmacie Souissi', distance: '1.8 km', address: 'Quartier Souissi, Rabat', x: 70, y: 50 },
  ];

  // Filter pharmacies based on search query
  const filteredPharmacies = allPharmacies.filter(pharmacy => 
    pharmacy.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    pharmacy.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b p-4 shadow-sm">
        <div className="flex items-center gap-4 max-w-md mx-auto">
          <button onClick={onBack} className="p-2">
            <ArrowLeft size={24} className="text-gray-700" />
          </button>
          <h1 className="text-gray-800">Pharmacies Partenaires</h1>
          <img src={cihLogo} alt="CIH Bank" className="h-6 ml-auto" />
        </div>
      </header>

      <div className="max-w-md mx-auto">
        {/* Search Bar */}
        <div className="p-4 bg-white border-b">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Rechercher une pharmacie..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Custom Map */}
        <div className="relative h-80 bg-gradient-to-br from-green-50 to-blue-50 overflow-hidden">
          {/* Map Grid Background */}
          <svg className="absolute inset-0 w-full h-full opacity-20">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#94a3b8" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          {/* Streets - decorative */}
          <svg className="absolute inset-0 w-full h-full">
            <line x1="0" y1="40%" x2="100%" y2="40%" stroke="#cbd5e1" strokeWidth="3" />
            <line x1="0" y1="65%" x2="100%" y2="65%" stroke="#cbd5e1" strokeWidth="3" />
            <line x1="30%" y1="0" x2="30%" y2="100%" stroke="#cbd5e1" strokeWidth="3" />
            <line x1="60%" y1="0" x2="60%" y2="100%" stroke="#cbd5e1" strokeWidth="3" />
            
            {/* Building blocks */}
            <rect x="10%" y="10%" width="15%" height="20%" fill="#e2e8f0" opacity="0.6" rx="2" />
            <rect x="35%" y="15%" width="20%" height="15%" fill="#e2e8f0" opacity="0.6" rx="2" />
            <rect x="65%" y="10%" width="25%" height="25%" fill="#e2e8f0" opacity="0.6" rx="2" />
            <rect x="5%" y="50%" width="20%" height="30%" fill="#e2e8f0" opacity="0.6" rx="2" />
            <rect x="40%" y="75%" width="15%" height="20%" fill="#e2e8f0" opacity="0.6" rx="2" />
            <rect x="70%" y="70%" width="20%" height="25%" fill="#e2e8f0" opacity="0.6" rx="2" />
          </svg>

          {/* Pharmacy Markers - Only show filtered pharmacies */}
          {filteredPharmacies.map((pharmacy, index) => {
            const originalIndex = allPharmacies.indexOf(pharmacy);
            return (
              <button
                key={originalIndex}
                onClick={() => setSelectedPharmacy(originalIndex)}
                className="absolute transform -translate-x-1/2 -translate-y-full transition-all hover:scale-110"
                style={{ left: `${pharmacy.x}%`, top: `${pharmacy.y}%` }}
              >
                <div className={`relative ${selectedPharmacy === originalIndex ? 'scale-125' : ''}`}>
                  <div className="bg-red-500 w-8 h-8 rounded-full border-3 border-white shadow-lg flex items-center justify-center">
                    <MapPin className="text-white" size={18} fill="white" />
                  </div>
                  {selectedPharmacy === originalIndex && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white px-3 py-1 rounded shadow-lg whitespace-nowrap text-sm">
                      {pharmacy.name}
                    </div>
                  )}
                </div>
              </button>
            );
          })}

          {/* User Location Indicator */}
          <div 
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: '50%', top: '50%' }}
          >
            <div className="relative">
              <div className="w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-lg"></div>
              <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-75"></div>
            </div>
          </div>
          
          {/* User Location Button */}
          <button className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50">
            <Navigation size={20} className="text-blue-600" />
          </button>
        </div>

        {/* Pharmacy List */}
        <div className="bg-white">
          {filteredPharmacies.length > 0 ? (
            filteredPharmacies.map((pharmacy, index) => {
              const originalIndex = allPharmacies.indexOf(pharmacy);
              return (
                <div 
                  key={originalIndex} 
                  className={`flex items-start gap-3 p-4 border-b last:border-b-0 ${
                    selectedPharmacy === originalIndex ? 'bg-blue-50' : ''
                  }`}
                  onClick={() => setSelectedPharmacy(originalIndex)}
                >
                  <div className="bg-red-100 p-2 rounded-full flex-shrink-0">
                    <MapPin className="text-red-600" size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-gray-800">
                      {pharmacy.name} <span className="text-sm text-gray-500">({pharmacy.distance})</span>
                    </h3>
                    <p className="text-sm text-gray-600 truncate">{pharmacy.address}</p>
                  </div>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex-shrink-0">
                    Y aller
                  </button>
                </div>
              );
            })
          ) : (
            <div className="p-8 text-center">
              <p className="text-gray-500">Aucune pharmacie trouvée</p>
              <p className="text-sm text-gray-400 mt-2">Essayez une autre recherche</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
