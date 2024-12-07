import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-center bg-no-repeat bg-cover bg-hero-pattern">
          <Navbar />
          <Hero />
          <About />
        </div>
          <StarsCanvas />
        <div className="relative z-0">
          <Experience />
        </div>
        <div className="bg-center bg-no-repeat bg-cover bg-hero-pattern">
          <Works />
        </div>
        <div className="relative z-0">
          <Tech />
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
