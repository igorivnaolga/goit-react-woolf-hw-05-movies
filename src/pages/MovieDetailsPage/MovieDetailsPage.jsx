import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getDetailsMovies } from 'components/services/api.js';

import {
  DetailsContainer,
  MovieImage,
  Overview,
  AdditionalInfo,
  MovieInfo,
} from './MovieDetailsPage.styled.js';
import {
  ErrorMessage,
  LoadingMessage,
} from 'pages/HomePage/HomePage.styled.js';

const MovieDetailsPage = () => {
  const params = useParams();

  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getDetails() {
      try {
        setIsLoading(true);
        const fetchDetails = await getDetailsMovies(params.movieId);
        setMovie(fetchDetails);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getDetails();
  }, [params.movieId]);

  return (
    <>
      {error && (
        <ErrorMessage>
          Oops! Something went wrong! Please try reloading this page!
        </ErrorMessage>
      )}
      {isLoading && <LoadingMessage>Loading...</LoadingMessage>}

      {movie && (
        <DetailsContainer>
          <MovieImage
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <MovieInfo>
            <h1>{movie.title}</h1>
            <p>User score: {movie.vote_average}%</p>
            <h2>Overview</h2>
            <Overview>{movie.overview}</Overview>
            <h2>Genres</h2>
          </MovieInfo>
        </DetailsContainer>
      )}
      <AdditionalInfo>
        <h3>Additional information</h3>
      </AdditionalInfo>
    </>
  );
};

export default MovieDetailsPage;
