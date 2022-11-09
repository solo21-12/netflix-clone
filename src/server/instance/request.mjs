import config from '../config/config.json'
const apikey = config.apikey

const requestes ={
  trending:`/trending/all/week?api_key=${apikey}&language-us`,
  netflixorginal:`/discover/tv?api_key=${apikey}&with_network=213`,
  topRated:`/movie/top_rated?api_key=${apikey}&language-us`,
  ActionMovies:`/discover/movie?api_key=${apikey}&with_genres=28`,
  ComedyMovies:`/discover/movie?api_key=${apikey}&with_genres=35`,
  HorrerMovies:`/discover/movie?api_key=${apikey}&with_genres=27`,
  RomanceMovies:`/discover/movie?api_key=${apikey}&with_genres=10749`,
  DocumentaryMovies:`/discover/movie?api_key=${apikey}&with_genres=99`,




}

export default requestes;