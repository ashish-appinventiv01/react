import React from 'react';
import './SellingProducts.css';
import { useSelector } from "react-redux"; 

const SellingProducts = () => {
 
  const products = useSelector((state) => state.products); 

  
  const displayedProducts = products.slice(0, 4); 

  return (
    <div className='selling-products'>
      <h1>Best Selling Products</h1>
      <img 
        src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png"
        alt="Logo"
      />
      <div className='products-grid'>
        {displayedProducts.map((product) => (
          <div key={product.id} className='product-item'> 
            <img src={product.img} alt={product.productName} />
            <div className='product-info'>
              <p>{product.category}</p>
              <h5>{product.productName}</h5>
              <p>☆☆☆☆☆</p>
              <p>{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SellingProducts;
