import { getReviewsMovies } from 'services/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  ReviewList,
  StyledAuthor,
  StyledContent,
  StyledInfoMsg,
} from './Reviews.styled';
import { ErrorMessage, LoadingMessage } from 'pages/HomePage/HomePage.styled';

const Reviews = () => {
  const params = useParams();

  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getReviews() {
      try {
        setIsLoading(true);
        const fetchReviews = await getReviewsMovies(params.movieId);
        setReviews(fetchReviews.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    getReviews();
  }, [params.movieId]);

  return (
    <>
      {error && (
        <ErrorMessage>
          Oops! Something went wrong! Please try reloading this page!
        </ErrorMessage>
      )}
      {isLoading && <LoadingMessage>Loading...</LoadingMessage>}
      {reviews && reviews.length > 0 && (
        <div>
          <ReviewList>
            {reviews.map(review => (
              <li key={review.id}>
                <StyledAuthor>{review.author}</StyledAuthor>
                <StyledContent>{review.content}</StyledContent>
              </li>
            ))}
          </ReviewList>
        </div>
      )}
      {reviews.length === 0 && (
        <StyledInfoMsg>
          We don't have any reviews for this movie yet.
        </StyledInfoMsg>
      )}
    </>
  );
};
export default Reviews;
