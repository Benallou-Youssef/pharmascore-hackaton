import { useState } from 'react';
import { MainInterface } from './components/MainInterface';
import { CihCare } from './components/CihCare';
import { PharmaciesPartenaires } from './components/PharmaciesPartenaires';
import { ProgrammationRemboursement } from './components/ProgrammationRemboursement';
import { ScoringSante } from './components/ScoringSante';
import { PlafondCihCare } from './components/PlafondCihCare';
import { AvantagesCarte } from './components/AvantagesCarte';

export type PageType = 'home' | 'cihcare' | 'pharmacies' | 'remboursement' | 'scoring' | 'plafond' | 'avantages';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  return (
    <div className="min-h-screen bg-gray-50">
      {currentPage === 'home' && (
        <MainInterface onNavigate={setCurrentPage} />
      )}
      {currentPage === 'cihcare' && (
        <CihCare onBack={() => setCurrentPage('home')} onNavigate={setCurrentPage} />
      )}
      {currentPage === 'pharmacies' && (
        <PharmaciesPartenaires onBack={() => setCurrentPage('cihcare')} />
      )}
      {currentPage === 'remboursement' && (
        <ProgrammationRemboursement onBack={() => setCurrentPage('cihcare')} />
      )}
      {currentPage === 'scoring' && (
        <ScoringSante onBack={() => setCurrentPage('cihcare')} />
      )}
      {currentPage === 'plafond' && (
        <PlafondCihCare onBack={() => setCurrentPage('cihcare')} />
      )}
      {currentPage === 'avantages' && (
        <AvantagesCarte onBack={() => setCurrentPage('cihcare')} />
      )}
    </div>
  );
}
