import React from "react";
import "./footer.css"

function Footer() {
  return (
   
    <div class="footer">
    <footer>
        <div class="social"><a href="#"><i class="icon ion-social-instagram"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-facebook"></i></a></div>
        <ul class="list">
        <li><a href="/profil">Home</a></li>
          <li><a href="/propos">à propos</a></li>
          <li><a href="/projet">Projet</a></li>
          <li><a href="/contact">Contact</a></li>

        </ul>
        <p class="copyright">Portfolio Sabri ©2024</p>
    </footer>
    </div>
     
  )
}

export default Footer;