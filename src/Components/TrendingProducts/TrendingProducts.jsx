import React, { useContext } from 'react';
import { UserContext } from '../Context/ContextAPI/ContextAPI';
import { useSelector } from "react-redux"; 

const TrendingProducts = () => {
    const  users  = useSelector((state) => state.products); 
    console.log(users.products);
  

    const displayedProducts = users.slice(0, 4);
  
    return (
      <div className='selling-products'>
        <h1>Trending Products</h1>
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
  )
}

export default TrendingProducts