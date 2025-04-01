// AboutMe.js

import React from 'react';
import './AboutMe.css';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

function AboutMe() {
  return (
    <>
      <div className='background'></div>
      <div className="aboutMe-container">
        <div className="about-content">
          <h1>About Cavaari</h1>
        <div className="profile-picture">
        <img src={process.env.PUBLIC_URL + '/images/Profile Photo.jpg'} alt="Profile" />

        </div>
          <p>
            "I am a dedicated fourth-year university student at the University of Guelph, majoring in Software Engineering
            and minoring in Business. My journey as a software engineer began with a genuine passion for problem-solving, 
            and it has since evolved into a profound commitment to pushing the boundaries of technology. Armed with a solid 
            foundation in computer science learned at the university and a relentless curiosity, I thrive on transforming 
            innovative ideas into robust, scalable, and efficient software solutions.
            
            <br></br>
            <br></br>
            Throughout my academic journey at the University of Guelph, I've had the privilege of delving deep into the 
            theoretical underpinnings of computer science while also gaining hands-on experience in practical applications
            and specifcally the technicalities of software design. My coursework has provided me with a strong understanding
            of front-end development using languages such as HTML, CSS and Javascript combined with frameworks such as React
            and Node.js, as well as a full understanding in back-end development and a comprehensive understanding in databases 
            using SQL. I have also gained a strong understanding of data structures and algorithmns and recently Artificial Intelligence 
            and I have consistently sought opportunities to apply this knowledge in real-world scenarios. As a fourth-year student, 
            I am excited to bring the culmination of my academic endeavors to the professional realm.  I am eager to leverage my academic 
            insights and practical experience to contribute meaningfully to the field of software engineering. 
            
            <br></br>
            <br></br>
            What sets me apart is not only my academic achievements but also my ability to communicate complex ideas effectively which I learned
            being apart of many teams and clubs. I believe in the power of collaboration and effective communication to drive successful software 
            projects. Beyond my academic pursuits, I am a lifelong learner who stays abreast of industry trends and best practices. I am currently 
            seeking new opportunities to apply and expand my skills, and I am confident that my academic background, coupled with my hands-on experience, 
            positions me as a valuable asset to any dynamic team. If you are looking for a dedicated professional with a passion for innovation and a 
            proven track record of delivering high-quality software solutions, I would love to connect and explore how I can bring value to your organization.
            
            "
          </p>
          <Link to={`${process.env.PUBLIC_URL}/Cavaari Taylor.pdf`} target="_blank" rel="noopener noreferrer" className="resume-button">Resume</Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutMe;
