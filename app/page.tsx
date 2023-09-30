"use client"
import { getMovieRecommendations, searchMovies } from '@/services/api';
import dynamic from 'next/dynamic';

import React, { useEffect, useState } from "react";

const SearchBar = dynamic(() => import('./components/SearchBar'));
const MovieList = dynamic(() => import('./components/MovieList'));
const MovieRecommendation = dynamic(() => import('./components/MovieRecommendation'));

const page: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Array<{id: number; title: string; poster_path: string}>>([]);
  const [recommendations, setRecommendations] = useState<Array<{id: number; title: string}>>([]);

  useEffect(()=>{
    if(searchQuery){
      searchMovies(searchQuery)
      .then((results) => {
        setSearchResults(results);
      })
      .catch((error) => {
        console.error('Error fetching search results', error);
      })
    }
  }, [searchQuery])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  const handleGenerateRecommendations = (movieId: number) => {
    getMovieRecommendations(movieId)
    .then((recommendations)=> {
      setRecommendations(recommendations);
    })
    .catch((error)=>{
      console.error('Error Fetching Recommendations', error)
    })
  };

  return(
    <div>
      <h1>Movie Recommendation App</h1>
      <SearchBar onSearch={handleSearch}/>
      <div className='flex'>
        <div className='w-1/2'>
          <MovieList movies={searchResults} onGenerateRecommendations={handleGenerateRecommendations} />
        </div>
        <div className='w-1/2'>
          <MovieRecommendation recommendation={recommendations} />
        </div>
      </div>
    </div>
  )
}

export default page;