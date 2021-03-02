import React, { useState } from 'react';
import data from '../data/data';
import Cart from '../Cart/Cart';
import Players from '../Players/Players';
import playersData from '../data/data.json';
import { useEffect} from 'react';
import './Auction.css';

const Auction = () => {
    const first13 = data.slice(0, 13);
    const [players, setPlayers] = useState(first13);
    const [cart, setCart] = useState([]);

    const [player, setPlayer] = useState([]);
    useEffect(() => {
        setPlayer(playersData);
    }, [])

    const handleAddPlayer = (player) => {
        const newCart = [...cart, player];
        setCart(newCart);
    }

    return (
        <div className="auction-container">
            <div className="player-container">
                {
                    players.map(player => <Players handleAddPlayer={handleAddPlayer} key={player.id} player={player} > </Players>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Auction;