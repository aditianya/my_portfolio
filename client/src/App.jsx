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
import DeveloperDashboard from "./components/DeveloperDashboard/DeveloperDashboard";
import Footer from "./components/Footer/Footer";
import BeyondCoding from "./components/BeyondCoding/BeyondCoding";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Experience />
      <CodingProfiles />
      <DeveloperDashboard />
      <BeyondCoding />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
