import { useState, useEffect } from 'react';
import { getPopularMovies } from 'services/Services';
import MovieInfo from 'components/MovieInfo/MovieInfo';

const HomePage = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getPopularMovies().then(response => {
      setItems(response.results);
    });
  }, []);

  return (
    <>
      <MovieInfo items={items} />
    </>
  );
};
export default HomePage;
