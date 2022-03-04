import React from "react";
import { Carousel } from "react-bootstrap";
import product from "../assets/images/product.jpg";
import product1 from "../assets/images/product1.jpg";
import product2 from "../assets/images/product2.jpg";
import product3 from "../assets/images/product3.jpg";
import product4 from "../assets/images/product4.jpg";
import "./Product.css";

export default function Product() {
  const handleChange = (event) => {
    let displayImage = document.getElementById("sneakers");
    displayImage.src = event.target.src;
  };

  return (
    <div className="imageGallery">
      <div>
        <img src={product} className="sneakers" alt="sneakers"  id="sneakers" />
      </div>
      <div className="lightening">
        <img
          src={product1}
          alt="sneakers"
          className="lightening-sneakers"
          onClick={handleChange}
        />
        <img
          src={product2}
          alt="sneakers"
          className="lightening-sneakers"
          onClick={handleChange}
        />

        <img
          src={product3}
          alt="sneakers"
          className="lightening-sneakers"
          onClick={handleChange}
        />
         <img
          src={product4}
          alt="sneakers"
          className="lightening-sneakers"
          onClick={handleChange}
        />
      </div>

      <Carousel className="sneakers-responsive">
        <Carousel.Item interval={500}>
          <img className="d-block w-100" src={product} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block w-100" src={product1} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={product2} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block w-100" src={product3} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={product4} alt="First slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
