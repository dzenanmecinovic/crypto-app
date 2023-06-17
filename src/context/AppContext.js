import React, { createContext, useState } from "react";

const AppContext = createContext();

function ContextProvider({ children }) {
  const [favorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const values = {
    favorites,
    searchTerm,
    handleChange,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export { AppContext, ContextProvider };
