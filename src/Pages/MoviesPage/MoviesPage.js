import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Searchbar from 'components/Searchbar/Searchbar';
import { getMoviesBySearchQuery } from 'services/Services';

const MoviesPage = () => {
  const [, setQuery] = useState('');
  const [, setItems] = useState([]);
  const location = useLocation();

  const query = new URLSearchParams(location.search).get('query') ?? '';

  useEffect(() => {
    if (!query) {
      return;
    }
    getMoviesBySearchQuery(query).then(res => {
      setItems(res.results);
    });
  }, [query]);
  const onClick = res => {
    setQuery(res);
  };

  return <Searchbar onSubmit={onClick}></Searchbar>;
};
export default MoviesPage;
