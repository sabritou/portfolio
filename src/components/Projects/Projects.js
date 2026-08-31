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
    <section id="projets" className="projects section--alt">
      <p className="section-label">Projets</p>
      <h2 className="section-title">Mes réalisations</h2>
      <p className="section-subtitle">
        Découvrez mes projets web en vidéo — présentations et démonstrations
        directement sur le site.
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
    </section>
  );
}

export default Projects;
