import React, { useState } from "react";
import '../css/navbar.css';
import logo_navbar from "../img/iss09_logo_navbar.png";
import logo_left from "../img/iss09_logo_left.png";
import logo_right from "../img/iss09_logo_right.png";
import { NavLink } from "react-router-dom";
import txt from './txt.js'

const Navbar = () => {
  const [isLogoLeft, setIsLogoLeft] = useState(true);
  const logoNavbar = logo_navbar;
  const logoLeft = logo_left;
  const logoRight = logo_right;

  const handleNavClick = () => {
    setIsLogoLeft(!isLogoLeft);
  };

  return (
    <header>
      <nav>
        <img
          id="logo_navbar_css"
          src={logoNavbar}
          alt="Logo de l'entreprise iss09"
        ></img>
        <ul>
          <li>
          <NavLink onClick={invertImages} to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink onClick={handleNavClick} to="/forfaits">
              Forfaits
            </NavLink>
          </li>
          <li>
            <NavLink onClick={handleNavClick} to="assistance">
              Assistance
            </NavLink>
          </li>
          <li>
            <NavLink onClick={handleNavClick} to="depannage">
              Dépannage
            </NavLink>
          </li>
          <li>
            <NavLink onClick={handleNavClick} to="deplacement">
              Déplacement
            </NavLink>
          </li>
          <li>
            <NavLink onClick={handleNavClick} to="contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="logo-container">
        <img
          className={isLogoLeft ? "logo-left" : "logo-right"}
          src={isLogoLeft ? logoLeft : logoRight}
          alt="Logo de l'entreprise iss09"
        />
        <img
          className={isLogoLeft ? "logo-right" : "logo-left"}
          src={isLogoLeft ? logoRight : logoLeft}
          alt="Logo de l'entreprise iss09"
        />
      </div>
    </header>
  );
};

export default Navbar;