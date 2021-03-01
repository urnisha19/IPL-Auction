import React from 'react';
import logo from "../../logo.png";
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />
            <nav>
                <a href="/players">Players</a>
                <a href="/teams">Teams</a>
                <a href="/news">News</a>
            </nav>
            <h1>IPL 2021 PLAYER AUCTION LIST</h1>
        </div>
    );
};

export default Header;