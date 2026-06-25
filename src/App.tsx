import Nav from "./components/Nav";
import Hero from "./components/Hero";
import WorkedWith from "./components/WorkedWith";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <WorkedWith />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <Chatbot />
    </div>
  );
}

export default App;
