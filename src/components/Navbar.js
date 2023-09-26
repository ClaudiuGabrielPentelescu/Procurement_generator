import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import logo from "./imagini/logo25.jpg";
import {Button} from "./Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/">
            <img src={logo} className="App-logo" onClick={closeMobileMenu} alt="logo" />
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
          </Link>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/aboutus" className="nav-links" onClick={closeMobileMenu}>
                Despre noi
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/modele" className="nav-links" onClick={closeMobileMenu}>
                Modele
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Înregistrează-te</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
