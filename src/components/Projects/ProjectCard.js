import React from 'react';
import './ProjectCard.css';

function ProjectCard({ project }) {
  const { title, description, tags, github, site, image, isVideo, color, featured } = project;
  const primaryHref = site || github;

  return (
    <article className={`project-card ${featured ? 'project-card--featured' : ''}`}>
      <a
        href={primaryHref}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card__link"
        aria-label={site ? `Voir le site de ${title}` : `Voir ${title} sur GitHub`}
      >
        <div className="project-card__media">
          {image ? (
            isVideo ? (
              <video
                src={image}
                muted
                loop
                playsInline
                onMouseEnter={(e) => e.target.play()}
                onMouseLeave={(e) => { e.target.pause(); e.target.currentTime = 0; }}
              />
            ) : (
              <img src={image} alt={title} loading="lazy" />
            )
          ) : (
            <div
              className="project-card__placeholder"
              style={{ background: `linear-gradient(135deg, ${color}33, ${color}11)` }}
            >
              <span style={{ color }}>{title.charAt(0)}</span>
            </div>
          )}
          <div className="project-card__overlay">
            {site ? (
              <span className="project-card__github-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                Voir le site officiel
              </span>
            ) : (
              <span className="project-card__github-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                Voir sur GitHub
              </span>
            )}
          </div>
          {featured && <span className="project-card__badge">Featured</span>}
        </div>

        <div className="project-card__body">
          <h3 className="project-card__title">{title}</h3>
          <p className="project-card__desc">{description}</p>
          <ul className="project-card__tags">
            {tags.map((tag) => (
              <li key={tag} style={{ borderColor: `${color}44`, color }}>{tag}</li>
            ))}
          </ul>
        </div>
      </a>
      {site && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card__source"
          aria-label={`Voir le code source de ${title} sur GitHub`}
        >
          Code source sur GitHub
        </a>
      )}
    </article>
  );
}

export default ProjectCard;
