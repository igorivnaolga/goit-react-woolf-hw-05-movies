import { useLocation } from 'react-router-dom';
import {
  MoviesListContainer,
  MovieItem,
  MovieLink,
  MovieImage,
  MovieTitle,
} from './MoviesList.styled';

const MoviesList = ({ films }) => {
  const location = useLocation();
  console.log(films);
  return (
    <MoviesListContainer>
      {films.map(film => (
        <MovieItem key={film.id}>
          <MovieLink to={`/movies/${film.id}`} state={{ from: location }}>
            <MovieImage
              src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
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
