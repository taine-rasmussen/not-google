import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { useResultContext } from '../Contexts/ResultsContextProvider'
import { Loading } from './Loading'



export const Results = () => {

   const { results, isLoading, getResults, searchTerm } = useResultContext();
   const location = useLocation();

   useEffect(() => {
       getResults('/search/q=Wellington&num=40')
   }, []);

   if (isLoading) return <Loading />;



   switch(location.pathname){
      case '/search':
         return 'Search';
      case '/news':
         return 'News';
      case '/images':
         return 'Images';
      case '/video':
         return 'Video';
      default:
         return 'ERROR!';
   }
}
