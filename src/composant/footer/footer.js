import React from "react";
import "./footer.css"

function Footer() {
  return (
   
    <div class="footer">
    <footer>
        <div class="social"><a href="#"><i class="icon ion-social-instagram"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-facebook"></i></a></div>
        <ul class="list">
        <li><a href="/src/App.js">Home</a></li>
          <li><a href="/src/">Projet</a></li>
          <li><a href="/src/">à propos</a></li>
          <li><a href="/src/">Contact</a></li>
        </ul>
        <p class="copyright">Portfolio Sabri ©2024</p>
    </footer>
    </div>
     
  )
}

export default Footer;