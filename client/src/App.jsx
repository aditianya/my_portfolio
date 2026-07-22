import Home from "./pages/Home";
import Achievements from "./components/Achievements/Achievements";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import CodingProfiles from "./components/CodingProfiles/CodingProfiles";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Experience /
      >
      <CodingProfiles />
      <Contact />
    </>
  );
}

export default App;
