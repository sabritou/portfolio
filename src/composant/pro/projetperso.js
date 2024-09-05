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
            <h2>LyCloud Agency</h2>
            <div className='photo'>
            <img className='photo' src="./img/lycloud.png"/>
            </div>
            <hr></hr>
            <p>
            Un projet de services de développement web, où je mets en pratique mes compétences et ma créativité !</p>
            <p>
                
            </p>

            <a href="https://sabritou.github.io/LyCloudAgencyOfficiel/"  target="_blank" rel="noopener noreferrer">
      <button className="learn-more">Lien du site</button>
      </a>
        </div>
    </div>



    <div className="cont">
        <div className="movie-info">
            <h2>LyCloud News</h2>
            <div className='photo'>
            <img className='photo'src="./img/backgroundmario.jpeg"/>
            </div>
            <hr></hr>
            <p>J'ai créé un communiqué de presse version journal pour vous donner un aperçu amusant  de notre entreprise et de nos projets. Réalisations avec boostrap
            </p>

            <p>Le site web de LyCloud News est une vitrine numérique en suivant un thème du style magazine, les info ainsi ce site présente les services offerts par l'entreprise dans le domaine du développement web. Il fournit des informations sur les différents services proposés.</p>
          
            <a href="https://sabritou.github.io/lycloudnews/"  target="_blank" rel="noopener noreferrer">

            <button className="learn-more">Lien du site</button>
            </a>
        </div>
    </div> 
</div>
    </>
    )
}

export default pro