import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastById } from 'services/Services';
import img from 'img/picture-vector-icon-no-image-260nw-1732584341.webp';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        getCastById(movieId).then(response => {
          return setCast(response.cast);
        });
      } catch (error) {
        alert(error);
      }
    };
    fetchCast();
  }, [movieId]);
  return (
    <>
      <ul>
        {cast.map(castItem => {
          return (
            <li key={castItem.id}>
              {castItem.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w300${castItem.profile_path}`}
                  alt={`${castItem.name} portrait`}
                />
              ) : (
                <div>
                  <img src={img} alt="Not Found" />
                </div>
              )}
              <p>Name: {castItem.name}</p>
              <p>Character: {castItem.character}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default Cast;
