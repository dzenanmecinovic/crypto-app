import React, { createContext, useState } from "react";

const AppContext = createContext();

function ContextProvider({ children }) {
  const [data, setData] = useState([]);

  const values = {
    data,
    setData,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export { AppContext, ContextProvider };
