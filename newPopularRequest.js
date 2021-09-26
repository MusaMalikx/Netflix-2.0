const API_KEY = process.env.REACT_APP_API;

const newPopularRequests = {
    fetchUpcomingMovies: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    fetchUpcomingTvShows: `https://api.themoviedb.org/3/tv/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    fetchNowPlayingMovies: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
    fetchNowPlayingTvShows: `https://api.themoviedb.org/3/tv/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
    fetchPopularMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`,
    fetchPopularTvShows:`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchTopRatedMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&certification_country=US&certification=R&sort_by=vote_average.desc`,
    fetchTopRatedTvShows:`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchTvShowsAiringToday: `https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}&language=en-US&page=1`,
    fetchTvShowsOnTheAir: `https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=1`
}

export default newPopularRequests;