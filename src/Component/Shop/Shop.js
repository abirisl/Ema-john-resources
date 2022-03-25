import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    
   const handleAddCart= (product) =>{
    const newCart= [...cart, product];
    setCart(newCart);
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
                <p>cart: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;