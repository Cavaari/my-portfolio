import React from 'react';
import './Skills.css';
import Footer from '../Footer';

function Skills() {
  const skillsData = [
    { name: 'JavaScript', symbol: 'JS' },
    { name: 'React', symbol: 'R' },
    { name: 'HyperText Markup Language', symbol: 'HTML' },
    { name: 'Cascading Style Sheets', symbol: 'CSS' },
    { name: 'Node.js', symbol: 'N' },
    { name: 'Java', symbol: 'J' },
    { name: 'C', symbol: 'C' },
    { name: 'R Studio', symbol: 'R' },
    { name: 'Python', symbol: 'Py' },
    { name: 'Structured Query Language', symbol: 'SQL' },
    { name: 'Hypertext Preprocessor', symbol: 'PHP' },
    { name: 'Git', symbol: 'G' },
    { name: 'GitHub', symbol: 'GH' },
    { name: 'Visual Studio Code', symbol: 'VSC' },
    { name: 'IntelliJ', symbol: 'I' },
    { name: 'Postman', symbol: 'P' },
    { name: 'AutoDesk Fusion 360', symbol: 'F360' },
    { name: 'LightBurn', symbol: 'LB' },
    
  ];

  return (
    <div>
        <div className="skills-container">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="symbol">{skill.symbol}</div>
              <h3>{skill.name}</h3>
            </div>
          ))}
          <div className='background'></div>
        </div>
        <Footer />
    </div>    
  );
}

export default Skills;