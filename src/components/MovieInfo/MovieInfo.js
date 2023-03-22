import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const MovieInfo = ({ items, location }) => {
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
  location: PropTypes.object.isRequired,
};
export default MovieInfo;
