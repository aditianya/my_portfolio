import "./Experience.css";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experience = [
  {
    role: "Training & Placement Coordinator",
    company: "IIIT Bhagalpur",
    duration: "2025 - Present",
    description:
      "Coordinate placement activities, communicate with recruiters, and organize career development events for students.",
  },
  {
    role: "Competitive Programmer",
    company: "LeetCode • CodeChef",
    duration: "2024 - Present",
    description:
      "Regularly solve DSA problems and participate in programming contests to strengthen problem-solving skills.",
  },
  {
    role: "Web Developer",
    company: "Personal Projects",
    duration: "2024 - Present",
    description:
      "Built responsive full-stack applications using React, Node.js, PostgreSQL, and modern UI design principles.",
  },
];

function Experience() {
  return (
    <section className="experience" id="experience">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>

      <div className="timeline">
        {experience.map((item, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="timeline-icon">
              <FaBriefcase />
            </div>

            <div className="timeline-content">
              <h3>{item.role}</h3>
              <h4>{item.company}</h4>
              <span>{item.duration}</span>
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;