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
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/forfaits">Forfaits</Link></li>
                    <li><Link to="assistance">Assistance</Link></li>
                    <li><Link to="depannage">Dépannage</Link></li>
                    <li><Link to="deplacement">Déplacement</Link></li>
                    <li><Link to="contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;