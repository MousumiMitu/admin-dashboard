import React, { useEffect, useState } from "react";
import { Card } from "./Card";

const Cards = () => {
  const [cards, setCards] = useState([]);
  const fetchData = () => {
    fetch("http://localhost:4000/cards")
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {cards &&
        cards.length > 0 &&
        cards.map((card) => <Card key={card._id} card={card} />)}
    </>
  );
};

export default Cards;
