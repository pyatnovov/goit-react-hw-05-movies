import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getPopularMovies } from 'services/Services';
import MovieInfo from 'components/MovieInfo/MovieInfo';

const HomePage = () => {
  const [items, setItems] = useState([]);
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    getPopularMovies().then(response => {
      setItems(response.results);
    });
  }, []);

  return (
    <>
      <MovieInfo items={items} location={location} />
    </>
  );
};
export default HomePage;
