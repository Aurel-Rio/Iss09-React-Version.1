import React from "react";
import '../css/navbar.css';
import logo_navbar from "../img/iss09_logo_navbar.png";
import { Link } from "react-router-dom";
import Accueil from './Accueil';
import Forfaits from './Forfaits';
import Assistance from './Assistance';
import Depannage from './Depannage';
import Deplacement from './Deplacement';
import Contact from './Contact';

const Navbar = () => {
    const logoNavbar = logo_navbar;
    return (
        <header>
            <nav>
                <img id="logo_navbar_css" src={logoNavbar} alt="Logo de l'entreprise iss09"></img>
                <ul>
                    <li><Link to="#">Accueil</Link></li>
                    <li><Link to="#">Forfaits</Link></li>
                    <li><Link to="#">Assistance</Link></li>
                    <li><Link to="#">Dépannage</Link></li>
                    <li><Link to="#">Déplacement</Link></li>
                    <li><Link to="#">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;