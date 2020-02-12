import React from 'react';
import { useCitizens, CitizensContext } from '../hooks';

const UsersProvider = ({ children }) => {
  const citizens = useCitizens();
  return (
    <CitizensContext.Provider value={citizens}>
      {children}
    </CitizensContext.Provider>
  );
};

export default UsersProvider;
