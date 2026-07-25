import "./Navbar.css";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";
function Navbar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#coding">Coding Profiles</a></li>
        <li><a href="#beyond">Beyond Coding</a></li>
        <li><a href="#contact">Contact</a></li>
        
      </ul>

      <div className="social-icons">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/aditi-maity-621466325/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

         <button className="theme-toggle" onClick={toggleTheme}>
    {theme === "dark" ? <FaSun /> : <FaMoon />}
  </button>
      </div>
    </motion.nav>
  );
}

export default Navbar;