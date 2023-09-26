import React from "react";
import "./AboutUs.css";
import logo from "../imagini/logo.png";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h2 className="titlu-about-us">Despre noi</h2>
        <p className=" text-about-us">
          Nota_rX este o aplicație web care urmărește generarea automată de acte notariale, preluând
          datele automat de pe actele de identitate, înlăturând astfel riscul de a le greși, cum ar
          fi fost în cazul introducerii acestora manual. Ea urmărește digitalizarea mediului
          notarial, ajutând astfel la eficientizarea tehnoredactării actelor și la fluidizarea
          relației redactor-client.
        </p>
      </div>
      <img src={logo} alt="Despre noi" className="about-us-image" />
    </div>
  );
};

export default AboutUs;
