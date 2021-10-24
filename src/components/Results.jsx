import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { useResultContext } from '../Contexts/ResultsContextProvider'
import { Loading } from './Loading'



export const Results = () => {

   const { results, loading, getResults, searchTerm } = useResultContext();
   const location = useLocation();

   if (isLoading) return <Loading />;

   return (
      <div className="flex justify-center items-center">
         <Loader type='puff' color='#00BFFF' height= {550} width={80} />
      </div>
   )
}
