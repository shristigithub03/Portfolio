import React, { useState } from 'react';
import './Experiences.css';

const Experiences = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [activeCard, setActiveCard] = useState(null);

  const experiences = [
    {
      id: 1,
      company: "Infosys Springboard 6.0",
      role: "Program Trainee",
      duration: "September 2025 - Present",
      description: "I completed an intensive training program in Artificial Intelligence and Machine Learning through Infosys. This comprehensive curriculum provided me with deep foundational knowledge in AI concepts and applications. As a result of this program, I earned certifications in both Artificial Intelligence Primer and Artificial Intelligence Foundation examination. These achievements demonstrate my solid understanding of core AI principles and commitment to developing expertise in this evolving field.",
      skills: ["Artificial Intelligence", "computer vision ", "data science", "Deep Learning", "Prompt Engineering"],
      certificate: "/images/Internship 1.png"
    },
    {
      id: 2,
      company: "India Space Lab ",
      role: "India Space Lab Intern",
      duration: "December 2024 - January 2025",
      description: "During my internship, I gained hands-on experience with advanced drone technology and its practical applications. I participated in CanSat and CubeSat satellite programs, learning about satellite design and deployment processes. The program also included astronomy studies focused on celestial navigation and space observation techniques. Additionally, I explored space entrepreneurship and the emerging business opportunities within the evolving space industry."

,
      skills: ["CubeSat", "CanSat", "Space Management"],
      certificate: "/images/Internship 2.png"
    }
  ];

  const handleCardClick = (id) => {
    setActiveCard(activeCard === id ? null : id);
  };

  const showCertificate = (certificateUrl, e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Showing certificate:", certificateUrl);
    setSelectedCertificate(certificateUrl);
  };

  const closeCertificate = () => {
    console.log("Closing certificate modal");
    setSelectedCertificate(null);
  };

  // Handle click outside modal
  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      closeCertificate();
    }
  };

  return (
    <section id="experience" className="experiences-container">
      <div className="experiences-header">
        <h1>Professional Experience</h1>
        <p className="subtitle">
          Here's a journey through my professional growth and the valuable experiences 
          that have shaped my skills as a developer.
        </p>
      </div>

      <div className="experience-cards">
        {experiences.map((exp) => (
          <div 
            key={exp.id} 
            className={`experience-card ${activeCard === exp.id ? 'active' : ''}`}
            onClick={() => handleCardClick(exp.id)}
          >
            <div className="card-header">
              <h2 className="company">{exp.company}</h2>
              <p className="role">{exp.role}</p>
            </div>

            <div className="card-body">
              <div className="detail">
                <div className="duration">
                  <i className="fas fa-calendar-alt"></i>
                  {exp.duration}
                </div>
              </div>

              <div className="detail">
                <h4 className="detail-title">
                  <i className="fas fa-tasks"></i>
                  Responsibilities & Achievements
                </h4>
                <p className="description">{exp.description}</p>
              </div>

              <div className="detail">
                <h4 className="detail-title">
                  <i className="fas fa-code"></i>
                  Technologies Used
                </h4>
                <div className="skills">
                  {exp.skills.map((skill, index) => (
                    <span key={index} className="skill">{skill}</span>
                  ))}
                </div>
              </div>

              <button 
                className="proof-badge"
                onClick={(e) => showCertificate(exp.certificate, e)}
                style={{zIndex: 10, position: 'relative'}}
              >
                <i className="fas fa-award"></i>
                View Certificate
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedCertificate && (
        <div className="certificate-modal show" onClick={handleModalClick}>
          <div className="modal-content">
            <span className="close" onClick={closeCertificate}>&times;</span>
            <h2>Certificate</h2>
            <div className="certificate-image-container">
              <img 
                src={selectedCertificate} 
                alt="Certificate" 
                className="certificate-image"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/600x400/302b63/ffffff?text=Certificate+Not+Found";
                  console.error("Failed to load certificate image:", selectedCertificate);
                }}
                onLoad={() => console.log("Certificate image loaded successfully")}
              />
            </div>
            <div className="modal-actions">
              <a 
                href={selectedCertificate} 
                download 
                className="download-button"
              >
                <i className="fas fa-download"></i>
                Download Certificate
              </a>
              <button className="close-button" onClick={closeCertificate}>
                <i className="fas fa-times"></i>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experiences;