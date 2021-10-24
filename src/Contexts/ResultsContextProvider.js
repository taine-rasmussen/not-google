import React, { createContext, useContext, useState } from 'react';
 

const ResultsContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1'

export const ResultsContextProvider = ({ children }) => {
   const [results, setResults] = useState([])
}