
import React, { useState } from 'react';
import './Projects.css'; 
import Footer from '../Footer';

const projects = [
  {
    id: 1,
    title: 'KML Parser',
    description: 'Parsed KML files using a combination of C and JavaScript',
    technologies: 'C, HTML, CSS, JavaScript',
    link: 'https://example.com/project1',
  },
  {
    id: 2,
    title: 'Covid-19 Statistical Analysis',
    description: 'Reviewed, processed, analyzed, and plotted COVID-19 data ',
    technologies: 'Python, SeaBorn, Matplotlib, Pandas',
    link: 'https://github.com/Cavaari/COVID-19-Analytical-Data',
  },
  {
    id: 3,
    title: 'React Website Using Node.js API',
    description: 'My Personal Portfolio using techniques which I possess.',
    technologies: 'React, Node.js, HTML, CSS',
    link: 'https://cavaari.github.io/my-portfolio/',
  },
];

function ProjectCard({ title, description, technologies, link, onClick }) {
  return (
    <div className='project-card' onClick={onClick}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Technologies: {technologies}</p>
      <a href={link} target='_blank' rel='noopener noreferrer'>
        View Project
      </a>
    </div>
  );
}

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
  
    const handleProjectClick = (project) => {
      setSelectedProject(project);
    };
  
    return (
      <div>
        
        <div className='projects-container'>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              link={project.link}
              onClick={() => handleProjectClick(project)}
            />
          ))}
  
          {selectedProject && (
            <div className='selected-project-details'>
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
              <p>Technologies: {selectedProject.technologies}</p>
              <a href={selectedProject.link} target='_blank' rel='noopener noreferrer'>
                View Project
              </a>
            </div>
          )}
        </div>
        <div className='background'></div>
        <Footer />
      </div>
    );
  }
  
  export default Projects;
  