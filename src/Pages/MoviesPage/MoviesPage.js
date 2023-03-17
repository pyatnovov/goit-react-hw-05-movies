import axios from 'axios';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const MoviesPage = () => {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');

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
      const fetch = await axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=09994a796f4e1a9c14a0723469809976&language=en-US&query=${query}&page=1&include_adult=false`
        )
        .then(resp => resp.data.results);
      setItems(fetch);
    }
    fetchData();
  };
  // useEffect(() => {
  //   getPopularMovies().then(response => {
  //     setItems(response.results);
  //   });
  // }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" value={query} onChange={handleChange} />
        </label>
        <button type="submit" onClick={onSubmit}>
          Search
        </button>
      </form>
      {items.length !== 0 && (
        <ul>
          {items.map(item => {
            return (
              <NavLink to="/movies">
                <li key={item.id}>{item.title}</li>
              </NavLink>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default MoviesPage;
