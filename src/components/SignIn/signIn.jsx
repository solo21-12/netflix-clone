import React from 'react'
import "../../style/signIn.css"
import {FcGoogle} from 'react-icons/fc'
import {MdFacebook} from 'react-icons/md'
import {FaGithub} from 'react-icons/fa'
import { GoogleAuthProvider,signInWithPopup} from "firebase/auth"
import {auth} from "../../utils/firebase"
import Footer from './footer'
const SignIn = () => {
  const googleProvider = new GoogleAuthProvider()
  const googleLogin = async()=>{
    try{
      const result = await signInWithPopup(auth,googleProvider)
      console.log(result);
    }catch(err){
      console.log(err);
    }
  }
  return ( 
  <div className='container signIn'>
    <div className='form form-color pt-5'>
      <form action='/signIn' method='post' className=' mx-auto'>
        <h1 className='text-light pb-2'>Sign In</h1>
        <div className='form-group input'>
          <input type='email' className='form-control mb-3' placeholder='Email Address'></input>
          <input type='password' className='form-control bg-muted' placeholder='Password'></input>
          <button className=' button mt-5 btn btn-danger btn-lg text-light btn-block'>Sign In</button>
        </div>
      </form>
      <p className=' text-light px '>or</p>
      <div className=' container d-flex flex-column'>
      <button className='btn text-light google'><FcGoogle className='me-2' onClick={ googleLogin}/>Sign in With Google</button>
      <button className='btn text-light mt-2 fb'><MdFacebook className=' me-2' fill='blue'/>Sign in With Facebook</button>
      <button className='btn text-light mt-2 git'><FaGithub className=' me-2' />Sign in With Github</button>
    </div>
    <div className='bottom-text mx-5 mt-2'>
      <p className='signUp text-muted'>New to Netflix? <span className='text-light'>Sign Up Now</span></p>
      <p className=' recapatch text-muted'>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</p>
    </div>
    </div>
    <Footer/>
  </div> );
}
 
export default SignIn;