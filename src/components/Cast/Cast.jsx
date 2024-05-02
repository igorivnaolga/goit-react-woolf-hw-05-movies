import { getActorsMovies } from 'services/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  CastItem,
  CastList,
  InfoContainer,
  StyledCharacter,
  StyledInfo,
  StyledName,
} from './Cast.styled';
import { ErrorMessage, LoadingMessage } from 'pages/HomePage/HomePage.styled';
import { StyledInfoMsg } from 'components/Reviews/Reviews.styled';
import castplaceholder from 'services/castplaceholder.png';

const Cast = () => {
  const params = useParams();

  const [cast, setCast] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getCast() {
      try {
        setIsLoading(true);
        const fetchCast = await getActorsMovies(params.movieId);

        setCast(fetchCast.cast);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getCast();
  }, [params.movieId]);

  return (
    <>
      {error && (
        <ErrorMessage>
          Oops! Something went wrong! Please try reloading this page!
        </ErrorMessage>
      )}
      {isLoading && <LoadingMessage>Loading...</LoadingMessage>}
      {cast && cast.length > 0 && (
        <InfoContainer>
          <CastList>
            {cast.map(actor => (
              <CastItem key={actor.id}>
                {actor.profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                    alt={actor.name}
                  />
                ) : (
                  <img
                    src={castplaceholder}
                    style={{ width: '150px', height: '225px' }}
                    alt={actor.name}
                  />
                )}

                <StyledInfo>
                  <StyledName>{actor.name}</StyledName>
                  <StyledCharacter>
                    Character: {actor.character}
                  </StyledCharacter>
                </StyledInfo>
              </CastItem>
            ))}
          </CastList>
        </InfoContainer>
      )}
      {cast.length === 0 && (
        <StyledInfoMsg>
          We don't have any actors for this movie yet.
        </StyledInfoMsg>
      )}
    </>
  );
};
export default Cast;
