import React from 'react';
import './NavText.css'; 

const NavText = () => {
  return (
    <div className='NavText-main'>
        <div className='NavText-image'>
            <img 
                src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/organic-products-hero.png"
                alt="Demo">

                </img>

        </div>
        <div className='descriptor-main'>
            <img
                src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png"
                alt="">

                </img>
            <h5>Best Quality Products</h5>
            <h1>Join the Organic Movements!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <button>SHOP NOW</button>
        </div>
    </div>
    
  );
}

export default NavText;
