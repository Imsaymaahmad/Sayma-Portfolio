import React from 'react';
import '../theme/ProjectCard.module.css'

function ProjectCard({ src, link, h3, p }) {
  return (
    <a id='card' href={link} target="_blank">
      <img src={src} alt={`${h3} logo`} />
      <h3 id='card-h3' >{h3}</h3>
      <p id='card-p'>{p}</p>
    </a>
  );
}

export default ProjectCard;