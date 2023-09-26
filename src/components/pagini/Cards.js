import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import inmatriculare from "../imagini/inmatriculare.jpg";
import radiere from "../imagini/radiere.jpeg";
import rar from "../imagini/rar.jpg";
import vanzare from "../imagini/vanzare.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Puteți realiza următoarele procuri:</h1>
      <div className="cards__container">
        <div className="cards_wrapper">
          <ul className="cards__items">
            <CardItem
              src={inmatriculare}
              text="Realizează o procură de înmatriculare auto"
              label="Înmatriculare"
              path="/inmatriculare"
            />
            <CardItem
              src={radiere}
              text="Realizează o procură de radiere auto"
              label="Radiere"
              path="/radiere"
            />
            <CardItem
              src={rar}
              text="Realizează o procură de reprezentare la R.A.R."
              label="R.A.R."
              path="/rar"
            />
            <CardItem
              src={vanzare}
              text="Realizează o procură de vânzare auto"
              label="Vânzare auto"
              path="/vanzare"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
