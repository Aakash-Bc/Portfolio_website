import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaLayerGroup, FaDesktop, FaTools, FaUsers } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    {
      category: 'MERN Stack',
      icon: <FaLayerGroup />,
      items: ['MongoDB', 'Express', 'React', 'Node.js']
    },
    {
      category: 'Languages',
      icon: <FaCode />,
      items: ['C', 'C++', 'Java Basics', 'PHP Basics', 'JavaScript']
    },
    {
      category: 'Frontend',
      icon: <FaDesktop />,
      items: ['HTML5', 'CSS3', 'Vite', 'Tailwind CSS']
    },
    {
      category: 'Database',
      icon: <FaDatabase />,
      items: ['SQL', 'MySQL', 'MongoDB']
    },
    {
      category: 'Soft Skills',
      icon: <FaUsers />,
      items: ['Communication', 'Teamwork', 'Leadership', 'Problem Solving']
    },
    {
      category: 'Other',
      icon: <FaTools />,
      items: ['Computer Vision', 'Git', 'OOP']
    },
  ];

  return (
    <section id="skills" className="section-container skills-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0 }}
        >
          Technical Proficiency
        </motion.h2>

        <div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <motion.div 
              key={index} 
              className="skill-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.0, delay: index * 0.1 }}
            >
              <div className="card-header">
                <div className="cat-icon">{skillGroup.icon}</div>
                <h3 className="skill-category">{skillGroup.category}</h3>
              </div>
              <div className="skill-tags">
                {skillGroup.items.map((skill, idx) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-section {
          background-image: url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          position: relative;
          padding-top: 6px; /* Removed top padding */
        }

        .skills-section::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: rgba(5, 5, 5, 0.95); /* Deep dark overlay */
          backdrop-filter: blur(5px);
          top: 0;
          left: 0;
          z-index: 0;
        }

        .skills-section .container {
          position: relative;
          z-index: 2;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          position: relative;
          z-index: 1;
        }

        .skill-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          padding: 2rem;
          border-radius: var(--border-radius-lg);
          border: 1px solid rgba(255,255,255,0.05);
          transition: all 0.4s ease;
          display: flex;
          flex-direction: column;
        }

        .skill-card:hover {
          transform: translateY(-8px);
          border-color: var(--accent-primary);
          background: rgba(255, 255, 255, 0.05);
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .cat-icon {
          font-size: 1.5rem;
          color: var(--accent-secondary);
          background: rgba(255,255,255,0.05);
          padding: 0.75rem;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.3s;
        }

        .skill-card:hover .cat-icon {
          background: var(--accent-primary);
          color: white;
          transform: scale(1.1) rotate(5deg);
        }

        .skill-category {
          font-size: clamp(1.2rem, 3vw, 1.4rem);
          color: var(--text-primary);
          font-weight: 700;
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .skill-tag {
          background: var(--bg-secondary);
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.85rem;
          color: var(--text-secondary);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .skill-tag:hover {
          background: transparent;
          border-color: var(--accent-secondary);
          color: var(--text-primary);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 1.25rem;
          }

          .skill-card {
            padding: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .skills-grid {
            grid-template-columns: 1fr;
            max-width: 320px;
            margin: 0 auto;
          }

          .skill-tag {
            font-size: 0.8rem;
            padding: 0.4rem 0.8rem;
          }
        }

      `}</style>
    </section>
  );
};

export default Skills;
