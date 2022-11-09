import React, { Component } from 'react'
import Row from "./Row";
import Banner from './Banner';
import Navbar from "../navbar/Navbar"
import requestes from '../../server/instance/request.mjs'
import "../../style/main.css"


class Main extends Component {
  state = {}
  render() {
    const { trending, netflixorginal, topRated,ActionMovies,ComedyMovies,HorrerMovies,RomanceMovies,DocumentaryMovies } = requestes
    return (

      <div className='body-wrapper'>
        <Navbar/>
        <Banner/>
        <Row
          title="NETFLIX Orginal"
          url={netflixorginal}
          isLargerow={true} />
        <Row
          title="Top Rated"
          url={topRated}
        />
        <Row
          title="Trending Now"
          url={trending}
        />
        <Row
          title="Action Movies"
          url={ActionMovies}
        /><Row
        title="Comedy Movies"
        url={ComedyMovies}
      /><Row
      title="Horror Movies"
      url={HorrerMovies}
    />
    <Row
    title="Romance Movies"
    url={RomanceMovies}
  />
  <Row
    title="Documentarys"
    url={DocumentaryMovies}
  />
        
        </div>

    );
  }
}

export default Main;