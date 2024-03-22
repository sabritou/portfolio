import React from "react";
import "./menu.css"
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav>
       <ul>
          <li>
             <Link to="/profil">Home</Link>
          </li>
          <li>
             <Link to="/propos">à propos</Link>
          </li>
          <li>
             <Link to="/projet">Projet</Link>
          </li>
          <li>
             <Link to="/contact">Contact</Link>
          </li>
       </ul>
 </nav>
     
  )
}

export default Menu;