import "./DeveloperDashboard.css";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaCode,
  FaStar,
  FaTrophy,
} from "react-icons/fa";

function DeveloperDashboard() {
  const github = "aditianya";
  const leetcode = "maity_aditi";

  const stats = [
    {
      icon: <FaCode />,
      value: "583+",
      label: "Problems Solved",
    },
    {
      icon: <FaTrophy />,
      value: "1538",
      label: "Max Contest Rating",
    },
    {
      icon: <FaStar />,
      value: "2★",
      label: "CodeChef",
    },
    {
      icon: <FaGithub />,
      value: "100 Days",
      label: "LeetCode Badge",
    },
  ];

  return (
    <section className="dashboard" id="dashboard">

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Developer Dashboard
      </motion.h2>

      {/* Summary Cards */}
      <div className="summary-grid">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            className="summary-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="summary-icon">
              {item.icon}
            </div>

            <h3>{item.value}</h3>

            <p>{item.label}</p>
          </motion.div>
        ))}
      </div>

      {/* GitHub */}
      <div className="dashboard-card">

        <h3>GitHub Statistics</h3>

        <img
          src={`https://github-readme-stats.vercel.app/api?username=${github}&show_icons=true&theme=tokyonight`}
          alt="GitHub Stats"
        />

        <img
          src={`https://github-readme-streak-stats.herokuapp.com/?user=${github}&theme=tokyonight`}
          alt="GitHub Streak"
        />

        <img
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${github}&layout=compact&theme=tokyonight`}
          alt="Top Languages"
        />

      </div>

      {/* LeetCode */}
      <div className="dashboard-card">

        <h3>LeetCode Statistics</h3>

        <img
          src={`https://leetcard.jacoblin.cool/${leetcode}?theme=dark&font=Karma&ext=contest`}
          alt="LeetCode Stats"
        />

      </div>

    </section>
  );
}

export default DeveloperDashboard;