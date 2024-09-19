import React from 'react';
import './Navbar.css';
import { MdOutlineShoppingBag } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='main-background'>
        <div className='nav'>
          <div className='Image-logo'>
            <Link to="/"><img 
              src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/organic-store-logo5.svg" 
              alt='Logo' 
            />
            </Link>
          </div>
          <div className='Content'>
            <Link to="/product"  state={{ data: "Shop" }}><div>Everything</div></Link>
            <Link to="/product" state={{ data: "Groceries" }}><div>Groceries</div></Link>
            <Link to="/product " state={{ data: "Juice" }}><div>Juice</div></Link>
          </div>
          <div className='description'>
            <Link to="/About"><div>About</div></Link>
            <Link to="/Contact"><div>CONTACT</div></Link>
            <div>$</div>
            <div>
            <Link to="/Cart"><MdOutlineShoppingBag style={{height:'25px', width:'25px', marginTop:'4px'}}/></Link>
            </div>
            <div>
              <Link to="/Login"><CiUser style={{height:'25px', width:'25px', marginTop:'4px', marginRight:"20px"}}/></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
