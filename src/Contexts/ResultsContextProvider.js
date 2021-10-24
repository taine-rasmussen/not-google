import React, { createContext, useContext, useState } from 'react';

const ResultsContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // GET api data, converts to json and updates results hook with new data
  const getResults = async (url) => {
    setIsLoading(true);
    const res = await fetch(`${baseUrl}${url}`, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'google-search3.p.rapidapi.com',
        'x-rapidapi-key': '662aa16bb4msh07d0ce307aa996bp1ada60jsn5c33a29c5e52'
      },
    });
    const data = await res.json();
    setResults(data)
    setIsLoading(false)
  };

  return (
    <ResultsContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>
      {children}
    </ResultsContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultsContext);

