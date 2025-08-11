import React from 'react';
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

function ProjectCard({ title, description, technologies, link }) {
 return (
  <div className='project-card'>
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
 return (
  <div className='projects-page'>
   <div className='projects-header'>
    <h1>My Projects</h1>
    <p>Here are some of the projects I've worked on.</p>
   </div>
   <div className='projects-container'>
    {projects.map((project) => (
     <ProjectCard
      key={project.id}
      title={project.title}
      description={project.description}
      technologies={project.technologies}
      link={project.link}
     />
    ))}
   </div>
    <Footer />
  </div>
 );
}

export default Projects;