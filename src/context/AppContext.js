import React, { createContext, useState } from "react";

const AppContext = createContext();

function ContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [favCoins, setFavCoins] = useState([]);

  const values = {
    data,
    setData,
    favCoins,
    setFavCoins,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export { AppContext, ContextProvider };
