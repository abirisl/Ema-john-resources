import React, { useEffect, useState } from 'react';
import { addToDb, getCartItem } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);


    useEffect(() =>{
        const storedCart= getCartItem();
        const shoesCart= [];
       for(const id in storedCart){
           const addDataItem = products.find(product=> product.id === id);
           if(addDataItem){
               const quantity= storedCart[id];
               addDataItem.quantity= quantity;
              shoesCart.push(addDataItem);
           }
       }
       setCart(shoesCart)
    }, [products])

    
   const handleAddCart= (selectedProduct) =>{
   let newCart= [];
   const exist = cart.find(product => product.id === selectedProduct.id);
   if(!exist){
       selectedProduct.quantity= 1;
       newCart= [...cart, selectedProduct];
   }
   else{
       const rest= cart.filter(product => product.id === selectedProduct);
       exist.quantity=exist.quantity+1;
       newCart= [...rest, exist]
   }
    setCart(newCart);
    addToDb(selectedProduct.id)
}
    return (
        <div className='shop-product'>
            <div className="product-container">
             {
                 products.map(product => <Product key= {product.id} btnClick={handleAddCart} product= {product}></Product>)
             }
            </div>
            <div className="cart-container">
              <Cart cart= {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;