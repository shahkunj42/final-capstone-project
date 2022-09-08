import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/contact'>Contact</Link>
            <Link to='/contact'>Support</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <a href="https://www.instagram.com/shaiontheway/">Instagram <i className='fab fa-instagram' /> </a>
            <a href='https://www.facebook.com/shaili.shah.27'>Facebook <i className='fab fa-facebook-f' /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;