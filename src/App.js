import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Cards from "./components/pagini/Cards";
import Modele from "./components/pagini/Modele";
import Inregistrare from "./components/pagini/Inregistrare";
import Footer from "./components/Footer";
import Inmatriculare from "./components/pagini/Inmatriculare";
import Radiere from "./components/pagini/Radiere";
import Rar from "./components/pagini/Rar";
import Vanzare from "./components/pagini/Vanzare";
import AboutUs from "./components/pagini/AboutUs";
import Redactare from "./components/pagini/Redactare";
import React, {Component} from "react";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <Cards />
                  <Footer />
                </>
              }
            />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/modele" element={<Modele />} />
            <Route path="/inregistrare" element={<Inregistrare />} />
            <Route path="/inmatriculare" element={<Inmatriculare />} />
            <Route path="/radiere" element={<Radiere />} />
            <Route path="/rar" element={<Rar />} />
            <Route path="/vanzare" element={<Vanzare />} />
            <Route path="/redactare" element={<Redactare />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
