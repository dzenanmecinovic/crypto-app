import React, { createContext, useState } from "react";

const AppContext = createContext();

function ContextProvider({ children }) {

    const [favorite, setFavorite]=useState(false);
    
    const toggleFavorite= (UUID) => {
        if(data.filter(coin) => coin.UUID === UUID) {
            setFavorite(true);
        } else {
            setFavorite(false);
        }
    }
  const values = {
    favorite,
    setFavorite,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export { AppContext, ContextProvider };
