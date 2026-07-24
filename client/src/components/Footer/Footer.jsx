import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <h2>Aditi Maity</h2>

      <p>
        Computer Science Student • Full Stack Developer • Competitive Programmer
      </p>

      <div className="footer-icons">

        <a
          href="https://github.com/aditianya"
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

        <a href="mailto:aditi.240101260@iiitbh.ac.in">
          <FaEnvelope />
        </a>

      </div>

      <button onClick={scrollToTop}>
        <FaArrowUp />
      </button>

      <p className="copyright">
        © {new Date().getFullYear()} Aditi Maity. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;