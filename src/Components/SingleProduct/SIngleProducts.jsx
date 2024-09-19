import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"; 
import { useLocation } from "react-router-dom";
import "./SingleProduct.css";

import Reviews from "../Options/Reviews/Reviews";
import Description from "../Options/Description/Description";
import { addToCart } from "../../Components/Redux/action"; 

const SingleProducts = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState(null);
  const location = useLocation();
  const productvalue = location.state?.product;

  const dispatch = useDispatch(); 
  const products = useSelector((state) => state.products); 

  useEffect(() => {
    setActiveTab("description");
  }, []);

  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
  };

  const handleAddToCart = () => {
    if (productvalue) {
      
      dispatch(addToCart({ ...productvalue, quantity }));
    }
    alert("Added to cart successfully");
  };

  const renderContent = () => {
    switch (activeTab) {
      case "description":
        return <Description text={productvalue.description} />;
      case "reviews":
        return <Reviews />;
      default:
        return null;
    }
  };

  const displayedProducts = products.slice(0, 3);

  const link =
    "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/coffee-asorted-300x300.jpg";

  return (
    <div className="checkMain">
      <div className="main">
        <div className="large-div">
          <div className="large-div-image">
            <img src={link} alt="Large Product" className="large-image" />
          </div>
        </div>
        <div className="small-div">
          <div className="product-page">
            <h1 className="product-name1">{productvalue.category}</h1>
            <div className="product-price1">
              {productvalue.price}
              <span>& Free Shipping</span>
            </div>
            <p className="product-description">{productvalue.description}</p>

            <div className="quantity-and-cart">
              <div className="quantity-selector">
                <input
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                  min="1"
                />
              </div>
              <button className="add-to-cart" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="product-details-container">
        <div className="tabs-container">
          <div className="tab-buttons">
            <button
              className={activeTab === "description" ? "active" : ""}
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>
            <button
              className={activeTab === "reviews" ? "active" : ""}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews
            </button>
          </div>
          <div className="tab-content">{renderContent()}</div>
        </div>
      </div>

      <div className="selling-product">
        <h1>Related Products</h1>

        <div className="product-grid">
          {displayedProducts.map((product) => (
            <div key={product.id} className="products-item">
              <img src={product.img} alt={product.productName} />
              <div className="products-info">
                <p>{product.category}</p>
                <h5>{product.productName}</h5>
                <p>☆☆☆☆☆</p>
                <p>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleProducts;
