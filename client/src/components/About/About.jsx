import "./About.css";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaUserTie,
  FaCode
} from "react-icons/fa";

function About() {
  return (
    <section id="about" className="about">

      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        <div className="about-left">

          <h2>About Me</h2>

          <p>
            I'm a Computer Science undergraduate at
            <span> IIIT Bhagalpur </span>
            passionate about creating beautiful web applications
            and solving Data Structures & Algorithms problems.
          </p>

          <p>
            I enjoy learning modern technologies,
            participating in hackathons and building
            projects that solve real-world problems.
          </p>

        </div>

        <div className="about-right">

          <div className="about-card">

            <FaGraduationCap className="icon"/>

            <h3>Education</h3>

            <p>B.Tech CSE</p>

            <span>IIIT Bhagalpur</span>

          </div>

          <div className="about-card">

            <FaLaptopCode className="icon"/>

            <h3>Development</h3>

            <p>React • Node • MongoDB</p>

          </div>

          <div className="about-card">

            <FaCode className="icon"/>

            <h3>Competitive Programming</h3>

            <p>DSA • LeetCode • CodeChef</p>

          </div>

          <div className="about-card">

            <FaUserTie className="icon"/>

            <h3>Leadership</h3>

            <p>Training & Placement Coordinator</p>

          </div>

        </div>

      </motion.div>

    </section>
  );
}

export default About;