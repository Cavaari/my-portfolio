import React from 'react';
import './Skills.css';
import Footer from '../Footer';

function Skills() {
  const skillsData = [
    { name: 'JavaScript', symbol: 'JS' },
    { name: 'TypeScript', symbol: 'TS' },
    { name: 'React', symbol: 'R' },
    { name: 'React Native CLI', symbol: 'RNC' },
    { name: 'Expo CLI', symbol: 'E' },
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
    { name: 'Docker', symbol: 'D' },
    { name: 'Firebase', symbol: 'F' },
    { name: 'IntelliJ', symbol: 'I' },
    { name: 'Postman', symbol: 'P' },
    { name: 'AutoDesk Fusion 360', symbol: 'F360' },
    { name: 'LightBurn', symbol: 'LB' },
    { name: 'Figma', symbol: 'F' },
    { name: 'Canva', symbol: 'C' },
    { name: 'Microsoft Office Suite', symbol: 'MS' },
    { name: 'Google Workspace', symbol: 'GW' },
    { name: 'Agile Methodologies', symbol: 'AM' },
    { name: 'Scrum Framework', symbol: 'SF' },
    { name: 'Kanban Methodology', symbol: 'KM' },
    { name: 'Software Development Life Cycle', symbol: 'SDLC' },
    { name: 'Lean Software Development', symbol: 'LSD' },
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