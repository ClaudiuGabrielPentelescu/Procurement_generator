import React from "react";
import "../../App.css";
import "./Modele.css";
import {Link} from "react-router-dom";
import procura_inmatriculare from "../imagini/procura_inmatriculare.JPG";
import procura_radiere from "../imagini/procura_radiere.JPG";
import procura_rar from "../imagini/procura_rar.JPG";
import procura_vanzare from "../imagini/procura_vanzare.JPG";

export default function Modele() {
  return (
    <>
      <div className="container-modele">
        <h1 className="header_modele">Modele de procuri</h1>
        <div className="procura_inmatriculare">
          <img className="procura-inmatriculare" src={procura_inmatriculare} />
        </div>
        <div className="procura_radiere">
          <img className="procura-radiere" src={procura_radiere} />
        </div>
        <div className="procura_rar">
          <img className="procura-rar" src={procura_rar} />
        </div>
        <div className="procura_vanzare">
          <img className="procura-vanzare" src={procura_vanzare} />
        </div>
        <div className="butoane-inmatriculare">
          <Link to="/">
            <button className="btn-inapoi">Înapoi</button>
          </Link>
        </div>
      </div>
    </>
  );
}
