require('dotenv').config();

const API_KEY = process.env.REACT_APP_API;

const moviesRequests = {
//     Trending          
fetchTrending: `http://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&language=en-US`,
//     Action          28
fetchAction: `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
// Adventure       12
fetchAdventure: `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=12`,
// Animation       16
fetchAnimation: `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=16`,
// Comedy          35
fetchComedy: `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
// Crime           80
fetchCrime: `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=80`,
// Documentary     99
fetchDocumentary: `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`,
// Drama           18
fetchDrama: `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=18`,
// Family          10751
fetchFamily: `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10751`,
// Fantasy         14
fetchFantasy: `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=14`,
// History         36
fetchHistory: `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=36`,
// Horror          27
fetchHorror: `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
// Music           10402
fetchMusic: `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10402`,
// Mystery         9648
fetchMystery: `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=9648`,
// Romance         10749
fetchRomance: `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
// Science Fiction 878
fetchScience: `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=878`,
// TV Movie        10770
fetchTvMovie: `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10770`,
// Thriller        53
fetchThriller: `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=53`,
// War             10752
fetchWar: `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10752`,
// Western         37
fetchWestern: `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=37`,
}

export default moviesRequests;