import React, { createContext, useState } from 'react';
import mockData from '../../../demo.json'; 

export const UserContext = createContext([]);

const ContextAPI = ({ children }) => {
  const [products, setProducts] = useState(mockData);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <UserContext.Provider value={{ products, cart, addToCart }}>
      {children}
    </UserContext.Provider>
  );
};

export default ContextAPI;
