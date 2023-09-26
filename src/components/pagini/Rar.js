import React from "react";
import "../../App.css";
import "./Rar.css";
import rar from "../imagini/rar.jpg";
import {Link} from "react-router-dom";

export default function Rar() {
  return (
    <div className="container-rar">
      <div className="box-rar">
        <h1 className="titlu_rar">Procura de reprezentare R.A.R</h1>
        <div className="imagine-rar">
          <img className="img-rar" src={rar} />
        </div>
        <p className="text_rar">
          Prin procura de reprezentare la R.A.R, proprietarul unui autovehicul poate împuternici o
          altă persoană pentru reprezentarea la Registrul Auto Român în vederea inspecției tehnice a
          autoturismului.<p> </p>
          Acte necesare pentru procură înmatriculare auto: actul de identitate al proprietarului
          autoturismului (mandant), copia actului de identitate al persoanei împuternicite
          (mandatar), actul de proprietate asupra autoturismului, cartea de identitate a
          autoturismului.
        </p>
        <div className="butoane-rar">
          <button className="btn-redacteaza">Redactează</button>
          <Link to="/">
            <button className="btn-inapoi">Înapoi</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
