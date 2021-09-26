
const API_KEY = process.env.REACT_APP_API;

const tvShowsRequests = {
// Trending
fetchTrending: `http://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}&language=en-US`,
// Action & Adventure    10759
fetchActionAdventure: `http://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=10759`,
// Animation         16
fetchAnimation: `http://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=16`,
// Comedy                35
fetchComedy: `http://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=35`,
// Crime             80
fetchCrime: `http://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=80`,
// Documentary           99
fetchDocumentry: `http://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=99`,
// Drama             18
fetchDrama: `http://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=18`,
// Family                10751
fetchFamily: `http://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=10751`,
// Kids              10762
fetchKids: `http://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=10762`,
// Mystery               9648
fetchMystery: `http://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=9648`,
// News              10763
fetchNews: `http://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=10763`,
// Reality               10764
fetchReality: `http://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=10764`,
// Sci-Fi & Fantasy  10765
fetchScifiFantasy: `http://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=10765`,
// Soap              10766
fetchSoap: `http://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=10766`,
// Talk              10767
fetchTalk: `http://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=10767`,
// War & Politics        10768
fetchWarPolitics: `http://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=10768`,
// Western               37
fetchWestern: `http://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=37`,
}

export default tvShowsRequests;