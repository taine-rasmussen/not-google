import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { useResultContext } from '../Contexts/ResultsContextProvider';
import { Loading } from './Loading'



export const Results = () => {

   const {getResults, results, searchTerm, setSearchTerm, isLoading} = useResultContext();
   const location = useLocation();

   if (isLoading) return <Loading />;


   return (
      <div>
         Results
      </div>
   )
}
