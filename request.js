const API_KEY = process.env.API_KEY;

const requests = {
    fetchTrending: `http://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`, 
    fetchNetflixOriginals: `http://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchComedyMovies: `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`, 
    fetchHorrorMovies: `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`, 
    fetchDocumentaries: `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;