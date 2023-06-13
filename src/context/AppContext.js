import React, { createContext, useState } from "react";
import data from "../pages/PricesPage/PricesPage";

const AppContext = createContext();

function ContextProvider({ children }) {
  const values = {
    favorite,
    setFavorite,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export { AppContext, ContextProvider };
