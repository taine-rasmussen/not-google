import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { useResultContext } from '../Contexts/ResultsContextProvider'
import { Loading } from './Loading'



export const Results = () => {

   const { results, isLoading, getResults, searchTerm } = useResultContext();
   const location = useLocation();

   useEffect(() => {
       getResults('/search/q=Calvin and Hobbes&num=40')
   }, []);

   if (isLoading) return <Loading />;



   switch(location.pathname){
      case '/search':
         return (
                  <div className="sm:px-56 flex flex-wrap justify-between space-y-6">
                     {results?.results?.map(({ link, title }, index) => (
                        <div key={index} className="md:w-2/5 w-full">
                        <a href={link} target="_blank" rel="noreferrer">
                           <p className="text-sm">{link.length > 30 ? link.substring(0, 30) : link}</p>
                           <p className="text-lg hover:underline dark:text-blue-300 text-blue-700  ">{title}</p>
                        </a>
                        </div>
                     ))}
                  </div>
                );
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
