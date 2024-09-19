import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../Context/ContextAPI/ContextAPI';
import './ProductsDetails.css';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductsDetails = () => {
    const products = useSelector((state) => state.products); 
    console.log(products);
    const [priceRange, setPriceRange] = useState([10, 40]); 
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [visibleCount, setVisibleCount] = useState(9); 
    const [value, setValue] = useState(products);
    const[check, setcheck] =useState(false);


    const location = useLocation();
    const { data } = location.state || {};

    const filterByPrice = () => {
        const [minPrice, maxPrice] = priceRange;
        const updatedProducts = value.filter(
            (product) => product.price >= minPrice && product.price <= maxPrice
        );
        setFilteredProducts(updatedProducts);
    };

    const handleRangeChange = (e) => {
        const { name, value } = e.target;
        setPriceRange((prevRange) => {
            const newRange = [...prevRange];
            if (name === 'min') {
                newRange[0] = parseInt(value);
                console.log(newRange[0])
            } else {
                newRange[1] = parseInt(value);
                console.log(newRange[1])
            }
            return newRange;
        });
    };

    const handleSearch = () => {
        const searchResults = products.filter((product) =>
            product.productName.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(searchResults);
    };

    
    const handleRangeChangeProduct = () =>{
        const result =value.filter((product) =>
            product.price > priceRange[0] && product.price < priceRange[1]
        )
        setFilteredProducts(result);
    }
    useEffect(() => {
        filterByPrice();
        handleSearch();
        // handleRangeChange();
        setcheck(true);
        console.log(filteredProducts);
    }, [searchTerm]); 

    useEffect(()=>{
        handleRangeChangeProduct();
        console.log(filteredProducts);
    },[ priceRange])


    const displayedProducts = products.slice(0, 3);

    return (
        <div className='p1'>
            <div className='c1'>
                <div className='search-bar'>
                    <input
                        type='text'
                        placeholder='Search products...'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>
                <div className='price-range'>
                    <input
                        type='range'
                        min='10'
                        max='100'
                        name='min'
                        value={priceRange[0]}
                        onChange={handleRangeChange}
                    />
                    <input
                        type='range'
                        min='10'
                        max='100'
                        name='max'
                        value={priceRange[1]}
                        onChange={handleRangeChange}
                    />
                </div>
                <div>
                    <button>£{priceRange[0]}</button>
                    <button>£{priceRange[1]}</button>
                </div>
                <div className='h21'>
                    <h4>Groceries (10)</h4>
                    <h4>Juice (9)</h4>
                </div>
                <div className='product-grid'>
                    {displayedProducts.map((product) => (
                        <div key={product.id} className='products-item'>
                           <Link key={product.id} to={`/product/${product.id}`}state={{product}} ><img src={product.img} alt={product.productName} /> </Link>
                            
                            <div className='products-info'>
                                <h5>{product.productName}</h5>
                                <p>£{product.price}</p>
                                
                            </div>
                            
                        </div>
                    ))}
                </div>
            </div>
            <div className='parent-c2'>
                <p>Home/{data}</p>
                <h2>{data}</h2>
                <div className='c2'>
              
                {check 
                    ? filteredProducts.map((product) => (
                        <Link
                            key={product.id}
                            to={`/product/${product.id}`}
                            state={{ product }}
                            className="link-reset"
                        >
                            <div className='context-details'>
                            <img src={product.img} alt={product.productName} />
                            <p>{product.category}</p>
                            <h3>{product.productName}</h3>
                            <p>☆☆☆☆☆</p>
                            <p>£{product.price}</p>
                            </div>
                        </Link>
                        ))
                    : products.slice(0, visibleCount).map((product) => (
                        <Link
                            key={product.id}
                            to={`/product/${product.id}`}
                            state={{ product }}
                            className="link-reset"
                        >
                            <div className='context-details'>
                            <img src={product.img} alt={product.productName} />
                            <p>{product.category}</p>
                            <h3>{product.productName}</h3>
                            <p>☆☆☆☆☆</p>
                            <p>£{product.price}</p>
                            </div>
                        </Link>
                        ))
                    }
                    </div>

                </div>
                {/* {visibleCount < value.length && (
                    <div className='load-more' onClick={handleShowMore}>
                        <FaArrowAltCircleRight className='arrow-icon' /> 
                        <a>Click</a>{/* Use icon as a component */}
                   {/* </div>
                })} */}
            </div>
        
    );
};

export default ProductsDetails;
