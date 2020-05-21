import { useState, useEffect, useCallback, useContext, createContext } from 'react';

import { getCitizens } from './services/citizens';

export const CitizensContext = createContext([]);

export function useCitizens() {
  const [citizens, setCitizens] = useState([]);

  useEffect(() => {
    getCitizens().then((data) => setCitizens(data));
  }, []);

  return citizens;
}

export const useContextCitizens = () => useContext(CitizensContext);

export function useFilteredCitizens() {
  const citizens = useContextCitizens();

  const [searchedCitizen, setSearchedCitizen] = useState([]);

  useEffect(() => setSearchedCitizen(citizens), [citizens]);

  const filterCitizen = useCallback(
    (text) => {
      const name = text.trim();
      if (name !== '') {
        setSearchedCitizen(
          citizens.filter((citizen) => citizen.name.toLowerCase().includes(name.toLowerCase()))
        );
      } else {
        setSearchedCitizen(citizens);
      }
    },
    [citizens]
  );

  return [searchedCitizen, filterCitizen];
}
