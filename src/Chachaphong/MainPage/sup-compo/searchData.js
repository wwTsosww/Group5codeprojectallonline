import React, { useState, useEffect, createContext } from "react";
//ท็อป
export const SearchData = createContext({
  results: [],
  handleSearch: ()=>{} 
});

export const SearchProvider = ({ children }) => {
  const [results, setResults] = useState([]);

  const handleSearch = (query) => {
    fetch(`http://localhost:3002/prod/Pd?query=${query}`)
      .then((response) => response.json())
      .then((data) => {
        setResults(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <SearchData.Provider
      value={{
        results,
        handleSearch,
      }}
    >
      {children}
    </SearchData.Provider>
  );
};
