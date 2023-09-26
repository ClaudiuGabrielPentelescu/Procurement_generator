import React from "react";
import {Button} from "./Button";
import "./HeroSection.css";
import "../App.css";
import video from "./videoclipuri/video.mp4";

function HeroSection() {
  return (
    <div className="hero-container">
      <video className="videoTag" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <h1>Actul tău începe aici</h1>
      <h2>Ce mai aștepți?</h2>
      <div className="hero-btns">
        <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
          ÎNCEPE ACUM
        </Button>
        <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
          VIZIONEAZĂ TRAILER-UL <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
