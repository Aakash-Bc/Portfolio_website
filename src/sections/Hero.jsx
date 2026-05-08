import React from 'react';
import { motion } from 'framer-motion';
import heroBg from '../assets/hero-bg.png';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-content">
        <div className="hero-text-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              animate={{ x: [-2, 2, -2, 2, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="greeting">Hello, I'm</span>
              <h1 className="hero-title">
                Aakash <br />
                <span className="gradient-text">Budhathoki</span>
              </h1>
            </motion.div>
          </motion.div>

          <motion.h2 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Full-Stack Developer & <br />
            Computer Vision Enthusiast
          </motion.h2>

          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            I build accessible, pixel-perfect, secure, and performant web applications.
            Passionate about solving problems through code.
          </motion.p>

          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </motion.div>
        </div>
        
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        >
          <div className="glow-circle"></div>
          {/* We can add a 3D element or Image here later */}
          <motion.div 
            className="code-block-decoration"
            animate={{ 
              y: [0, -20, 0],
              rotate: [-6, 6, -6],
            }}
            whileHover={{ 
              scale: 1.05,
              rotate: 0,
              y: 0,
              transition: { duration: 0.3 }
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <pre>
              <code>
                <span className="keyword">const</span> developer = {'{'}
                {'\n'}  name: <span className="string">'Aakash'</span>,
                {'\n'}  skills: [<span className="string">'React'</span>, <span className="string">'Express.js'</span>, <span className="string">'Node.js'</span>, <span className="string">'MongoDB'</span>],
                {'\n'}  hardWorker: <span className="boolean">true</span>,
                {'\n'}  openToWork: <span className="boolean">true</span>
                {'\n'}{'}'}
              </code>
            </pre>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 80px; /* Navbar height */
          position: relative;
          overflow: hidden;
          background-image: url(${heroBg});
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          width: 100%;
          max-width: 100vw;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(5, 5, 5, 0.7); /* Overlay for text readability */
          z-index: 0;
        }

        .hero-content {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .greeting {
          color: var(--accent-secondary);
          font-weight: 600;
          letter-spacing: 1px;
          margin-bottom: 1rem;
          display: block;
        }

        .hero-title {
          font-size: 4rem;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          font-weight: 800;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          font-weight: 500;
        }

        .hero-description {
          color: var(--text-secondary);
          max-width: 500px;
          margin-bottom: 2.5rem;
          font-size: 1.1rem;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          cursor: pointer;
        }

        .hero-visual {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .glow-circle {
          position: absolute;
          width: 300px;
          height: 300px;
          background: var(--accent-primary);
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.2;
          z-index: -1;
        }

        .code-block-decoration {
          background: var(--bg-card);
          padding: 2rem;
          border-radius: var(--border-radius-md);
          border: 1px solid rgba(255,255,255,0.1);
          font-family: 'Fira Code', monospace;
          box-shadow: 0 20px 50px rgba(0,0,0,0.3);
          transform: rotate(-5deg);
          transition: transform 0.3s ease;
        }

        .code-block-decoration pre {
          margin: 0;
          overflow: visible;
        }

        .code-block-decoration:hover {
          /* Handled by Framer Motion whileHover */
        }

        .keyword { color: var(--accent-secondary); }
        .string { color: var(--success); }
        .boolean { color: var(--accent-primary); }

        @media (max-width: 968px) {
          .hero-section {
            padding-top: 100px;
            padding-bottom: 3rem;
            min-height: auto;
            text-align: center;
          }

          .hero-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .hero-title {
            font-size: clamp(2.5rem, 8vw, 4rem);
          }

          .hero-subtitle {
            font-size: clamp(1.1rem, 4vw, 1.5rem);
          }

          .hero-description {
            margin: 0 auto 2rem;
            font-size: 1rem;
            max-width: 100%;
          }

          .hero-buttons {
            justify-content: center;
            flex-direction: column;
            width: 100%;
            max-width: 300px;
            margin: 0 auto 2rem;
          }

          .btn {
            width: 100%;
            justify-content: center;
          }

          .hero-visual {
            margin-bottom: 2rem;
            width: 100%;
            display: flex;
            justify-content: center;
            overflow: hidden;
          }

          .code-block-decoration {
            transform: none;
            width: 100%;
            max-width: 100%;
            font-size: 0.8rem;
            padding: 1.25rem;
            text-align: left;
            box-sizing: border-box;
          }

          .code-block-decoration pre {
            white-space: pre-wrap;
            word-break: break-word;
          }
        }

        @media (max-width: 480px) {
          .hero-section {
            padding-top: 80px;
          }
          
          .hero-title {
            font-size: 2.2rem;
          }
          
          .hero-subtitle {
            font-size: 1rem;
          }
          
          .code-block-decoration {
            padding: 1rem;
            font-size: 0.72rem;
            width: 100%;
            max-width: 100%;
            margin: 0;
          }

          .hero-buttons {
            gap: 0.75rem;
          }

          .hero-visual {
            padding: 0;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
