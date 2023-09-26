import React from "react";
import "../../App.css";
import "./Radiere.css";
import radiere from "../imagini/radiere2.jpg";
import {Link} from "react-router-dom";

export default function Radiere() {
  return (
    <div className="container-radiere">
      <div className="box-radiere">
        <h1 className="titlu_radiere">Procura de radiere auto</h1>
        <div className="imagine-radiere">
          <img className="img-radiere" src={radiere} />
        </div>
        <p className="text_radiere">
          Prin procura de radiere auto, proprietarul unui autovehicul poate împuternici o altă
          persoană, scop în care îl va reprezenta în fața autorităților competente pentru scoaterea
          din evidență fiscală a autoturismului.<p> </p>
          Acte necesare pentru procură înmatriculare auto: actul de identitate al proprietarului
          autoturismului (mandant), copia actului de identitate al persoanei împuternicite
          (mandatar), actul de proprietate asupra autoturismului, cartea de identitate a
          autoturismului.
        </p>
        <div className="butoane-radiere">
          <button className="btn-redacteaza">Redactează</button>
          <Link to="/">
            <button className="btn-inapoi">Înapoi</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
