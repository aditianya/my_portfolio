import "./Projects.css";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import weather from "./weather.png";
import travel from "./travel.png";
import portfolio from "./portfolio.png";

const projects = [
  {
    title: "Personal Portfolio",
    image: portfolio,
    description:
      "A fully responsive personal portfolio built using React with smooth animations, glassmorphism UI, and a modern developer-friendly design.",
    tech: ["React", "CSS", "Framer Motion"],
    github: "https://github.com/aditianya/my_portfolio",
    demo: "#",
  },

  {
    title: "Travel & Tours Website",
    image: travel,
    description:
      "A responsive travel and tourism website featuring beautiful destinations, tour packages, booking sections, and a modern user interface.",
    tech: ["ReactJS", "Node.js", "PostgreSQL"],
    github: "https://github.com/aditianya/travels-and-tours", // Change if needed
    demo: "#",
  },

  {
    title: "Weather App",
    image: weather,
    description:
      "A React-based weather application that displays real-time weather data using the OpenWeather API.",
    tech: ["ReactJS", "API", "Vite"],
    github: "https://github.com/aditianya/weather-app", // Change if needed
    demo: "#",
  },

  {
    title: "Courses App",
    description:
      "A responsive course browsing platform with interactive course cards and a clean user interface.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/aditianya/courses-app", // Change if needed
    demo: "#",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
          <div className="project-image">
  {project.image ? (
    <img src={project.image} alt={project.title} />
  ) : (
    <span>{project.title}</span>
  )}
</div>

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((item, i) => (
                  <span key={i}>{item}</span>
                ))}
              </div>

              <div className="project-buttons">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;