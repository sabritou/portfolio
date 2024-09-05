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
    <h1>Salut c'est moi Sabri Kradaoui</h1>
    <hr></hr>
    <h3>Développeur Fullstack passioné par le développement Front-end, web</h3>
    <h4>Développeur basé sur Lyon, France 📍</h4>

    <h1>Stack / Tech : Js, HTML, CSS, Reactjs / Git, Notion, Scrum</h1>


<Button></Button>

    </div>
    
    <center>
    
 
    <Competance></Competance>
    </center> 
  <Carousel></Carousel>
  
   
</>

    )
}

export default profil;