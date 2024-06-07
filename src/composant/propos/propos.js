/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import "./propos.css"

function propos() {
    return (

        <>



    <div className="container">
        <div className="movie-info">
            <h2>À Propos de moi !</h2>
            <hr></hr>
            <p>Salut ! C'est moi, Sabri. Après avoir obtenu mon bac et fait une année sabbatique, j'ai décidé de reprendre mes études pour enfin faire ce que j'aime : coder. Actuellement, je suis engagé dans un processus de reconversion chez Ada Tech School. Cette expérience m'offre l'opportunité d'approfondir mes compétences.
               <br></br>Avant de rejoindre cette école, j'ai toujours fait beaucoup de choses seul, c'est-à-dire en tant qu'autodidacte dans la création de sites web. Cela m'a permis d'explorer les bases du développement ainsi que de l'UI/UX.
               <br></br>Finalement, j'ai décidé de poursuivre ma croissance dans cette école, qui représente pour moi une opportunité exceptionnelle de me développer.
               <br></br>Mes passions sont la photographie, le codage, la découverte du monde à travers les voyages, l'écriture, et profiter de chaque instant !</p>

           
            <div className="director"><span>Passions :</span> Coder, photographie, lecture.</div>
            <div className="director"><span>Stack / Tech :</span> Js, HTML, CSS, Reactjs / Git, Notion, Scrum</div>
           
        </div>
    </div>


    <div className="container2">
        <div className="movie-info">
            <h2>Mon expérience professionnelle</h2>
            <div className='movie-img'>
            <img src="./img/ada.png"/>
</div><div className='movie-img'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaCDvgzVp4IndgwpfBRHEz6DmlcaFX9jT6r7W9axe6nA&s"/>
</div>
            <hr></hr>
            <a href="https://adatechschool.fr/ecole/"  target="_blank" rel="noopener noreferrer">
      <button className="learn-more">En savoir plus</button>
      </a>

      <button className="learn-more buttonxp">Préparateur commande drive, relation client</button>
      
      
        </div>
    </div>



    


        
        </>

     )
}
export default propos