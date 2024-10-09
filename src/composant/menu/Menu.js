import React from "react";
import "./menu.css"
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav>
       <ul>
          <li>
             <Link to="/profil">Accueil</Link>
          </li>
          <li>
             <Link to="/projet">Projet</Link>
          </li>
       </ul>
 </nav>
     
  )
}

export default Menu;