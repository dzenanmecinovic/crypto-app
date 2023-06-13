import React, { createContext, useState } from "react";

const AppContext = createContext();

function ContextProvider({ children }) {
  const [fav, setFav] = useState(false);
  const [favCoins] = useState([]);
  const values = {
    fav,
    setFav,
    favCoins,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export { AppContext, ContextProvider };
