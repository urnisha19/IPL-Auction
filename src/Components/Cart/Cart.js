import React, { useState } from 'react';
import './Cart.css';
import Alert from 'react-bootstrap/Alert';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const player = cart[i];
        total = total + player.basePrice;
    }

    return (  
        <div>
           <h2>Aded Players Summary</h2>
           <p><b>Added Player:</b> {cart.length}</p>
           <ul>
               {
                   cart.map(player =><li>{player.name} -->Rs.{player.basePrice}</li> )
               }
           </ul> 
            <p><b>Total Budget:</b> Rs.{total}</p>
        </div> 
    );
  }

export default Cart;