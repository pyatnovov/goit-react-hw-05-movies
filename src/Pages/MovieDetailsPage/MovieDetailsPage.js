import { NavLink, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMoviesById } from 'services/Services';
import { useParams } from 'react-router-dom';
import img from 'img/picture-vector-icon-no-image-260nw-1732584341.webp';
const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [item, setItem] = useState([]);

  useEffect(() => {
    getMoviesById(movieId).then(item => {
      setItem(item);
    });
  }, [movieId]);

  return (
    <>
      {item && (
        <div>
          {item.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}
              alt={item.title}
            />
          ) : (
            <img src={img} alt="Not Found"></img>
          )}

          <h3>{item.title}</h3>
          <p>User Score: {item.popularity}</p>
          <div>
            <h3>Overview</h3>
            <p>{item.overview}</p>
          </div>
        </div>
      )}
      <hr />
      <div>
        <h2>Additional Information</h2>
        <NavLink to={`/movies/${movieId}/reviews`}>
          <p>Reviews</p>
        </NavLink>

        <NavLink to={`/movies/${movieId}/cast`}>
          <p>Cast</p>
        </NavLink>
        <hr />
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetailsPage;
