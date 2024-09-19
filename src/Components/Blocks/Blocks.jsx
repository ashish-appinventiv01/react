import React from 'react'
import './Blocks.css'


const Blocks = () => {
  return (
    <div className='a1'>
        <img className="a1-img" src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/basil-leaf.png" alt=""/>
        <div className='Block'>
            
            <div class="block-container">
                <h2>Farm Fresh Fruits</h2>
                <p>Ut sollicitudin quam vel purus tempus, vel eleifend felis varius.</p>
                <button>Shop Now</button>
            </div>
            <div class="block-container">
                <h2>Fresh Vegetables</h2>
                <p>Aliquam porta justo nibh, id laoreet sapien sodales vitae justo.</p>
                <button>Shop Now</button>
            </div>
            <div class="block-container">
                <h2>Organic Legume</h2>
                <p>Phasellus sed urna mattis, viverra libero sed, aliquam est.</p>
                <button>Shop Now</button>
            </div>
        </div>
    </div>
    

  )
}

export default Blocks