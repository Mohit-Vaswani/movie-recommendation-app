// services/api.ts

import axios from 'axios';
import { MOVIE_KEY } from '@/config/movieApi';

const API_KEY = MOVIE_KEY; // Access the API key from environment variables
const BASE_URL = 'https://api.themoviedb.org/3';

if (!API_KEY) {
  throw new Error('TMDB_API_KEY is not defined in your environment variables.');
}

// Function to fetch a list of movies by search query
export const searchMovies = async (query: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query,
      },
    });

    return response.data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

// Function to fetch movie details by ID
export const getMovieDetails = async (movieId: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
      params: {
        api_key: API_KEY,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};

// Function to fetch movie recommendations by movie ID
export const getMovieRecommendations = async (movieId: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/recommendations`, {
      params: {
        api_key: API_KEY,
      },
    });

    return response.data.results;
  } catch (error) {
    console.error('Error fetching movie recommendations:', error);
    throw error;
  }
};
