import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    
   const handleAddCart= (product) =>{
    console.log(product);
}
    return (
        <div className='shop-product'>
            <div className="product-container">
             {
                 products.map(product => <Product key= {product.id} btnClick={handleAddCart} product= {product}></Product>)
             }
            </div>
            <div className="cart-container">
                <h2>Order Summery</h2>
            </div>
        </div>
    );
};

export default Shop;