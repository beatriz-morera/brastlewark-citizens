import { useState, useEffect, useCallback } from 'react';

export function useData() {
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

  const filterCitizen = useCallback(
    text => {
      setSearchCitizen(
        citizens.filter(citizen =>
          citizen.name.toLowerCase().includes(text.toLowerCase())
        )
      );
    },
    [citizens]
  );
  return { searchCitizen, filterCitizen };
}
