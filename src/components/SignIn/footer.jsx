import React from 'react'
import "../../style/signIn.css"
const Footer = () => {
  return (
    <div className='container-fluid form-color  pb-5'>
      <div className='footer_wrapper d-flex'>
      <div className=''>
        <ul className='ui'>
          <li>FAQ</li>
          <li>Cookie Preferences</li>
        </ul>
      </div>
      <div className='ui'>
        <ul >
          <li>Help Center</li>
          <li>Corporate Information</li>
        </ul>
      </div>
      <div className='ui'>
        <ul >
          <li>Terms of Use</li>
          <li>Privacy</li>
        </ul>
      </div>
      </div>
    </div>);
}

export default Footer;