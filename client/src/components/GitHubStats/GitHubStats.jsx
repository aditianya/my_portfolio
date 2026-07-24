import "./GitHubStats.css";
import { motion } from "framer-motion";

function GitHubStats() {
  const username = "aditianya"; // Replace with your GitHub username

  return (
    <section className="github-stats" id="github">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        GitHub Statistics
      </motion.h2>

      <div className="stats-grid">
        <img
          src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight`}
          alt="GitHub Stats"
        />

        <img
          src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=tokyonight`}
          alt="GitHub Streak"
        />

        <img
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight`}
          alt="Top Languages"
        />
      </div>
    </section>
  );
}

export default GitHubStats;