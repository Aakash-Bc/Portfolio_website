import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/Profile.jpeg';

const About = () => {
  return (
    <section id="about" className="section-container">
      <div className="container">
        <motion.h2 
          className="section-title about-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0 }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <div className="about-text">
            <motion.div 
              className="bio-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              <p className="about-lead">
                I am a <span className="highlight">BCA student</span> tailored with a strong foundation in computer science and a knack for building efficient digital solutions.
              </p>
              <p>
                My journey in tech began with a curiosity for how things work, which led me to master foundational languages like C and C++.
                Today, I leverage modern frameworks like React and powerful backends like PHP and Java to create holistic applications.
              </p>
              <p>
                Whether it's developing a complex <span className="highlight">Movie Ticket Booking System</span> or an innovative <span className="highlight">Eye Blink Detection System</span> using Computer Vision,
                I am always eager to tackle new challenges and expand my skillset.
              </p>
            </motion.div>

            <motion.div 
              className="education-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, delay: 0.4 }}
            >
              <h3 className="edu-title">Education</h3>
              <div className="edu-list">
                <div className="edu-item">
                  <div className="edu-dot"></div>
                  <div className="edu-info">
                    <span className="degree">Bachelors in Computer Application (BCA)</span>
                    <span className="school">Citizen College, Pokhara University</span>
                    <span className="location">Kumaripati, Lalitpur</span>
                    <span className="year">Running 8th Semester</span>
                  </div>
                </div>
                
                <div className="edu-item">
                  <div className="edu-dot"></div>
                  <div className="edu-info">
                    <span className="degree">High School (+2)</span>
                    <span className="school">Tribhuvan Model Secondary School</span>
                    <span className="location">Kohalpur, Banke</span>
                    <span className="year">Graduated 2022</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="about-right">
            <motion.div 
              className="about-image-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.6 }}
            >
              <div className="profile-img-wrapper">
                <img src={profileImg} alt="Aakash" className="profile-img" />
              </div>
            </motion.div>
            
            <div className="about-stats">
              <StatItem end={5} suffix="+" label="Major Projects" delay={0.8} />
              <StatItem end={8} suffix="+" label="Tech Skills" delay={1.0} />
              <StatItem end={100} suffix="%" label="Dedication" delay={1.2} />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .section-container {
          padding: 0 0 var(--section-spacing) 0; /* Removed top padding */
          background-image: url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          position: relative;
        }

        .section-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(5, 5, 5, 0.9); /* Dark overlay */
          z-index: 0;
        }

        .container {
          position: relative;
          z-index: 1;
        }

        .about-content {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 4rem;
          align-items: flex-start;
        }

        .about-lead {
          font-size: 1.25rem;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
          line-height: 1.8;
        }

        .bio-card {
          background: var(--bg-card);
          padding: 2rem;
          border-radius: var(--border-radius-lg);
          border: none; /* Removed border */
          box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
          margin-bottom: 2rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .bio-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(to bottom, var(--accent-primary), var(--accent-secondary));
          opacity: 0.7;
        }

        .bio-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent-primary);
          box-shadow: 0 20px 40px -10px rgba(109, 40, 217, 0.2);
        }

        .about-text p {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }

        .about-text p:last-child {
          margin-bottom: 0;
        }

        .highlight {
          color: var(--accent-primary);
          font-weight: 600;
        }

        .education-card {
          background: var(--bg-card);
          padding: 2rem;
          border-radius: var(--border-radius-lg);
          border: none;
          box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
          margin-top: 2rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .education-card::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(to bottom, var(--accent-secondary), var(--accent-primary));
          opacity: 0.7;
        }

        .education-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px -10px rgba(217, 70, 239, 0.2);
        }

        .edu-title {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .edu-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          position: relative;
        }

        .edu-list::before {
          content: '';
          position: absolute;
          left: 5px;
          top: 10px;
          bottom: 10px;
          width: 2px;
          background: rgba(255, 255, 255, 0.05);
          z-index: 1;
        }

        .edu-item {
          display: flex;
          gap: 1.5rem;
          position: relative;
        }

        .edu-dot {
          width: 12px;
          height: 12px;
          background: var(--accent-primary);
          border-radius: 50%;
          margin-top: 6px;
          flex-shrink: 0;
          box-shadow: 0 0 10px var(--accent-glow);
          position: relative;
          z-index: 2;
        }

        .edu-info {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .degree {
          font-weight: 700;
          color: var(--text-primary);
          font-size: 1.1rem;
        }

        .school {
          color: var(--accent-secondary);
          font-weight: 500;
          font-size: 0.95rem;
        }

        .location {
          color: var(--text-secondary);
          font-size: 0.85rem;
          opacity: 0.8;
        }

        .year {
          display: inline-block;
          margin-top: 0.25rem;
          color: var(--text-secondary);
          font-size: 0.85rem;
          background: rgba(255, 255, 255, 0.05);
          padding: 2px 10px;
          border-radius: 20px;
          width: fit-content;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .about-right {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .about-image-card {
          position: relative;
          width: clamp(280px, 40vw, 360px);
          height: clamp(280px, 40vw, 360px);
          margin: 0 auto;
          border-radius: 50%;
          padding: 0;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
          display: flex;
          justify-content: center;
          align-items: center;
          animation: float 6s ease-in-out infinite;
          overflow: hidden;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }

        .profile-img-wrapper {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          position: relative;
          z-index: 2;
        }

        .profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 20%;
          transition: transform 0.5s ease;
        }

        .about-image-card:hover .profile-img {
          transform: scale(1.1);
        }

        .about-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .stat-item {
          background: var(--bg-card);
          padding: 1.5rem;
          border-radius: var(--border-radius-lg);
          text-align: center;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .stat-item:hover {
          transform: translateY(-5px);
          border-color: var(--accent-primary);
          box-shadow: 0 10px 20px -5px rgba(109, 40, 217, 0.3);
          background: rgba(255, 255, 255, 0.05);
        }

        .stat-number {
          display: block;
          font-size: clamp(1.5rem, 4vw, 2.2rem);
          font-weight: 800;
          color: var(--accent-primary);
          margin-bottom: 0.25rem;
          line-height: 1;
        }

        .stat-label {
          color: var(--text-secondary);
          font-size: clamp(0.65rem, 2vw, 0.75rem);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-weight: 600;
        }

        .about-title {
          font-family: 'Dancing Script', cursive;
          font-style: italic;
          font-size: clamp(2.5rem, 8vw, 3.5rem);
          letter-spacing: 1px;
          text-shadow: 2px 2px 15px rgba(109, 40, 217, 0.5);
          background: linear-gradient(to right, var(--accent-primary), var(--accent-secondary));
          -webkit-background-clip: text;
          color: transparent;
          display: inline-block;
          margin-bottom: 3rem;
        }

        @media (max-width: 992px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 4rem;
            text-align: center;
          }
          
          .about-right {
            max-width: 500px;
            margin: 0 auto;
          }

          .about-lead {
            font-size: 1.15rem;
          }
        }

        @media (max-width: 768px) {
          .about-stats {
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
          }
          
          .stat-item {
            padding: 1.25rem 0.75rem;
          }

          .bio-card, .education-card {
            padding: 1.5rem;
            text-align: left;
          }
        }

        @media (max-width: 480px) {
          .about-image-card {
            width: 220px;
            height: 220px;
          }

          .about-stats {
            grid-template-columns: 1fr;
            max-width: 280px;
            margin: 0 auto;
          }

          .stat-item {
            padding: 1rem;
          }
        }

      `}</style>
    </section>
  );
};

const StatItem = ({ end, suffix, label, delay = 0 }) => {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  React.useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 16); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <motion.div 
      className="stat-item" 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.0, delay }}
    >
      <span className="stat-number">
        {count}{suffix}
      </span>
      <span className="stat-label">{label}</span>
    </motion.div>
  );
};

export default About;
