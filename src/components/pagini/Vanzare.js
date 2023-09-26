import React from "react";
import "../../App.css";
import "./Vanzare.css";
import vanzare from "../imagini/vanzare.jpg";
import {Link} from "react-router-dom";

export default function Vanzare() {
  return (
    <div className="container-vanzare">
      <div className="box-vanzare">
        <h1 className="titlu_vanzare">Procura de vânzare auto</h1>
        <div className="imagine-vanzare">
          <img className="img-vanzare" src={vanzare} />
        </div>
        <p className="text_vanzare">
          Prin procura de vânzare auto, proprietarul unui autovehicul poate împuternici o altă
          persoană pentru vânzarea mașinii, scop în care îl va reprezenta în fața cumpărătorului
          acesteia.<p> </p>
          Acte necesare pentru procură înmatriculare auto: actul de identitate al proprietarului
          autoturismului (mandant), copia actului de identitate al persoanei împuternicite
          (mandatar), actul de proprietate asupra autoturismului, cartea de identitate a
          autoturismului.
        </p>
        <div className="butoane-vanzare">
          <button className="btn-redacteaza">Redactează</button>
          <Link to="/">
            <button className="btn-inapoi">Înapoi</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
