import { useLocation } from 'react-router-dom';
import {
  MoviesListContainer,
  MovieItem,
  MovieLink,
  MovieImage,
  MovieTitle,
} from './MoviesList.styled';

import movieplaceholder from 'services/movieplaceholder.png';

const MoviesList = ({ films }) => {
  const location = useLocation();
  return (
    <MoviesListContainer>
      {films.map(film => (
        <MovieItem key={film.id}>
          <MovieLink to={`/movies/${film.id}`} state={{ from: location }}>
            <MovieImage
              src={
                film.poster_path
                  ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
                  : movieplaceholder
              }
              alt={film.title}
            />
            <MovieTitle>{film.title}</MovieTitle>
          </MovieLink>
        </MovieItem>
      ))}
    </MoviesListContainer>
  );
};

export default MoviesList;
