import React, { useEffect, useState } from 'react'
import requestes from '../../server/instance/request.mjs';
import instance from '../../server/instance/axios.mjs';
import "../../style/banner.css"
const baseURL = 'https://image.tmdb.org/t/p/original/'



const Banner = (props) => {
  const { netflixorginal } = requestes
  const [banner, setBanner] = useState([])
  useEffect(() => {
    instance.get(netflixorginal)
      .then(res => {
        let index = Math.floor(Math.random() * res.data.results.length)
        const movies = res.data.results[index]
        setBanner(movies);
      })

  }, [])
  // console.log(banner);
  const truncate=(str,n)=>{
    return  str?.length > n ? str.substr(0, n-1) + "......": str
  
  }
  return (
    <div>
      <header className='banner bg-image mh-100' 
      style={{ backgroundImage: `url(${baseURL}${banner.backdrop_path})` }}>
        <div className=' banner-contents'>
          <h1 className='banner-title'>{banner.name || banner.original_name}</h1>
          <div className='btn-group '>
            <button className='btn btn-sm btn-dark m-2 p-2'>Play</button>
            <button className='btn btn-sm btn-dark m-2 p-2'>My List</button>
          </div>
          <div><p className='p mt-3 banner-decription'>{truncate(banner.overview,150)}</p></div>
        </div>
        <div className='fade'></div>
      </header>
    </div>);
}

export default Banner;