import React, { createContext, useState, useEffect } from "react";

const AppContext = createContext();

function ContextProvider({ children }) {
  const [favorites] = useState([]);

  const [data, setData] = useState({
    coins: null,
    favoriteCoins: [],
  });

  const addFavoriteCoin = (coinId) => {
    setData((prevData) => {
      const updatedFavoriteCoins = Array.isArray(prevData.favoriteCoins)
        ? [...prevData.favoriteCoins, coinId]
        : [coinId];

      return {
        ...prevData,
        favoriteCoins: updatedFavoriteCoins,
      };
    });
  };

  const values = {
    favorites,
  };

  return (
    <AppContext.Provider value={{ data, addFavoriteCoin }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, ContextProvider };
