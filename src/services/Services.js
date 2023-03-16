import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = '09994a796f4e1a9c14a0723469809976';

export async function getPopularMovies() {
  const fetch = await axios.get(`${BASE_URL}trending/movie/day?api_key=${KEY}`);

  return fetch.data;
}
