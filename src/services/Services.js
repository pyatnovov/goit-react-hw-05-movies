const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = '09994a796f4e1a9c14a0723469809976';

async function ErrorFetch(url = '', config = {}) {
  const resp = await fetch(url, config);
  return resp.ok ? await resp.json() : Promise.reject(new Error('Not Found'));
}

export function getPopularMovies() {
  return ErrorFetch(`${BASE_URL}trending/all/day?api_key=${KEY}`);
}
export function getMoviesById(movieId) {
  return ErrorFetch(
    `${BASE_URL}movie/${movieId}?api_key=${KEY}&language=en-US`
  );
}
export function getMoviesBySearchQuery(query) {
  return ErrorFetch(
    `${BASE_URL}search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
}
export function getCastById(movieId) {
  return ErrorFetch(
    `${BASE_URL}movie/${movieId}/credits?api_key=${KEY}&language=en-US`
  );
}
export function getReviewsById(movieId) {
  return ErrorFetch(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
}
