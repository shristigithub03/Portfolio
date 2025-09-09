import React from 'react';
import './Footer.css';

const Footer = () => {
  // Function to handle smooth scrolling to sections
  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Add offset for fixed headers if needed
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    } else {
      console.warn(`Element with ID ${sectionId} not found`);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h3>Shristi Singh</h3>
          <p>Software Developer And Full Stack Developer</p>
        </div>
        
        <div className="footer-links">
          <a href="#home" onClick={(e) => { e.preventDefault(); handleScrollToSection('home'); }}>Home</a>
          <a href="#about" onClick={(e) => { e.preventDefault(); handleScrollToSection('about'); }}>About</a>
          <a href="#projects" onClick={(e) => { e.preventDefault(); handleScrollToSection('projects'); }}>Projects</a>
          <a href="#skills" onClick={(e) => { e.preventDefault(); handleScrollToSection('skills'); }}>Skills</a>
          <a href="#experience" onClick={(e) => { e.preventDefault(); handleScrollToSection('experience'); }}>Experience</a>
          <a href="#certificate" onClick={(e) => { e.preventDefault(); handleScrollToSection('certificate'); }}>Certificate</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); handleScrollToSection('contact'); }}>Contact</a>
        </div>
        
        <div className="footer-social">
          <a href="https://www.linkedin.com/in/shristi-singh-91454a251/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/shristigithub03" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="mailto:shristisinghofficial03@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Shristi Singh. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;