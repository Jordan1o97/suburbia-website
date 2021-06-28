import React from 'react'
import { Link } from 'react-router-dom'
import emailjs from 'emailjs-com';
import { Button } from './Button'
import { USER_ID, TEMPLATE_ID, SERVICE_ID } from '../util/emailkey';
import './Footer.css'


function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }


function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className='footer-subscription-heading'>
                   Email Enquiries Here
                </p>
                <div className='input-areas'>
                    <form className="footer-input" onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="from_name" />

                        <label>Email</label>
                        <input type="email" name="from_email" />

                        <label>Message</label>
                        <textarea name="message" />
                        
                        <input type="submit" value="Send" />
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-links-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Contact us</h2>
                        <Link to='/signup'>Contact</Link>
                        <Link to='/signup'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorships</Link>
                    </div>
                </div>
                <div className='footer-links-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/signup'>Instagram</Link>
                        <Link to='/signup'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                         Suburbia <img src="/images/White.png" ></img>Clothing
                    </div>
                    <small className='website-rights'>
                        Suburbia © 2021
                    </small>
                    <div className='social-icons'>
                        <Link className='social-icon-link facebook' to='/' target='_blank' aria-label='Facebook'>
                            <i className='fab fa-facebook-f'></i>
                        </Link>
                        <Link className='social-icon-link instagram' to='/' target='_blank' aria-label='Instagram'>
                            <i className='fab fa-instagram'></i>
                        </Link>
                        <Link className='social-icon-link twitter' to='/' target='_blank' aria-label='Twitter'>
                            <i className='fab fa-twitter'></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer 
