import "./BeyondCoding.css";
import { motion } from "framer-motion";

import ngo from "../../assets/beyondCoding/ngo.png";
import anchoring from "../../assets/beyondCoding/anchoring.png";
import anchoring1 from "../../assets/beyondCoding/anchoring1.png";
import anchoring2 from "../../assets/beyondCoding/anchoring2.png";
import anchoring3 from "../../assets/beyondCoding/anchoring3.png";
import anchoring4 from "../../assets/beyondCoding/anchoring4.png";
import collegeevents from "../../assets/beyondCoding/collegeevents.png";
import collegeevents2 from "../../assets/beyondCoding/collegeevents2.png";
import collegeevents3 from "../../assets/beyondCoding/collegeevents3.png";
import collegeevents4 from "../../assets/beyondCoding/collegeevents4.png";
import collegeevents5 from "../../assets/beyondCoding/collegeevents5.png";
import collegeevents6 from "../../assets/beyondCoding/collegeevents6.png";
import sports from "../../assets/beyondCoding/sports.png";
import sports1 from "../../assets/beyondCoding/sports1.png";

const activities = [
  {
    title: "Community Service",
    icon: "🌱",
    image: ngo,
    desc:
      "Conducted interactive educational sessions for school students through Unnati Welfare Society, promoting digital learning and community engagement.",
  },
  {
    title: "Event Anchoring",
    icon: "🎤",
    image: anchoring,anchoring1,anchoring2,anchoring3,anchoring4,
    desc:
      "Anchored technical, cultural, and institutional events, strengthening public speaking, leadership, and stage management skills.",
  },
  {
    title: "Campus Events",
    icon: "🎭",
    image: collegeevents2,collegeevents,collegeevents3,collegeevents4,collegeevents5,collegeevents6,
    desc:
      "Actively organized and participated in college events, collaborating with teams to deliver engaging experiences.",
  },
  {
    title: "Sports & Recreation",
    icon: "🏸",
    image: sports,sports1,
    desc:
      "Participated in badminton and indoor games, building teamwork, discipline, and strategic thinking.",
  },
];

function BeyondCoding() {
  return (
    <section className="beyond" id="beyond">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Beyond Coding
      </motion.h2>

      <motion.p
        className="beyond-intro"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Beyond building software, I actively engage in leadership,
        public speaking, community service, creativity,
        sports and campus life.
      </motion.p>

      <div className="beyond-grid">
        {activities.map((item, index) => (
          <motion.div
            className="beyond-card"
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <img src={item.image} alt={item.title} />

            <div className="overlay">
              <h3>
                {item.icon} {item.title}
              </h3>

              <p>{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default BeyondCoding;