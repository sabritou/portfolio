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
    <button className="learn-more">AdaTechschool développeurs web <div className="director"><span>Stack :</span> Cette école m’a appris beaucoup de choses surtout à approfondir mes connaissances dans le développement web, création du site web ce que je réalise le plus de la conception avec figma à la planification avec notion. 
    Chez Ada nous avons vu aussi les bonnes pratiques de programmations telles le clean code, les méthodes agiles et bien plus, la collaboration un sujet important, beaucoup de travaux en groupe qui ont mené à travailler la communication et l'organisation discuter de feature, se partager des taches et bien d'autres.</div>
</button>
      <button className="learn-more buttonxp">Préparateur commande drive, <div className="director"><span>Tech : </span> Cela a été le tout premier pas dans le monde du travail assez stressant au début mais avec le temps je me suis adapté j'ai appris de nouvelles choses telles que la relation client qui ma apporter et renforcer la confiance en soi, apprendre à servir le client, aider ainsi que de l'autonomie la réalisation de tâche seule telle que nettoyer, ranger, travailler proprement.</div>
      relation client</button>
      
      
        </div>
    </div>



    


        
        </>

     )
}
export default propos