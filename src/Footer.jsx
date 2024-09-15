import React from 'react';
import './Footer.css'; // Import the CSS file if it's separate
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer'>

      <div className='footer__first'>
        <p>Back To Top</p>
      </div>

      <div className='footer__end'>

      </div>
      <div className='footer__second'>
        <img className="footer__image" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
      </div>
      {/* Add more sections or content as needed */}
    </div>
  );
}

export default Footer;
