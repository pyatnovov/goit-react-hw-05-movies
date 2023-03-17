import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import AppBar from 'components/AppBar/AppBar';
import Container from 'components/Container/Container';

const HomePage = lazy(() => import('Pages/HomePage/HomePage'));
const MovieDetailsPage = lazy(() =>
  import('Pages/MovieDetailsPage/MovieDetailsPage')
);
const MoviesPage = lazy(() => import('Pages/MoviesPage/MoviesPage'));
const NotFound = lazy(() => import('Pages/NotFound/NotFound'));

const App = () => {
  return (
    <section>
      <Container>
        <AppBar />
        <Suspense fallback={<div>Loaging</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Container>
    </section>
  );
};
export default App;
