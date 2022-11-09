import React from 'react'
import '../../style/home.css'
const Search = () => {
  return (
    <div className='text-center pb-5'>
    <div className='serach_button mx-auto d-flex justify-content'>
    <div className='promotion-text-search'>
    <p className='text-light'>Ready to watch? Enter your email to create or restart your membership.</p>
        </div>
      <div className='nfinput d-flex'>
        <div>
        <input placeholder='Email Address' type='email' className=' nftextfiled form-control'></input>
        </div>
        <div>
        <button className='btn btn-danger btn-lg p-3'><a href ="https://www.netflix.com/signup/registration?locale=en-ET">Get Started</a></button>
        </div>
      </div>
      
    </div></div>
  );
}

export default Search;