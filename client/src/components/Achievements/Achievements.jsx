import "./Achievements.css";
import { motion } from "framer-motion";
import {
  FaTrophy,
  FaCode,
  FaUsers,
  FaMedal,
} from "react-icons/fa";

const achievements = [
  {
    icon: <FaCode />,
    title: "Competitive Programming",
    description:
      "Solved 300+ DSA problems across LeetCode and CodeChef while strengthening problem-solving skills.",
  },
  {
    icon: <FaTrophy />,
    title: "Hackathon",
    description:
      "Participated in multiple hackathons and built innovative web applications in collaborative team environments.",
  },
  {
    icon: <FaUsers />,
    title: "Training & Placement Coordinator",
    description:
      "Coordinate placement activities, interact with recruiters, and organize career-related events for students.",
  },
  {
    icon: <FaMedal />,
    title: "Leadership",
    description:
      "Actively involved in technical communities, event organization, and collaborative software development.",
  },
];

function Achievements() {
  return (
    <section className="achievements" id="achievements">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Achievements
      </motion.h2>

      <div className="achievement-grid">
        {achievements.map((item, index) => (
          <motion.div
            className="achievement-card"
            key={index}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="achievement-icon">{item.icon}</div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;