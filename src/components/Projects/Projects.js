import React, { useState } from 'react';
import { projects } from '../../data/projects';
import ProjectCard from './ProjectCard';
import './Projects.css';

const allTags = ['Tous', ...new Set(projects.flatMap((p) => p.tags))];

function Projects() {
  const [filter, setFilter] = useState('Tous');

  const filtered = filter === 'Tous'
    ? projects
    : projects.filter((p) => p.tags.includes(filter));

  return (
    <section id="projets" className="projects">
      <p className="section-label">Projets</p>
      <h2 className="section-title">Mes réalisations</h2>
      <p className="section-subtitle">
        Une sélection de mes projets open source disponibles sur GitHub —
        du développement web aux bots Discord en passant par le game dev.
      </p>

      <div className="projects__filters">
        {allTags.map((tag) => (
          <button
            key={tag}
            className={`projects__filter ${filter === tag ? 'projects__filter--active' : ''}`}
            onClick={() => setFilter(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="projects__grid">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="projects__cta">
        <a
          href="https://github.com/sabritou"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          Voir tous mes repos sur GitHub
        </a>
      </div>
    </section>
  );
}

export default Projects;
