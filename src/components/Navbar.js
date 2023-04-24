import React from "react";
import '../css/navbar.css';
import logo_navbar from "../img/iss09_logo_navbar.png";

const Navbar = () => {
    const logoNavbar = logo_navbar;
    return (
        <header>
            <nav>
                <img id="logo_navbar_css" src={logoNavbar} alt="Logo de l'entreprise iss09"></img>
                <ul>
                    <li><a href="#">Accueil</a></li>
                    <li><a href="#">Forfaits</a></li>
                    <li><a href="#">Assistance</a></li>
                    <li><a href="#">Dépannage</a></li>
                    <li><a href="#">Déplacement</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;