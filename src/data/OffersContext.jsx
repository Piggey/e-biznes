import React, { createContext, useContext, useState } from 'react';
import { offers as offersData } from './offers';

const OffersContext = createContext();

export const useOffers = () => {
  return useContext(OffersContext);
};

export const OffersProvider = ({ children }) => {
  const [offers, setOffers] = useState(offersData);

  return (
    <OffersContext.Provider value={{ offers, setOffers }}>
      {children}
    </OffersContext.Provider>
  );
};
