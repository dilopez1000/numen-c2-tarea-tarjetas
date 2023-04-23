import React, { useState, useEffect } from "react";
import Card from "./Card";
//import "./CardList.css";
import "./Card.css";
import data from './data.json';
// import axios from 'axios';

function CardList() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    //  fetch(".\data.json")
    //   .then((response) => {
    //     console.log(response.json());
    //     return response.json()
    //         })      
    //   .then((data) => setCards(data.cards));      
      setCards(data.cards);
  }, []);

  return (
    <div className="card-list">
      {cards.map((card, index) => (
        <Card card={card} />
      ))}
    </div>
  );
}

export default CardList