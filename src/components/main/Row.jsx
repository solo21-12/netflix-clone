import React, { useEffect, useState } from 'react'
import Youtube, { YouTubeProps } from 'react-youtube'
import movieTrailer from "movie-trailer"
// import movietrailer from 'movi'
import "../../style/row.css"
import instance from '../../server/instance/axios.mjs'
const baseURL = 'https://image.tmdb.org/t/p/original/'

const Row = (props) => {
  const { title, url, isLargerow } = props
  let [movie, setMovie] = useState([])
  let [TrailerUrl, setURl] = useState("")
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1
    }
  }

  useEffect(() => {
    instance.get(url)
      .then(res => {

        setMovie(res.data.results)
      })
      .catch(err => {
        console.log(err);
      })
  }, [url])

  const handleWatch = async (movieUrl) => {
    if (TrailerUrl) {
      setURl("")
    }
    else {
      const result = await movieTrailer(movieUrl?.title || movieUrl?.name || movieUrl?.original_name)
      const urlSearch = new URLSearchParams(new URL(result).search)
      setURl(urlSearch.get("v"))
      console.log("Watch", TrailerUrl);
    }

  }
  // console.log(movie);
  return (
    <div className='container-fluid mt-4'>
      <div className='row'>
        <h5 className='h5'>{title}</h5>
        <div className='row-poster text-light'>
          {movie.map(movies =>
            <img onClick={() => handleWatch(movies)} key={movies.poster_path} className={`row-poster-img img-fluid ${isLargerow && "row_posterLarge"}`} src={`${baseURL}${isLargerow ? movies.poster_path : movies.backdrop_path}`} alt={movies.name} />
          )}

        </div>
      </div>
      {TrailerUrl && <Youtube videoId={TrailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;