import React, { useState, createContext } from 'react';
import Search from './Search';
import './Header.css';

export const ResultsContext = createContext([]);

function Header({ CartItem }) {
  const [results, setResults] = useState([]);

  const handleSearch = (query) => {
    fetch(`http://localhost:3002/prod/Pd?query=${query}`)
      .then((response) => response.json())
      .then((data) => {
        setResults(data);
        sessionStorage.setItem('searchResults', JSON.stringify(data[0])); // Save results to sessionStorage
        window.location.href='/results';
      })
      .catch((error) => {
        console.error(error);
      });
  };
  console.log(results);

  return (
    <ResultsContext.Provider value={results}>
      <Search CartItem={CartItem} onSearch={handleSearch} />
    </ResultsContext.Provider>
  );
}

export default Header;
