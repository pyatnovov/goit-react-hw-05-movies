import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Form } from './Searchbar.styled';
const Searchbar = ({ onSubmit }) => {
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

    onSubmit(query);
  };

  return (
    <header>
      <Link to={location.state.from}></Link>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={query}
          onChange={handleChange}
        />
        <button type="submit" onClick={onSubmit}>
          Search
        </button>
      </Form>
    </header>
  );
};
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Searchbar;
