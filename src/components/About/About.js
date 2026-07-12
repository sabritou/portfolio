import React from 'react';
import './About.css';

function About() {
  return (
    <section id="apropos" className="about section--alt">
      <p className="section-label">À propos</p>
      <h2 className="section-title">Qui suis-je ?</h2>
      <p className="section-subtitle">
        Développeur Fullstack basé à Lyon, je conçois et développe des applications web
        modernes avec une attention particulière portée à l'expérience utilisateur.
      </p>

      <div className="about__grid">
        <div className="about__card">
          <div className="about__card-icon">💻</div>
          <h3>Développement Web</h3>
          <p>
            Applications React, sites vitrines, bots Discord et plateformes e-commerce —
            du front au back, je maîtrise l'ensemble de la stack.
          </p>
        </div>

        <div className="about__card">
          <div className="about__card-icon">🎨</div>
          <h3>Design & UI</h3>
          <p>
            Interfaces modernes, responsive et accessibles. Je m'efforce de créer
            des expériences visuelles soignées et intuitives.
          </p>
        </div>

        <div className="about__card">
          <div className="about__card-icon">🚀</div>
          <h3>LyCloud Agency</h3>
          <p>
            Fondateur de LyCloud Agency, une agence de développement web proposant
            des solutions digitales sur mesure pour ses clients.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
