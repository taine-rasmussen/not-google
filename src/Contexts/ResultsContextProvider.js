import React, { createContext, useContext, useState } from 'react';
 import APIKEY from '../api'

const ResultsContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1'

export const ResultsContextProvider = ({ children }) => {
   const [results, setResults] = useState([])
   const [isLoading, setIsLoading] = useState(false)
   const [searchTerm, setSearchTerm] = useState('')


   // Gets data and updates results hook with json data
   const getResults = async (type) => {
      setIsLoading(true);
      const response = await fetch(`${baseUrl}${type}`,{
         method: 'GET',
         headers: {
            'x-user-agent': 'desktop',
            'x-rapidapi-host': 'google-search3.p.rapidapi.com',
            'x-rapidapi-key': APIKEY
         }
      })
      const data = await response.json();
      setResults(data)
      setIsLoading(false)
   }
}

