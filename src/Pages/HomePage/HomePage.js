import { getPopularMovies } from 'services/Services';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from 'components/Container/Container';
const HomePage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getPopularMovies().then(response => {
      setItems(response.results);
    });
  }, []);
  return (
    <Container>
      <ul>
        {items.map(item => {
          return (
            <li key={item.id}>
              <Link>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};
export default HomePage;
