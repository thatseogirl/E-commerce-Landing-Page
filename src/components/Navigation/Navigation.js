import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import cart from "../assets/images/cart.svg";
import avatar from "../assets/images/avatar.png";
import "./Navigation.css";

export default function Navigation({addedItem}) {
  return (
    <Navbar collapseOnSelect expand="lg" className="header">
      <Navbar.Brand href="#home" className="home">Sneakers</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#collections" className="homeLink">Collections</Nav.Link>
          <Nav.Link href="#Men" className="homeLink">Men</Nav.Link>
          <Nav.Link href="#Women" className="homeLink">Women</Nav.Link>
          <Nav.Link href="#About" className="homeLink">About</Nav.Link>
          <Nav.Link href="#contacts" className="homeLink">Contacts</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link>
            {addedItem} 
            <img src={cart} alt="cart" />
            
          </Nav.Link>
          <Nav.Link>
            {" "}
            <img src={avatar} className="responsive" alt="avatar" />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
