import "./Hero.css";

import { motion } from "framer-motion";

import { TypeAnimation } from "react-type-animation";

import {
  FaGithub,
  FaLinkedin,
  FaCode,
  FaArrowDown
} from "react-icons/fa";

import myphoto from "../../assets/images/myphoto.jpeg";
import resume from "../../assets/resume/Resume.pdf";

function Hero() {
  return (
    <section className="hero" id="hero">

      <div className="hero-bg"></div>

      <motion.div
        className="left"

        initial={{ x: -100, opacity: 0 }}

        animate={{ x: 0, opacity: 1 }}

        transition={{ duration: 1 }}
      >

        <p className="intro">
          Hello, I'm
        </p>

        <h1>
          Aditi Maity
        </h1>

        <TypeAnimation
          sequence={[
            "Full Stack Developer",2000,
            "Competitive Programmer",2000,
            "React Developer",2000,
            "Node.js Developer",2000,
          ]}
          wrapper="span"
          repeat={Infinity}
          speed={40}
          className="typing"
        />

        <p className="description">

          Passionate Computer Science student at IIIT Bhagalpur
          who loves building beautiful web applications,
          solving DSA problems and exploring modern technologies.

        </p>

        <div className="buttons">

          <a
            href={resume}
            download
            className="btn primary-btn"
          >
            Download Resume
          </a>

          <a
            href="#contact"
            className="btn secondary-btn"
          >
            Contact Me
          </a>

        </div>

        <div className="hero-icons">

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="#">
            <FaCode />
          </a>

        </div>

      </motion.div>

      <motion.div
        className="right"

        initial={{ x: 100, opacity: 0 }}

        animate={{ x: 0, opacity: 1 }}

        transition={{ duration: 1 }}
      >

        <div className="image-wrapper">

          <img
            src={myphoto}
            alt="Aditi"
          />

          <span className="circle one"></span>
          <span className="circle two"></span>
          <span className="circle three"></span>

        </div>

      </motion.div>

      <motion.a

        href="#about"

        className="scroll-down"

        animate={{
          y: [0, 12, 0]
        }}

        transition={{
          repeat: Infinity,
          duration: 1.5
        }}
      >

        <FaArrowDown />

      </motion.a>

    </section>
  );
}

export default Hero;