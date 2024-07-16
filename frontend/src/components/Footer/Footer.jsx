import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id="footer">
            <div className='footer-content'>
                <div className="footer-content-left">
                    <img src={assets.logo} />
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae quasi id aut, provident at commodi ipsa repellat cum dignissimos corporis?
                    </p>
                    <div className='footer-social-icons'>
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>Get in Touch</h2>
                    <ul>
                        <li>+91 9876543210</li>
                        <li>contact@tomato.com</li>
                    </ul>
                </div>
            </div>
            <hr>
            </hr>
            <p className='footer-copyright'>
                Copyright 2024 &copy; Tomato.com - All Rights Reserved
            </p>
        </div>
    )
}

export default Footer
