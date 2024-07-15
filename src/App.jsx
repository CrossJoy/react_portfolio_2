// import components
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import { useEffect } from "react";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Skills />
      <Service />
      <Projects />
      {/* <Testimonials /> */}
      <Hireme />
      <Contact />
      <footer className="p-3 text-center">
        <h6 className="mb-3">JOHN ALEX</h6>
        <p>codeaprogram © All CopyRights Reserved 2022</p>
        <a href="https://www.flaticon.com/free-icons/game-development" class="text-xs"  title="game development icons">Game development icons created by surang - Flaticon</a>
        <br/>
        <a href="https://www.flaticon.com/free-icons/listening-to-music" class="text-xs" title="listening to music icons">Listening to music icons created by howcolour - Flaticon</a>
        <br/>
        <a href="https://www.flaticon.com/free-icons/graphic-design" class="text-xs" title="graphic design icons">Graphic design icons created by Freepik - Flaticon</a>
        <br/>
        <a href="https://www.flaticon.com/free-icons/video" class="text-xs" title="video icons">Video icons created by Prashanth Rapolu 15 - Flaticon</a>
        <br/>
        <a href="https://www.flaticon.com/free-icons/model" class="text-xs" title="model icons">Model icons created by Pixel perfect - Flaticon</a>
      </footer>
    </div>
  );
};

export default App;
