/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import "./projetperso.css"

function pro() {
    return (
    <>

<div className="projects-container">
        <div className="cont">
        <div className="movie-info">
            <h2>Portfolio Thème Mario Remastered</h2>
            <div className='photo'>
            <img className='photo' src="./img/portfolio.jpg"/>
            </div>
            <hr></hr>
            <p>
Mon portfolio est conçu sur le thème de Mario moderniser. Il met en valeur mes compétences et réalisations.</p>
            <div className="rating">ReactJS</div>
            <a href="https://github.com/sabritou"  target="_blank" rel="noopener noreferrer">
      <button className="learn-more">En savoir plus projet / Github</button>
      </a>
        </div>
    </div>



    <div className="cont">
        <div className="movie-info">
            <h2>Pico-8</h2>
            <div className='photo'>
            <img className='photo' src="./img/pico8.jpg"/>
            </div>
            <hr></hr>
            <p>Pico-8 est une console virtuelle pour créer des jeux rétro en utilisant le moteur Pico-8 et le langage Lua. Vous explorerez divers aspects du développement de jeux 2D, de la gestion de la boucle de jeu aux collisions en passant par l'animation et les interactions. Le thème choisi pour ce projet est axé sur les valeurs LGBT+ et le féminisme, offrant ainsi une expérience de jeu inclusive et engagée.  </p>
            <div className="rating">LUA</div>
        </div>
    </div> 
</div>
    </>
    )
}

export default pro