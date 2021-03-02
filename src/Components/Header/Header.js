import React from 'react';
import logo from "../../logo.png";
import "./Header.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />
            <Navbar bg="dark" variant="dark">
                <Nav className="mr-auto">
                    <Nav.Link href="/players">Players</Nav.Link>
                    <Nav.Link href="/teams">Teams</Nav.Link>
                    <Nav.Link href="/news">News</Nav.Link>
                </Nav>
            </Navbar>
            <h1>IPL 2021 PLAYER AUCTION LIST</h1>
        </div>
    );
};

export default Header;