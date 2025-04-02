import React from 'react';
import './Experience.css';
import '../../App.css'; 
import Footer from '../Footer';
import { FaGraduationCap, FaCode, FaUsers, FaCertificate } from 'react-icons/fa'; 

function Experience() {
  return (
    <>
       <div> 
        <div className="experience-container">

          {/* Academic Experience */}
          <div className="experience-section">
            <h2><FaGraduationCap className="icon" /> Academic Experience</h2>
            <div className="experience-card">
              <h3>University of Guelph – Software Engineering Projects</h3>
              <ul>
                <p>Collaborated on <strong>multiple team projects</strong>, including:</p>
                <li><strong>Course selection platform redesign</strong></li>
                <li><strong>Gaming website allowing for multiplayer functionality using web sockets</strong></li>
                <li><strong>Social Media Mobile app redesign</strong></li>
                <li>Applied Agile methodologies and full-stack development principles.</li>
              </ul>
            </div>
            <div className="experience-card">
              <h3>Caribbean Culture Club – Community Outreach Officer</h3>
              <ul>
                <li>Organized events fostering cultural unity, including a unique <strong>games night</strong> with 100+ attendees.</li>
                <li>Managed logistics and promoted inclusivity through creative engagement.</li>
              </ul>
            </div>
          </div>

          {/* Technical Initiatives */}
          <div className="experience-section">
            <h2><FaCode className="icon" /> Technical Initiatives</h2>
            <div className="experience-card">
              <h3>Freelance Web Development</h3>
              <ul>
                <li>Developed a <strong>portfolio website</strong> highlighting personal projects and skills.</li>
                <li>Utilized React.js, CSS, and Github pages for deployment.</li>
                <li>Improved site performance by optimizing rendering.</li>
              </ul>
            </div>
            <div className="experience-card">
              <h3>Mobile Web App Development</h3>
              <ul>
                <li>Developing a simple <strong>mobile web app</strong> highlighting hidden gems on the island of Saint Lucia and how to navigate to them.</li>
                <li>Utilized React-Native CLI, Expo CLI, Firebase for authentication and database management, and Github pages for deployment.</li>
                <li>Improved site performance by optimizing rendering.</li>
              </ul>
            </div>
            <div className="experience-card">
              <h3>Open-Source Contribution</h3>
              <ul>
                <li>Contributed to a <strong>GitHub repository</strong>.</li>
                <li>Identified and fixed frontend issues.</li>
                <li>Enhanced UI consistency and accessibility.</li>
              </ul>
            </div>
          </div>

          {/* Volunteering & Leadership */}
          <div className="experience-section">
            <h2><FaUsers className="icon" /> Volunteering & Leadership</h2>
            <div className="experience-card">
              <h3>Event Planning & Leadership</h3>
              <ul>
                <li>Led a team to organize a <strong>fundraising event</strong>.</li>
                <li>Raised $1,000+ for student support.</li>
                <li>Coordinated volunteers and managed event logistics.</li>
              </ul>
            </div>
          </div>

          {/* Certifications & Courses */}
          <div className="experience-section">
            <h2><FaCertificate className="icon" /> Certifications & Courses</h2>
            <div className="experience-card">
              <h3>Coursera – Frontend Development Certification</h3>
              <ul>
                <li>Completed an intensive course on <strong>React.js</strong>.</li>
                <li>Learned modern web development techniques.</li>
                <li>Enhanced skills in component-based architecture.</li>
              </ul>
            </div>
          </div>

          <div className='background'></div>
        </div>
        <Footer />
       </div> 
    </>
  );
}

export default Experience;
