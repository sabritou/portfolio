import React from 'react';
import { skills } from '../../data/skills';
import './Skills.css';

function Skills() {
  return (
    <section id="competences" className="skills">
      <p className="section-label">Compétences</p>
      <h2 className="section-title">Ce que je maîtrise</h2>
      <p className="section-subtitle">
        Un ensemble de technologies et d'outils que j'utilise au quotidien
        pour concevoir des solutions web performantes.
      </p>

      <div className="skills__grid">
        {skills.map((group) => (
          <div key={group.category} className="skills__group">
            <h3 className="skills__category">{group.category}</h3>
            <ul className="skills__list">
              {group.items.map((skill) => (
                <li key={skill} className="skills__tag">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
