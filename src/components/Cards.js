import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Latest drops and upcoming design</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Medusa crew neck"
              label="New Arrival"
              path="/products"
            />
            <CardItem
              src="images/HazeShirt.png"
              text="New design incoming"
              label="Hot Selling"
              path="/products"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Medusa crew neck"
              label="Sale"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="CHB hoodie"
              label="Latest Trends"
              path="/products"
            />
            <CardItem
              src="images/hazedesignmock.jpg"
              text="Down town shibuya"
              label="preorder"
              path="/products"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
