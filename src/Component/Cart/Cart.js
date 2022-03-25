import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    console.log(cart)

    let total= 0;
    let shipping = 0;
    let Quantity = 0;
    for(const product of cart){
        Quantity = Quantity + product.quantity;
        total=total+ product.price * Quantity;
        shipping= shipping+ product.shipping;
    }
    const tax= (total * 10/100).toFixed(2);
    const grandTotal= total+shipping+parseFloat(tax);
    return (
             <div className='counting-msg'>
               <h2>Order Summery</h2>
                <p>Selected Items: {Quantity}</p>
                <p>Total Price: ${total}</p>
                <p>Total shipping: ${shipping}</p>
                <p>Tax: {tax}</p>
                <h5>Grand Total: {grandTotal.toFixed(2)} </h5>
               </div>
    )
};

export default Cart;