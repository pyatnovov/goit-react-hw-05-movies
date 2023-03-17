import { useState, useEffect } from 'react';
import { getPopularMovies } from 'services/Services';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getPopularMovies().then(response => {
      setItems(response.results);
    });
  }, []);

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <NavLink>{item.title}</NavLink>
        </li>
      ))}
    </ul>
  );
};
export default HomePage;
