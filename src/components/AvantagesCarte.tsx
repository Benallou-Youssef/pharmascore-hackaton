import { ArrowLeft, CreditCard, Percent, Clock, Shield, Smartphone, Heart, Gift } from 'lucide-react';
import cihLogo from 'figma:asset/f5aae62986fcfdf4eae36d4fd7016b7ee4dc674c.png';

interface AvantagesCarteProps {
  onBack: () => void;
}

export function AvantagesCarte({ onBack }: AvantagesCarteProps) {
  const avantages = [
    {
      icon: CreditCard,
      title: 'Crédit santé instantané',
      description: 'Accédez à un crédit immédiat pour vos achats en pharmacie, sans justificatif',
      color: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: Percent,
      title: 'Remboursement flexible',
      description: 'Choisissez votre date de remboursement jusqu\'à 3 mois maximum',
      color: 'bg-orange-50',
      iconColor: 'text-orange-600'
    },
    {
      icon: Clock,
      title: 'Paiement simplifié',
      description: 'Payez en pharmacie en quelques secondes avec votre carte CIH Care',
      color: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      icon: Shield,
      title: 'Sécurisé et fiable',
      description: 'Vos transactions sont 100% sécurisées et garanties par CIH Bank',
      color: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      icon: Smartphone,
      title: 'Gestion mobile',
      description: 'Gérez votre plafond, vos remboursements et consultez l\'historique depuis l\'application',
      color: 'bg-pink-50',
      iconColor: 'text-pink-600'
    },
    {
      icon: Heart,
      title: 'Score santé IA',
      description: 'Votre comportement financier influence positivement votre plafond disponible',
      color: 'bg-red-50',
      iconColor: 'text-red-600'
    },
    {
      icon: Gift,
      title: 'Réseau partenaire étendu',
      description: 'Accédez à plus de 500 pharmacies partenaires partout au Maroc',
      color: 'bg-indigo-50',
      iconColor: 'text-indigo-600'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 p-4 shadow-sm">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <button onClick={onBack} className="p-2">
            <ArrowLeft size={24} className="text-gray-700" />
          </button>
          <h1 className="text-gray-800">Avantages Carte</h1>
          <img src={cihLogo} alt="CIH Bank" className="h-6" />
        </div>
      </header>

      {/* Content */}
      <div className="max-w-md mx-auto px-4 py-6">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 rounded-2xl p-6 text-white mb-6 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white/20 p-3 rounded-full">
              <CreditCard size={32} className="text-white" />
            </div>
            <div>
              <h2 className="text-2xl">CIH Care</h2>
              <p className="text-white/90 text-sm">Votre carte santé intelligente</p>
            </div>
          </div>
          <p className="text-white/90 text-sm">
            Profitez d&apos;un crédit santé flexible et sécurisé pour tous vos achats en pharmacie. Une solution moderne adaptée à vos besoins.
          </p>
        </div>

        {/* Title */}
        <h3 className="text-gray-800 mb-4">Pourquoi choisir CIH Care ?</h3>

        {/* Advantages List */}
        <div className="space-y-4 mb-6">
          {avantages.map((avantage, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex gap-4">
                <div className={`${avantage.color} p-3 rounded-lg flex-shrink-0 h-fit`}>
                  <avantage.icon size={24} className={avantage.iconColor} />
                </div>
                <div className="flex-1">
                  <h4 className="text-gray-800 mb-1">{avantage.title}</h4>
                  <p className="text-sm text-gray-600">{avantage.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Footer */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            CIH Care est un service proposé par CIH Bank et réservé aux clients détenteurs d&apos;un compte bancaire actif.
          </p>
        </div>
      </div>
    </div>
  );
}