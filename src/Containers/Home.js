import React from 'react';

import InfoCard from '../components/InfoCard';

import { useData } from '../hooks';

const Home = () => {
  const { searchCitizen } = useData();

  return (
    <section className="all-cards-container">
      {searchCitizen.slice(0, 28).map(citizen => (
        <InfoCard key={citizen.id} {...citizen} />
      ))}
    </section>
  );
};

export default Home;
