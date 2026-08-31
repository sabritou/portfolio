import React from 'react';
import './ProjectCard.css';

function ProjectCard({ project }) {
  const { title, description, tags, video, image, color, featured } = project;

  return (
    <article className={`project-card ${featured ? 'project-card--featured' : ''}`}>
      <div className="project-card__media">
        {video ? (
          <video
            src={video}
            controls
            playsInline
            preload="metadata"
            poster={image}
            aria-label={`Démonstration vidéo — ${title}`}
          />
        ) : image ? (
          <img src={image} alt={title} loading="lazy" />
        ) : (
          <div
            className="project-card__placeholder"
            style={{ background: `linear-gradient(135deg, ${color}33, ${color}11)` }}
          >
            <span style={{ color }}>{title.charAt(0)}</span>
          </div>
        )}
        {featured && <span className="project-card__badge">Featured</span>}
        {!video && (
          <span className="project-card__no-video">Aperçu statique</span>
        )}
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
    </article>
  );
}

export default ProjectCard;
