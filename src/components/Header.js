import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [showResume, setShowResume] = useState(false);

  const toggleResume = () => {
    setShowResume(!showResume);
  };

  const downloadResume = () => {
    window.open('https://drive.google.com/file/d/1YOUR_FILE_ID/view?usp=sharing', '_blank');
  };

  return (
    <>
      <header className="header" id="home">
        <div className="header-content">
          <div className="profile-container">
            <div className="profile-image float">
              <img src="/images/profile.jpg" alt="Profile" />
              <div className="image-border glow"></div>
            </div>
          </div>
          <h1 className="header-title">Shristi Singh</h1>
          <p className="header-subtitle">Software Developer And Full Stack Developer</p>
          <div className="header-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
            <button className="btn btn-resume" onClick={toggleResume}>
              View Resume
              <span className="btn-sparkle">✨</span>
            </button>
          </div>
        </div>
        <div className="header-background">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
          </div>
        </div>
      </header>

      {showResume && (
        <div className="resume-modal-overlay" onClick={toggleResume}>
          <div className="resume-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={toggleResume}>
              <span className="close-icon">×</span>
            </button>
            
            <div className="pdf-viewer-container">
              <div className="pdf-controls">
                <h3>My Resume</h3>
                {/* <button className="download-pdf-btn" onClick={downloadResume}>
                  <span className="download-icon">⬇️</span>
                  Download PDF
                </button> */}
              </div>
              
              <div className="external-pdf-viewer">
                <div className="pdf-placeholder">
                  <div className="pdf-icon">
                    <i className="fas fa-file-pdf"></i>
                  </div>
                  <h4>Shristi_Singh_Resume.pdf</h4>
                  <p>Click the button below to view or download my resume</p>
                  
                  <div className="pdf-action-buttons">
                    <button 
                      className="view-external-btn"
                      onClick={() => window.open('https://drive.google.com/drive/folders/15wiri8Vx47l8mDQYjPxyap5kEHYcq8DU?usp=sharing', '_blank')}
                    >
                      <i className="fas fa-eye"></i>
                      View Resume
                    </button>
                    <button 
                      className="download-external-btn"
                      onClick={() => window.open('https://drive.google.com/drive/folders/15wiri8Vx47l8mDQYjPxyap5kEHYcq8DU?usp=sharing', '_blank')}
                    >
                      <i className="fas fa-download"></i>
                      Download Resume
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;