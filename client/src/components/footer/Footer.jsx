import React from 'react';
import {
    FaTwitter, FaInstagram,FaLinkedin, FaFacebook, FaGithub
} from 'react-icons/fa';
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer__container container grid">
            <div className="footer__socials">
                <a href="" className="footer__social-link">
                    <FaTwitter/>
                </a>
                <a href="" className="footer__social-link">
                    <FaInstagram/>
                </a>
                <a href="" className="footer__social-link">
                    <FaLinkedin/>
                </a>
                <a href="" className="footer__social-link">
                    <FaFacebook/>
                </a>
            </div>

            <p className="footer__copyright text-cs">
                © 2023<span> JBangala</span>. All Rights reserved
            </p>

            <p className="footer__copyright text-cs">
                Developed by <span>Jonathan Bangala</span>
            </p>
        </div>
    </footer>
  )
}

export default Footer;