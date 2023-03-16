import { Routes, Route } from 'react-router-dom';
import Cast from 'Pages/Cast/Cast';
import HomePage from 'Pages/HomePage/HomePage';
import MovieDetailsPage from 'Pages/MovieDetailsPage/MovieDetailsPage';
import MoviesPage from 'Pages/MoviesPage/MoviesPage';
import NotFound from 'Pages/NotFound/NotFound';
import Reviews from 'Pages/Reviews/Reviews';
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />

        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={NotFound} />
      </Routes>
    </div>
  );
};
