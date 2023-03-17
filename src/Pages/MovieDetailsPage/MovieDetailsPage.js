import { Link } from 'react-router-dom';
import Cast from 'Pages/Cast/Cast';
import Reviews from 'Pages/Reviews/Reviews';
const MovieDetailsPage = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="cast"></Link>
        </li>
        <li>
          <Link to="reviews"></Link>
        </li>
      </ul>
    </>
  );
};
export default MovieDetailsPage;
