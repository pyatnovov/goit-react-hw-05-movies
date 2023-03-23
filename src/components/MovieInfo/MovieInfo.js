import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const MovieInfo = ({ items }) => {
  const location = useLocation();
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Link to={`/movies/${item.id}`} state={{ from: location }}>
            {item.title}
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MovieInfo.propTypes = {
  items: PropTypes.array.isRequired,
};
export default MovieInfo;
