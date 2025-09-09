import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: "HTML5", level: 95, icon: "fab fa-html5" },
    { name: "CSS3", level: 90, icon: "fab fa-css3-alt" },
    { name: "JavaScript", level: 88, icon: "fab fa-js-square" },
    { name: "React", level: 85, icon: "fab fa-react" },
    { name: "Node.js", level: 82, icon: "fab fa-node-js" },
    { name: "C++", level: 80, icon: "icon-cpp" }, // Custom class for C++
    { name: "Git", level: 90, icon: "fab fa-git-alt" },
    { name: "MySQL", level: 75, icon: "icon-mysql" } // Custom class for MySQL
  ];

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-container">
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-icon">
                <i className={skill.icon}></i>
              </div>
              <div className="skill-info">
                <h3>{skill.name}</h3>
                <div className="skill-progress">
                  <div 
                    className="skill-progress-bar" 
                    style={{ width: `${skill.level}%` }}
                  >
                    <span>{skill.level}%</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="skills-visualization">
          <div className="orbital-system">
            <div className="central-orb">
              <i className="fas fa-code"></i>
            </div>
            {skills.slice(0, 6).map((skill, index) => (
              <div 
                key={index} 
                className="orbiting-skill"
                style={{ 
                  animationDelay: `${index * 0.5}s`,
                  transform: `rotate(${index * 60}deg) translateX(100px) rotate(-${index * 60}deg)`
                }}
              >
                <i className={skill.icon}></i>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;