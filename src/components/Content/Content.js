import React from "react";
import { Row, Col, Button, InputGroup, FormControl } from "react-bootstrap";
import Product from "../product/Product";
import minus from "../assets/images/minus.svg";
import plus from "../assets/images/plus.svg";
import cart from "../assets/images/cart.svg";
import "./Content.css";

export default function Content({
  handleChange,
  counter,
  handleClick,
  handleDecrement,
  handleIncrement,
}) {
  return (
    <Row className="content">
      <Col lg={6}>
        <Product />
      </Col>
      <Col lg={6} className="fall-profile">
        <div className="text-area">
          <p className="company">Sneaker Company</p>
          <h2>Fall Limited Edition</h2>
          <h2>Sneakers</h2>
          <p className="weather">
            These low-profile sneakers are perfect causual wear
             companion.Featuring a durable rubber outer sole,they will
            withstand everything the weather can offer.
          </p>
        </div>
        <div className="discount">
          <div>
            <strong className="active">$125.00</strong>
            <Button className="text-btn">
              50%
            </Button>
          </div>
          <div className="price">
            <del>$250.00</del>
          </div>
        </div>
        <div className="cart">
          <div className="value">
            <InputGroup className="mb-3 color">
              <InputGroup.Text 
              className="inputbtn"
              id="basic-addon1"
              style={{backgroundColor: "white"}}>
                <img 
                src={minus} 
                alt="Remove item" 
                onClick={handleDecrement} />
              </InputGroup.Text>
              <FormControl
                type="number"
                placeholder="1"
                aria-label="0"
                aria-describedby="basic-addon1"
                value={counter}
                onChange={handleChange}
              />
              <InputGroup.Text 
              className="inputbtn"
               id="basic-addon1">
                <img 
                src={plus} 
                alt="Add item" 
                onClick={handleIncrement} />
              </InputGroup.Text>
            </InputGroup>
          </div>
          <div>
            <Button onClick={handleClick} className="btnCart">
              <img src={cart} alt="cart" className="cartIcon" />
              Add to Cart
            </Button>{" "}
          </div>
        </div>
      </Col>
    </Row>
  );
}
