import React from 'react';
import './Experience.css';
import '../../App.css'; 
import Footer from '../Footer';
import { FaGraduationCap, FaCode, FaUsers } from 'react-icons/fa'; 

function Experience() {
  return (
    <>
      <div className="experience-page">
        <div className="experience-container">
          <h1 className="experience-header">Experience</h1>

          <div className="experience-card">
            <h3 className="card-title"><FaGraduationCap className="icon" /> University of Guelph – Software Engineering Projects</h3>
            <p>Collaborated on multiple team projects, including:</p>
            <ul>
              <li>Course selection platform redesign</li>
              <li>Gaming website allowing for multiplayer functionality using web sockets</li>
              <li>Social Media Mobile app redesign</li>
              <li>Applied Agile methodologies and full-stack development principles.</li>
            </ul>
          </div>

          <div className="experience-card">
            <h3 className="card-title"><FaUsers className="icon" /> Caribbean Culture Club – Community Outreach Officer</h3>
            <ul>
              <li>Organized events fostering cultural unity, including a unique games night with 100+ attendees.</li>
              <li>Managed logistics and promoted inclusivity through creative engagement.</li>
            </ul>
          </div>

          <div className="experience-card">
            <h3 className="card-title"><FaCode className="icon" /> Freelance Web Development</h3>
            <ul>
              <li>Developed a portfolio website highlighting personal projects and skills.</li>
              <li>Utilized React.js, CSS, and Github pages for deployment.</li>
              <li>Improved site performance by optimizing rendering.</li>
            </ul>
          </div>

          <div className="experience-card">
            <h3 className="card-title"><FaCode className="icon" /> Mobile Web App Development</h3>
            <ul>
              <li>Developing a simple mobile web app highlighting hidden gems on the island of Saint Lucia and how to navigate to them.</li>
              <li>Utilized React-Native CLI, Expo CLI, Firebase for authentication and database management, and Github pages for deployment.</li>
              <li>Improved site performance by optimizing rendering.</li>
            </ul>
          </div>
          
          <div className="experience-card">
            <h3 className="card-title"><FaCode className="icon" /> Open-Source Contribution</h3>
            <ul>
              <li>Contributed to a GitHub repository.</li>
              <li>Identified and fixed frontend issues.</li>
              <li>Enhanced UI consistency and accessibility.</li>
            </ul>
          </div>

          <div className="experience-card">
            <h3 className="card-title"><FaUsers className="icon" /> Event Planning & Leadership</h3>
            <ul>
              <li>Led a team to organize a fundraising event.</li>
              <li>Raised $1,000+ for student support.</li>
              <li>Coordinated volunteers and managed event logistics.</li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Experience;