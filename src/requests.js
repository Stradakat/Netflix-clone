// API key for TV Maze const APIKEY = '7kG5B_RGE2kMNK2yYNy7SE7oOsva-wVt';
const API_KEY = '50c24dd81cf64f20150add7bc46eabb5';

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&lauguage=en-US`,
  fetchActionMovies: `/dicover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/dicover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/dicover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/dicover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/dicover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
