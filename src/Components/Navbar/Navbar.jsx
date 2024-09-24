import React, { useState } from 'react';
import './Navbar.css';
import { MdOutlineShoppingBag } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal'; // Import the Modal component
import Cart from '../Cart/Cart'; // Import the Cart component
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const  cart = useSelector((state) => state.cart);

  const size =cart.length;
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <div className='main-background'>
        <div className='nav'>
          <div className='Image-logo'>
            <Link to="/">
              <img 
                src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/organic-store-logo5.svg" 
                alt='Logo' 
              />
            </Link>
          </div>
          <div className='Content'>
            <Link to="/product" state={{ data: "Shop" }}><div>Everything</div></Link>
            <Link to="/product" state={{ data: "Groceries" }}><div>Groceries</div></Link>
            <Link to="/product" state={{ data: "Juice" }}><div>Juice</div></Link>
          </div>
          <div className='description'>
            <Link to="/About"><div>About</div></Link>
            <Link to="/Contact"><div>CONTACT</div></Link>
            <div className='cart-icon' onClick={openModal}>
              <MdOutlineShoppingBag className='shopping-cart' />
              <span className="badge-value">{size}</span>
            </div>
            <Link to="/Login">
              <CiUser className='user-icon' />
            </Link>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Cart />
      </Modal>
    </>
  );
};

export default Navbar;
