import React, { useState } from 'react';
import civilianResearchData from './CivilianResearch';
import combatResearchData from './CombatResearch';
import technologyResearchData from './TechnologyResearch';
import DataTable from './DataTable';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('Civilian');

  // Function to determine which data to display
  const getActiveData = () => {
    switch (activeTab) {
      case 'Civilian':
        return civilianResearchData;
      case 'Combat':
        return combatResearchData;
      case 'Technology':
        return technologyResearchData;
      default:
        return civilianResearchData;
    }
  };

  return (
    <div>
      <div class="categories">
        <button onClick={() => setActiveTab('Civilian')}>Civilian</button>
        <button onClick={() => setActiveTab('Combat')}>Combat</button>
        <button onClick={() => setActiveTab('Technology')}>Technology</button>
      </div>
      <DataTable data={getActiveData()} />
    </div>
  );
};

export default App;