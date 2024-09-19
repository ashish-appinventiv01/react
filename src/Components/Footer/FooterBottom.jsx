import React from 'react';
import './FooterBottom.css'
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import {Link} from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const FooterBottom = () => {
  return (
   <>
        <div className='Bottom-main'>
        <div className='bottom'>
            <div className='Image-logo1'>
                <img  src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/organic-store-logo5.svg" 
                     alt='Logo' >

              </img>
              <div className='Image-logo1-text'> 
                 Maecenas mi justo, interdum at consectetur vel, tristique et arcu. Ut quis eros blandit, ultrices diam in, elementum ex. Suspendisse quis faucibus urna. Suspendisse pellentesque.
              </div>
            </div>
            <div className='bottom-description'>
                
                <h5>Quicks Links</h5>
                <Link to="/About"><div className=''>About</div></Link>
                <Link to="/Cart"><div className=''>Cart</div></Link> 
                <Link to="/Cart"><div className=''>CheckOut</div></Link>
                <Link to="/Contact"><div className=''>Contact</div></Link>
                <Link to="/"><div className=''>Home</div></Link>
                <Link><div className=''>My Account</div></Link>
                <Link><div className=''>Shop</div></Link>
              
                <h5>Site Links</h5>
                <Link to="/"><div>Privacy Policy</div></Link>
                <Link to="/"><div>Shipping Detail</div></Link>
                <Link to="/"><div>Offer Coupons</div></Link>
                <Link to="/"><div>Terms and Condition</div></Link>
            </div>

            <div className='bottom-Content'>
                <h5>About Us</h5>
                
                <div className='bottom-Content-text'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam gravida sollicitudin. Praesent porta enim mi, non tincidunt libero interdum sit amet.</p></div>

                <h5>Quick Links</h5>
                <Link to="/"><div>Know More About Us</div></Link>
                <Link to="/"><div>Visit Store</div></Link>
                <Link to="/"><div>Let's Connect</div></Link>
                <Link to="/"><div>Locate Stores</div></Link>
            </div>

            </div>
        </div>
        <div className='lower'>
         <div className='lowerLeft'>
         Copyright © 2024 Organic Store | Organic Store
         </div>
         <div className='lowerRight'>
         <FaInstagram />
         <CiTwitter/>
         <FaFacebookF/>
         <FaYoutube/>
         <FaLinkedin/>

         </div>
    </div>

    
   </>
  );
};

export default FooterBottom;
