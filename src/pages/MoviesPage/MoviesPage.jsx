import Searchbar from 'components/Searchbar/Searchbar';
import { searchMovies } from 'components/services/api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { StyleErrorMsg, StyledNotFound } from './MoviesPage.styled';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [params, setParams] = useSearchParams();

  const query = params.get('query');
  useEffect(() => {
    if (!query) return;

    const handleSearch = async () => {
      try {
        setIsLoading(true);
        const fetchMovies = await searchMovies(query);
        setMovies(fetchMovies.results);
        if (fetchMovies.results.length === 0) {
          setError('notFound');
        } else {
          setError(null);
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    handleSearch();
  }, [query]);

  const handleSubmit = query => {
    setParams({ query });
  };
  return (
    <div>
      <Searchbar onSubmit={handleSubmit} />
      <Loader isLoading={isLoading} />

      {error && error !== 'notFound' && (
        <StyleErrorMsg>
          Oops! Something went wrong. Please try again later.
        </StyleErrorMsg>
      )}
      {movies.length > 0 && <MoviesList films={movies} />}
      {error === 'notFound' && (
        <StyledNotFound>Movie "{query}" not found.</StyledNotFound>
      )}
    </div>
  );
};

export default MoviesPage;
