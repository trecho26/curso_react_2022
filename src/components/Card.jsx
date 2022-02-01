import React from "react";
import "./card.css";

const Card = ({ usuario }) => {
  return (
    <div className="card">
      <p>Nombre: {usuario.nombre}</p>
      <p>Edad: {usuario.edad}</p>
    </div>
  );
};

export default Card;
