import {
  useState,
  useEffect,
  useCallback,
  useContext,
  createContext
} from 'react';

import { getCitizens } from './services/citizens';

export const CitizensContext = createContext([]);

export function useCitizens() {
  const [citizens, setCitizens] = useState([]);

  useEffect(() => {
    getCitizens().then(citizens => setCitizens(citizens));
  }, []);

  return citizens;
}

export const useContextCitizens = () => useContext(CitizensContext);

export function useFilteredCitizens() {
  const citizens = useContextCitizens();

  const [searchedCitizen, setSearchedCitizen] = useState([]);

  useEffect(() => setSearchedCitizen(citizens), [citizens]);

  const filterCitizen = useCallback(
    text => {
      setSearchedCitizen(
        citizens.filter(citizen =>
          citizen.name.toLowerCase().includes(text.toLowerCase())
        )
      );
    },
    [citizens]
  );

  return [searchedCitizen, filterCitizen];
}
