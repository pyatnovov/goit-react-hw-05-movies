import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsById } from 'services/Services';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [, setError] = useState(null);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const res = await getReviewsById(movieId);
        setReviews(res.results);
      } catch (error) {
        setError(error);
        setReviews([]);
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <>
      <ul>
        {reviews.map(review => {
          return (
            <li key={review.id}>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Reviews;
