import React from "react";
import '../css/navbar.css';
import logo_navbar from "../img/iss09_logo_navbar.png";
import { NavLink } from "react-router-dom";
import translateTxt from "./translateTxt";


const Navbar = () => {
    const logoNavbar = logo_navbar;
    return (
        <header>
            <nav>
                <img id="logo_navbar_css" src={logoNavbar} alt="Logo de l'entreprise iss09"></img>
                <ul>
                    <li><NavLink exact to="/">Accueil</NavLink></li>
                    <li><NavLink onClick={translateTxt} to="/forfaits">Forfaits</NavLink></li>
                    <li><NavLink to="assistance">Assistance</NavLink></li>
                    <li><NavLink to="depannage">Dépannage</NavLink></li>
                    <li><NavLink to="deplacement">Déplacement</NavLink></li>
                    <li><NavLink to="contact">Contact</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;