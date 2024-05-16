/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./profil.css"
import Button from "../button/button";
import Competance from "../competance/competance";
import { Carousel } from "react-responsive-carousel";

function profil() {
  return (
<>

    <div className="profil">
    <h1>Salut c'est moi Sabri K.</h1>
    <hr></hr>
    <h3>Développeur Fullstack</h3>
    <h4>Je cherche une alternance à partir de septembre 2024.</h4>



<Button></Button>

    </div>
    
    <center>
    

<h1 className="mariogif" >It's-a me, Mario!</h1>
<img  src="https://media.tenor.com/UkvleU1dQK4AAAAi/2d-mario-running.gif" alt="mariogif"></img>
    
    <Competance></Competance>
    </center> 
  <Carousel></Carousel>
  
   
</>

    )
}

export default profil;