import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  
  const projects = [
    {
      title: "Assetra",
      description: "Assetra is a full-stack, AI-enhanced peer-to-peer rental platform that enables users to rent or lend underutilized items.",
      techstack:"React,TypeScript,Tailwind CSS,Node.js,Express.js,MongoDB,MistralAPI",
      image: "/images/project1.jpg",
      technologies: ["React", "Node.js", "MongoDB", "TypeScript ","Express.js","MistralAPI"],
      liveLink: "https://assetra.netlify.app/",
      githubLink: "https://github.com/shristigithub03/Assetra-sell-and-rent"
    },
    {
      title: "FemCare ",
      description: "This project involved developing a holistic reproductive wellness platform to destigmatize health issues and move beyond basic tracking. Spearheading front-end development, I crafted an intuitive UI with HTML, CSS, and JavaScript and engineered an AI-powered period tracker with predictive analytics alongside an NLP chatbot for verified medical Q&A. The resulting user-centric platform delivers predictive health insights and instant access to reliable information, empowering users and breaking down taboos through community-driven education and body positivity.",
      image: "/images/project2.jpg",
      technologies: ["HTML", "CSS", "Chatbot Integration"," JavaScript","Python","NLP"],
      // liveLink: "https://example.com",
      githubLink: "https://github.com/shristigithub03/FemCare"
    },
    {
      title: "Devmate:Code Optimizer",
      description: "To overcome key ML development bottlenecks like scarce and imbalanced data and inefficient code, I created an AI-powered tool suite to accelerate the lifecycle. I developed a synthetic data generator using GPT and diffusion models, implemented a SMOTE-based dataset balancer, and engineered a Code Optimizer that leverages GPT-4 and AST profiling to automatically refactor Python code. This enabled rapid prototyping, improved model accuracy via automated balancing, and significantly enhanced code performance by automating complexity optimization.",
     image: "/images/project 3.jpg",
      technologies: ["JavaScript", "Python", "Streamlit","NLP"],
      // liveLink: "https://example.com",
      githubLink: "https://github.com/shristigithub03/Code-optimiser"
    },
    {
      title: "MomGenie",
      description: "I engineered an all-in-one app to support mothers by simplifying task management and promoting mental well-being. This was achieved by integrating AI and personalized tools, including a chatbot, expense tracker, fitness routines, and stress-relief games, all within an intuitive UI featuring planners and a community forum. The application successfully streamlined daily productivity, delivered actionable lifestyle insights, and fostered user engagement through its comprehensive wellness features and community support.",
     image: "/images/project4.jpg",
      technologies: ["JavaScript", "HTML","Chatbot", "CSS3"],
      liveLink: "https://momgenie.vercel.app/",
      githubLink: "https://github.com/shristigithub03/MomGenie"
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-container">
        <div className="project-navigation">
          {projects.map((project, index) => (
            <button
              key={index}
              className={`nav-btn ${index === activeProject ? 'active' : ''}`}
              onClick={() => setActiveProject(index)}
            >
              {project.title}
            </button>
          ))}
        </div>
        
        <div className="project-display">
          <div className="project-card">
            <div className="project-image">
              <img src={projects[activeProject].image} alt={projects[activeProject].title} />
              <div className="project-overlay">
                <div className="project-links">
                  <a href={projects[activeProject].liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                  <a href={projects[activeProject].githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className="fab fa-github"></i> GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>{projects[activeProject].title}</h3>
              <p>{projects[activeProject].description}</p>
              <div className="technologies">
                {projects[activeProject].technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;