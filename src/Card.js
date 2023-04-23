import React from "react";
import "./Card.css";

function Card({ card }) {
  return (
    <div className="card"  key={card.id}>
      <img className="card-image" src={card.image} alt={card.title} />
      <h2 className="card-title">{card.title}</h2>
      <p className="card-description">{card.description}</p>
    </div>
  );
}

export default Card;