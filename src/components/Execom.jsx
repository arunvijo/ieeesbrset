import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./styles.css"; // Use the common stylesheet
import { societyNames, societies } from '../data/Execom';

// --- OPTIMIZED ANIMATION VARIANTS (Faster & Snappier) ---
const containerVariants = { 
  hidden: { opacity: 0 }, 
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.05, // Very fast stagger
      delayChildren: 0.05,   // Almost no initial delay
      when: "beforeChildren"
    } 
  } 
};

const itemVariants = { 
  hidden: { y: 10, opacity: 0 }, // Reduced y-offset for subtle effect
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.3, ease: "easeOut" } // Faster duration
  } 
};

// --- Reusable MemberCard Component ---
const MemberCard = ({ member, onClick }) => (
  <motion.div 
    variants={itemVariants} 
    whileHover={{ y: -5 }} 
    className="member-card group" 
    onClick={onClick}
  >
    <div className="member-card-image-wrapper">
      {/* Removed loading="lazy" to ensure images load immediately */}
      <img 
        src={`/Execom25/${member.img}`} 
        alt={member.name} 
        className="member-card-image" 
      />
    </div>
    <div className="member-card-content">
      <h5 className="member-card-name">{member.name}</h5>
      <p className="member-card-position">{member.position}</p>
    </div>
  </motion.div>
);

// --- Main Execom Page Component ---
const Execom = () => {
  const navigate = useNavigate();
  const handleRedirect = (linkId) => { if (linkId) navigate(`/profile/${linkId}`); };

  return (
    <div>
      <header className="hero-banner">
        <img src="/banner2.JPG" alt="Execom Banner" className="hero-banner-bg" />
        <div className="hero-banner-overlay" />
        <div className="hero-banner-content">
          <motion.h1 
            className="hero-title" 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
          >
            Executive Committee <span className="hero-title-accent">2026</span>
          </motion.h1>
          <motion.p 
            className="hero-subtitle" 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Meet the dedicated team driving innovation and excellence at IEEE RSET SB.
          </motion.p>
        </div>
      </header>

      <main className="main-content">
        {Object.entries(societies).map(([societyKey, members]) => (
          <section key={societyKey} className="page-section" id={societyKey}>
            <div className="section-header">
              <motion.h2 
                className="section-title" 
                initial={{ opacity: 0, y: -10 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.4 }} 
                viewport={{ once: true, margin: "-50px" }} // Triggers sooner
              >
                {societyNames[societyKey]}
                <motion.span 
                  className="title-underline absolute bottom-0 left-1/2 -translate-x-1/2" 
                  initial={{ width: "0%" }} 
                  whileInView={{ width: "40%" }} 
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }} 
                  viewport={{ once: true }} 
                />
              </motion.h2>
            </div>

            <motion.div 
              className="member-grid" 
              variants={containerVariants} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "0px" }} // Triggers immediately when in view
            >
              {members.map((member, i) => (
                <MemberCard 
                  key={`${societyKey}-${i}`} 
                  member={member} 
                  onClick={() => handleRedirect(member.link)} 
                />
              ))}
            </motion.div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default Execom;