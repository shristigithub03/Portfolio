// Certificate.js
import React, { useState } from 'react';
import './Certificate.css';

const Certificate = () => {
  const [activeCert, setActiveCert] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  
  const certificates = [
    {
      id: 1,
      title: "Ethnus Mern FullStack Certification",
      issuer: "Ethnus",
      issueDate: "May 2025",
      //credentialLink: "https://coursera.org/verify/XYZ123",
      image: "/images/Ethnus certificate.png",
      skills: ["HTML", "JavaScript", "CSS", "React.js", "Node.js"]
    },
    {
      id: 2,
      title: "Python Certification",
      issuer: "Kaggle",
      issueDate: "May 2025",
      //credentialLink: "https://www.credly.com/badges/abc123",
      image: "/images/Kaggle certificate.png",
      skills: ["Python"]
    },
    {
      id: 3,
      title: "Cloud Technical Series",
      issuer: "Google Cloud",
      issueDate: "December 2024",
      //credentialLink: "https://freecodecamp.org/certification/username",
      image: "/images/Google cloud certificate.png",
      skills: ["AI Powered App Dev", "Cost Optimization", "Cloud Security"]
    },
    {
      id: 4,
      title: "Postman API Fundamental Student Expert",
      issuer: "Postman",
      issueDate: "November 2024",
      //credentialLink: "https://freecodecamp.org/certification/username",
      image: "/images/Postman certificate.png",
      skills: ["API Integration", "API"]
    },
    {
      id: 5,
      title: "Infosys Springboard Certification",
      issuer: "Infosys Springboard 6.0",
      issueDate: "June 2025",
      //credentialLink: "https://freecodecamp.org/certification/username",
      image: "/images/infosys certificate.png", // Changed from external URL to local path
      skills: ["Artificial Intelligence", "Computer Vision", "OpenCV", "Deep Learning", "Generative AI", "NLP", "Prompt Engineering", "Data Science"]
    },
    {
      id: 6,
      title: "Blockchain Developer",
      issuer: "IBM",
      issueDate: "April 2025",
     // credentialLink: "https://freecodecamp.org/certification/username",
      image: "/images/IBM certificate.png",
      skills: ["Blockchain"]
    }
  ];

  const handleVerify = (link) => {
    window.open(link, '_blank');
  };

  const openImageModal = (image) => {
    setCurrentImage(image);
    setShowModal(true);
  };

  const closeImageModal = () => {
    setShowModal(false);
    setCurrentImage('');
  };

  return (
    <section id="certifications" className="certifications">
      <h2 className="section-title">Certifications & Credentials</h2>
      <p className="section-subtitle">Verified skills and accomplishments</p>
      
      <div className="certificates-grid">
        {certificates.map(cert => (
          <div key={cert.id} className="certificate-card">
            <div className="certificate-image-container" onClick={() => openImageModal(cert.image)}>
              <img 
                src={cert.image} 
                alt={cert.title}
                className="certificate-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="certificate-image-placeholder">
                <i className="fas fa-certificate"></i>
                <p>View Certificate</p>
              </div>
              <div className="certificate-overlay">
                <i className="fas fa-search-plus"></i>
              </div>
            </div>
            
            <div className="certificate-content">
              <h3 className="certificate-title">{cert.title}</h3>
              <p className="certificate-issuer">{cert.issuer}</p>
              <p className="certificate-date">{cert.issueDate}</p>
              
              <div className="certificate-skills">
                {cert.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            
            <div className="certificate-actions">
              {/* <button 
                className="verify-btn"
                onClick={() => handleVerify(cert.credentialLink)}
              >
                Verify Credential
              </button> */}
              <button 
                className="view-btn"
                onClick={() => openImageModal(cert.image)}
              >
                View Certificate
              </button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={closeImageModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeImageModal}>
              <i className="fas fa-times"></i>
            </button>
            <img src={currentImage} alt="Certificate" className="certificate-modal-image" />
            <p className="modal-note">Click outside the image to close</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificate;