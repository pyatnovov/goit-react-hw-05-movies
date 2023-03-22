import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getMoviesBySearchQuery } from 'services/Services';
import MovieInfo from 'components/MovieInfo/MovieInfo';
const MoviesPage = () => {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');
  const location = useLocation();

  const handleChange = e => {
    setQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      alert('Введіть назву фільму');
      return;
    }
    setQuery('');
  };
  const onSubmit = () => {
    async function fetchData() {
      const fetch = await getMoviesBySearchQuery(query).then(response => {
        return response.results;
      });

      setItems(fetch);
    }
    fetchData();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" value={query} onChange={handleChange} />
        </label>
        <button
          type="submit"
          style={{ width: 70, height: 30 }}
          onClick={onSubmit}
        >
          Search
        </button>
      </form>
      <MovieInfo items={items} location={location} />
    </div>
  );
};

export default MoviesPage;
