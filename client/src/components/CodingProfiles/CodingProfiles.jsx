import "./CodingProfiles.css";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaCode,
} from "react-icons/fa";
import { SiCodechef, SiLeetcode } from "react-icons/si";

const profiles = [
  {
    icon: <FaGithub />,
    title: "GitHub",
    username: "aditianya",
    link: "https://github.com/aditianya",
    color: "#ffffff",
  },
  {
    icon: <SiLeetcode />,
    title: "LeetCode",
    username: "Solve DSA Problems",
    link: "https://leetcode.com/u/maity_aditi/",
    color: "#FFA116",
  },
  {
    icon: <SiCodechef />,
    title: "CodeChef",
    username: "Competitive Programming",
    link: "https://www.codechef.com/users/aditi_maity",
    color: "#7B3F00",
  },
  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    username: "Connect with me",
    link: "https://www.linkedin.com/in/aditi-maity-621466325/",
    color: "#0A66C2",
  },
];

function CodingProfiles() {
  return (
    <section className="coding" id="coding">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Coding Profiles
      </motion.h2>

      <div className="coding-grid">
        {profiles.map((profile, index) => (
          <motion.a
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            className="coding-card"
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div
              className="coding-icon"
              style={{ color: profile.color }}
            >
              {profile.icon}
            </div>

            <h3>{profile.title}</h3>

            <p>{profile.username}</p>

            <span>Visit Profile →</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

export default CodingProfiles;