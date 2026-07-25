import "./Contact.css";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaDownload,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Let's Connect
      </motion.h2>

      <motion.div
        className="contact-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p>
          I'm always open to internship opportunities,
          collaborations, and exciting projects.
          Feel free to reach out!
        </p>

        <div className="contact-info">

          <div>
            <FaEnvelope />
            <span>aditi.240101260@iiitbh.ac.in</span>
          </div>

          <div>
            <FaMapMarkerAlt />
            <span>IIIT Bhagalpur, Bihar</span>
          </div>

        </div>

        <div className="social-links">

          <a
            href="https://github.com/aditianya"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/YOUR_LINKEDIN"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

        </div>

        <div className="contact-buttons">

          <a href="/Resume.pdf" download>
            <FaDownload />
            Resume
          </a>

          <a href="mailto:aditimaity1330@gmail.com">
            <FaEnvelope />
            Email Me
          </a>

        </div>

      </motion.div>
    </section>
  );
}

export default Contact;