import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="accueil" className="hero">
      <div className="hero__content animate-fade-up">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Disponible pour de nouveaux projets
        </div>

        <h1 className="hero__title">
          Salut, je suis{' '}
          <span className="hero__name">Sabri Kradaoui</span>
        </h1>

        <p className="hero__subtitle">
          Développeur Fullstack passionné par le développement web et le front-end.
          Basé à Lyon, je crée des expériences digitales modernes et performantes.
        </p>

        <div className="hero__actions">
          <a href="#projets" className="btn btn-primary">
            Voir mes projets
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href={`${process.env.PUBLIC_URL}/cvsabridev.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Télécharger mon CV
          </a>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-number">11+</span>
            <span className="hero__stat-label">Projets GitHub</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">Fullstack</span>
            <span className="hero__stat-label">Développeur Web</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">Lyon</span>
            <span className="hero__stat-label">France 🇫🇷</span>
          </div>
        </div>
      </div>

      <div className="hero__visual" aria-hidden="true">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__code">
          <div className="hero__code-bar">
            <span /><span /><span />
          </div>
          <pre>{`const dev = {
  name: "Sabri Kradaoui",
  role: "Fullstack Dev",
  stack: ["React", "Node", "PHP"],
  location: "Lyon, FR",
  passion: "Web & UI"
};`}</pre>
        </div>
      </div>
    </section>
  );
}

export default Hero;
