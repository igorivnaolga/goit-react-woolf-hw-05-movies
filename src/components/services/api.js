import axios from 'axios';

const API_KEY = '65247d6ebe9b3b093e233fbd2966e3e3';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrendingMovies = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data;
};

export const searchMovies = async query => {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${query}`
  );
  return response.data;
};

export const getDetailsMovies = async movieId => {
  const response = await axios.get(`movie/${movieId}?api_key=${API_KEY}`);
  return response.data;
};

export const getActorsMovies = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return response.data;
};

export const getReviewsMovies = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return response.data;
};
