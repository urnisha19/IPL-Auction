import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    let total = 0;
    for(let i=0;i<cart.length;i++){
        const player = cart[i];
        total= total+player.basePrice;
    }
   
    return (
        <div>
           <h2>Aded Players Summary</h2>
           <p><b>Added Player:</b> {cart.length}</p>
            <p><b>Total Base Price:</b> Rs.{total}</p>
        </div>
    );
};

export default Cart;