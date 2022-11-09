import React, { Component } from 'react'
import Navbar from './navBar'
import Search from '../common/search'
import Tv from '../images/tv.png'
import Mobile from '../images/mobile-0819.jpg'
import kids from '../images/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png'
import Row from '../common/row'
import RowLeft from '../common/leftpicRow'
import Footer from '../footer/footer'
import 'bootstrap/dist/css/bootstrap.css'
import '../../style/home.css'

class Home extends Component {
  state = {}
  signInhandler = () => {

  }
  render() {
    return (
      <div className='bg-dark1'>
        <div className='homePage'>
          <div className='image-gradient'></div>
          <Navbar />
          <div className='text-center promote-text'>
            <h1 className='text-light'>Unlimited movies, TV shows, and more.</h1>
            <p className='text-light'>Watch anywhere. Cancel anytime.</p></div>
          <Search />
          <Row
          h1="Enjoy on your TV."
          h3="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
          image={Tv}
          haveImage={true}
          />
           <RowLeft
          h1="Download your shows to watch offline."
          h3="Save your favorites easily and always have something to watch."
          image={Mobile}
          haveImage={true}
          />
           <Row
          h1="Watch everywhere."
          h3="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
          haveImage={false}
        />
        <RowLeft
          h1="Create profiles for kids."
          h3="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
          image={kids}
          haveImage={true}
          />
          <div className='bg-dark-1'>
          <Search />
          </div>
          <Footer/>

        </div>
      </div>);
  }
}

export default Home;