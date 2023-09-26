import React from "react";
import "../../App.css";
import "./Inmatriculare.css";
import inmatriculare from "../imagini/inmatriculare.jpg";
import {Link} from "react-router-dom";

export default function Inmatriculare() {
  return (
    <div className="container-inmatriculare">
      <div className="box-inmatriculare">
        <h1 className="titlu_inmatriculare">Procura de înmatriculare</h1>
        <div className="imagine-inmatriculare">
          <img className="img-inmatriculare" src={inmatriculare} />
        </div>
        <p className="text_inmatriculare">
          Prin procura de înmatriculare auto, proprietarul unui autovehicul poate împuternici o altă
          persoană pentru înmatricularea mașinii, scop în care îl va reprezenta în fața
          autorităților competente pentru depunerea actelor necesare emiterii certificatului de
          înmatriculare, ridicarea acestuia, a cărții de identitate a autoturismului.<p> </p>
          Acte necesare pentru procură înmatriculare auto: actul de identitate al proprietarului
          autoturismului, copia actului de identitate al persoanei împuternicite, actul de
          proprietate asupra autoturismului.
        </p>
        <div className="butoane-inmatriculare">
          <Link to="/redactare">
            <button className="btn-redacteaza">Redactează</button>
          </Link>
          <Link to="/">
            <button className="btn-inapoi">Înapoi</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
