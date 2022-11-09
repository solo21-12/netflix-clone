import React from 'react'
import '../../style/home.css'
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return ( 
    <div className='container-fluid bg-dark-1'>
      <div className='row footer-wrapper'>
      <p className='text-muted pb-4'><NavLink className='text-muted'>Questions? Contact us.</NavLink></p>
        <div className=' col-sm-4 col-md-3'>
          <ul className='footer-ul'>
            <li><NavLink>FAQ</NavLink></li>
            <li><NavLink>Investor Relations</NavLink></li>
            <li><NavLink>Privacy</NavLink></li>
            <li><NavLink>Speed Test</NavLink></li>            
          </ul>
        </div>
        <div className='col-sm-4 col-md-3'>
          <ul className='footer-ul'>
            <li><NavLink>Help Center</NavLink></li>
            <li><NavLink>Jobs</NavLink></li>
            <li><NavLink>Cookie Preferences</NavLink></li>
            <li><NavLink>Legal Notices</NavLink></li>            
          </ul>
        </div>
        <div className='col-sm-4 col-md-3'>
          <ul className='footer-ul'>
            <li><NavLink>Account</NavLink></li>
            <li><NavLink>Ways to Watch Relations</NavLink></li>
            <li><NavLink>Corporate Information</NavLink></li>
            <li><NavLink>Only on Netflix</NavLink></li>            
          </ul>
        </div>
        <div className='col-sm-4 col-md-3'>
          <ul className='footer-ul'>
            <li><NavLink>Media Center</NavLink></li>
            <li><NavLink>Terms of use</NavLink></li>
            <li><NavLink>Contact</NavLink></li>         
          </ul>
        </div>

      </div>
    </div>
   );
}
 
export default Footer;