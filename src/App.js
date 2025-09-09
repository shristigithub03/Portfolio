import React from 'react';
import './App.css';
// Import all your components
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experiences'; // Experience component
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certificate from './components/Certificate'; // Import the Certificate component
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Experience /> {/* This line adds the Experiences section */}
      <Projects />
      <Skills />
      <Certificate /> {/* Add the Certificate component here */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;