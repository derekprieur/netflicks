import instance from "./axios";
const API_KEY = process.env.REACT_APP_API_KEY

const requests = {
    fetchTrending: `/trending/all/week?api_key=00613eab9f66462b1d4646197b83581a&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=00613eab9f66462b1d4646197b83581a&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=00613eab9f66462b1d4646197b83581a&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=00613eab9f66462b1d4646197b83581a&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=00613eab9f66462b1d4646197b83581a&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=00613eab9f66462b1d4646197b83581a&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=00613eab9f66462b1d4646197b83581a&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=00613eab9f66462b1d4646197b83581a&with_genres=99`,
}

export default requests