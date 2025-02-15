import React, { useState } from "react";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import NavBar from "./components/Navbar/NavBar";

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <NavBar />
      <Hero />
      <div className="container">
        <Title subTitle="Our Program" title="What we offer" />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title subTitle="Gallery" title="Campus Photos" />
        <Campus />
        <Title subTitle="TESTIMONIALS" title="What Student says" />
        <Testimonials />
        <Title subTitle="Contact Us" title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
      {playState && <VideoPlayer playState={playState} setPlayState={setPlayState} />}
    </div>
  );
};

export default App;
