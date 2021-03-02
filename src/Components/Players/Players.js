import React from 'react';
import './Players.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'


const Players = (props) => {
    const {name,img,country,born,role,basePrice}=props.player;

    return (
        <div className="player">
            <h2>{name}</h2>
            <img src={img} alt=""/>
            <h3>Personal Information:</h3>
            <p><b>Born:</b> {born}</p>
            <p><b>Country:</b> {country}</p>
            <p><b>Role:</b>{role}</p>
            <p><b>Base Price:</b> Rs.{basePrice}</p>
            <br/>
            <button className="add-button"
                    onClick={() => props.handleAddPlayer(props.player)}
                ><FontAwesomeIcon icon={faUserPlus} />Add to Auction</button>
        </div>
    );
};

export default Players;