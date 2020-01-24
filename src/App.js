import React, { useState, useEffect, useCallback } from 'react';

import Filter from './components/Filter';
import InfoCard from './components/InfoCard';

const App = () => {
  const [citizens, setCitizens] = useState([]);
  const [searchCitizen, setSearchCitizen] = useState([]);

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json'
    )
      .then(rs => rs.json())
      .then(data => {
        setCitizens(data.Brastlewark);
        setSearchCitizen(data.Brastlewark);
      });
  }, []);

  const filterCitizenHandler = useCallback(
    text => {
      setSearchCitizen(citizens.filter(citizen => citizen.name.includes(text)));
    },
    [citizens]
  );

  return (
    <main>
      <h1 className="page-title">Brastlewark Citizens</h1>
      <Filter onSearch={filterCitizenHandler} />
      <div className="all-cards-container">
        {searchCitizen.slice(0, 50).map(citizen => (
          <InfoCard
            thumbnail={citizen.thumbnail}
            name={citizen.name}
            age={citizen.age}
            weight={citizen.weight}
            height={citizen.height}
            hair_color={citizen.hair_color}
            professions={citizen.professions.join(', ')}
            friends={citizen.professions.join(', ')}
            key={citizen.id}
          />
        ))}
      </div>
    </main>
  );
};

export default App;
