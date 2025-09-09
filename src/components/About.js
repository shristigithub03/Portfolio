import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a passionate full-stack developer with expertise in creating dynamic, 
            user-friendly web applications. With a strong foundation in both front-end 
            and back-end technologies, I bring ideas to life with clean, efficient code.</p>
            <p>I am an enthusiastic and driven Computer Science Engineering undergraduate at VIT Bhopal University, with a passion for technology and innovation. I thrive in fast-paced environments, consistently demonstrating initiative, adaptability, and a growth mindset. I approach every challenge as an opportunity to learn and improve, with a strong commitment to excellence and integrity. My proactive attitude, curiosity for emerging technologies, and eagerness to take on responsibilities make me a valuable team player and a promising future professional. I’m always ready to explore new ideas, solve real-world problems, and contribute meaningfully to impactful projects.</p>
          
          <p>
            When I'm not coding, you can find me exploring new technologies, 
            contributing to open-source projects, or enjoying outdoor activities.
          </p>
          <div className="about-stats">
            <div className="stat">
              <h3>10+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat">
              <h3>10+</h3>
              <p>Certificate</p>
            </div>
            <div className="stat">
              <h3>2</h3>
              <p>Internship Experience</p>
            </div>
          </div>
        </div>
        <div className="about-image">
          <div className="image-container">
            <img src="/images/about.jpg" alt="About Me" />
            <div className="image-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;