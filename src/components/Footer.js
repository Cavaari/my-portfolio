import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
            Thank you for visiting my website!
            </p>
            <p className='footer-subscription-text'>
            I am currently looking for a new Job opportunities in the Software Engineering.
            </p>
        </section>
        <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
                <h2>About Me</h2>
                <a href='/Experience'>Experience</a>
                <a href='/Projects'>Projects</a>
                <a href='/Skills'>Skills</a>
            </div>
                        <div className='footer-link-items'>
                            <h2>Contact Me <FaPhoneAlt /></h2>
                            <a href='tel:+1(226)-979-2533'>Cell</a>
                            <a href='mailto:cavaarit@gmail.com'>Email <FaEnvelope /></a>
                            <a href='https://linkedin.com/in/cavaari-taylor-8976a6234'>LinkedIn</a>
                        </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <a href='/my-portfolio' className='social-logo'>
                        ©
                        </a>
                    </div>
                    <small className='website-rights'>© 2024</small>
                    <div className='social-icons'>
                        <Link
                        class='social-icon-link github'
                        to='https://github.com/Cavaari'
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='github'
                        >
                        <i class='fab fa-github' />
                        </Link>
                        <Link
                        class='social-icon-link LinkedIn'
                        to='https://linkedin.com/in/cavaari-taylor-8976a6234'
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='LinkedIn'
                        >
                        <i class='fab fa-linkedin' />
                        </Link>
                        <Link
                        className='social-icon-link gmail'
                        to='mailto:cavaarit@gmail.com'
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='Gmail'
                        >
                        <FaEnvelope />
                        </Link>
                    </div>
                </div>
            </section>
        
        </div>
  )
}

export default Footer