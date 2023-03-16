import { useState } from 'react';
const MoviesPage = ({ handleSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      alert('Введіть пошуковий запит');
    }
    handleSearch(query);
    setQuery('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input value={query} onChange={handleChange} />
        </label>
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default MoviesPage;
