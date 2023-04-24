import React from "react";
import '../css/navbar.css';
import logo_navbar from "../img/iss09_logo_navbar.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    const logoNavbar = logo_navbar;
    return (
        <header>
            <nav>
                <img id="logo_navbar_css" src={logoNavbar} alt="Logo de l'entreprise iss09"></img>
                <ul>
                    <li><link to="#">Accueil</link></li>
                    <li><link to="#">Forfaits</link></li>
                    <li><link to="#">Assistance</link></li>
                    <li><link to="#">Dépannage</link></li>
                    <li><link to="#">Déplacement</link></li>
                    <li><link to="#">Contact</link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;