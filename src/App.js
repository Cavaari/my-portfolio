import React from 'react';
import Navbar from './components/Navbar';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Experience from './components/pages/Experience';
import AboutMe from './components/pages/AboutMe';
import Projects from './components/pages/Projects';
import Skills from './components/pages/Skills';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/about me' element={<AboutMe />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/skills' element={<Skills />} />

      </Routes>
    </Router>
    </>
  );
}

export default App;
