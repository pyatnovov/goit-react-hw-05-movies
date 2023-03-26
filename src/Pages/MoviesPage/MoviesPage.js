import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getMoviesBySearchQuery } from 'services/Services';
import MovieInfo from 'components/MovieInfo/MovieInfo';
const MoviesPage = () => {
  const [items, setItems] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search') ?? '';

  const handleChange = e => {
    const nextParams = e.target.value.toLowerCase();
    if (nextParams === '') {
      return setSearchParams({});
    }
    setSearchParams({ search: nextParams });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (search.trim() === '') {
      alert('Введіть назву фільму');
      return;
    }
    setSearchParams('');
  };

  useEffect(() => {
    if (search) {
      async function fetchData() {
        const fetch = await getMoviesBySearchQuery(search).then(response => {
          return response.results;
        });

        setItems(fetch);
      }
      fetchData();
    }
  }, [search]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" value={search} onChange={handleChange} />
        </label>
      </form>
      <MovieInfo items={items} />
    </div>
  );
};

export default MoviesPage;
