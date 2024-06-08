/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import "./projet.css"

function projet() {
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
Mon portfolio est conçu sur le thème de Mario, l'univers emblématique du jeu vidéo. Il met en valeur mes compétences et réalisations à travers des éléments visuels et interactifs inspirés de cet univers. Chaque section est représentée par un élément emblématique de Mario, offrant une expérience ludique et engageante aux visiteurs</p>
            <div className="rating">ReactJS</div>
            <a href="https://github.com/sabritou"  target="_blank" rel="noopener noreferrer">
      <button className="learn-more">En savoir plus projet / Github</button>
      </a>
        </div>
    </div>


    <div className="cont">
        <div className="movie-info">
            <h2>Plateforme de vente de meubles</h2>
            <div className='photo'>
            <img  className='photo' src="./img/platformemeuble.jpg"/>
            </div>
            <hr></hr>
            <p>Lauréline Fleury lance "Anciens meubles pour une nouvelle vie", une entreprise de vente de meubles d'occasion, nécessitant un site web pour afficher et gérer son stock. Les contraintes imposent un déploiement web en deux semaines, avec des équipes définies travaillant sur le front-end et le back-end. <br></br> Les fonctionnalités requises incluent une page principale présentant les meubles en vente, une page d'administration pour gérer les produits, et la possibilité pour les utilisateurs de créer un compte pour rechercher des meubles. De plus, Lauréline souhaite une fonctionnalité de proposition de meubles à vendre, accessible uniquement aux utilisateurs connectés. Ainsi pour faciliter le projet une partie du code a été pré-faite.  </p>
            <div className="rating">Javascript</div>
        </div>
    </div>


    <div className="cont">
        <div className="movie-info">
            <h2>Résaux social PHP</h2>
            <div className='photo'>
            <img className='photo' src="./img/phprésauc.jpg.webp"/>
            </div>
            <hr></hr>
            <p>Ce projet consiste à créer un réseau social basé sur PHP, inspiré de plateformes telles que Twitter ou Facebook. À travers trois niveaux de difficulté, il vise à familiariser les développeurs avec la construction de sites web dynamiques, l'interaction avec une base de données, la gestion des formulaires HTML, l'authentification des utilisateurs, et d'autres aspects liés au développement web. Les niveaux progressifs couvrent des concepts allant de la manipulation de données et la génération de contenu HTML à partir de PHP jusqu'à la mise en œuvre d'inscription, de connexion, et de fonctionnalités avancées telles que l'analyse des hashtags et la gestion des réponses aux messages. Le projet offre une expérience pratique pour les développeurs débutants et avancés, en utilisant des ressources préexistantes</p>
            <div className="rating">PHP</div>
        </div>
    </div>


    <div className="cont">
        <div className="movie-info">
            <h2>Extension de navigateur</h2>
            <div className='photo'>
            <img className='photo' src="./img/extensionnav.jpg"/>
            </div>
            <hr></hr>
            <p>Ce projet vise à développer une extension pour navigateur en effet notre projet était pour but de prise de note rapide et enregistré sous forme de liste en se concentrant sur le langage JavaScript et en utilisant Chrome comme navigateur cible. L'exploration de JavaScript et l'apprentissage de la création d'extensions en utilisant HTML, CSS et JavaScript. Nous avont eu l'occasion de manipuler des API et de développer leurs propres fonctionnalités, tout en s'organisant en équipe pour diviser le travail et utiliser des outils de suivi de projet pour communiquer et suivre les progrès.</p>
            <div className="rating">Javascript</div>
        </div>
    </div>


    <div className="cont">
        <div className="movie-info">
            <h2>Dataviz</h2>
            <div className='photo'>
            <img className='photo' src="./img/dataviz.png"/>
            </div>
            <hr></hr>
            <p>Ce projet consiste à développer une application web pour visualiser des données de manière dynamique. Les participants ont le choix entre plusieurs options, dont la création d'une animation basée sur l'heure actuelle ou la connexion à une API externe pour obtenir des données en temps réels. Notre projet était sur la météo données en temps réels de plus notre application web était faite de nos mains ainsi nous avions que à apporter l'api en javascript.  </p>
            <div className="rating">HTML CSS / API </div>
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

export default projet