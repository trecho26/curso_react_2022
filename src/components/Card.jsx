import React from "react";
import "./card.css";

const Card = ({ usuario, usuario2 }) => {
  return (
    <div className="card">
      <p>Usuario: {usuario}</p>
      <p>Usuario2: {usuario2}</p>
    </div>
  );
};

export default Card;
