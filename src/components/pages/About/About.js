import React from "react";
import "./style.css";

const About = () => {
  return (
    <div className="container">
      <h1>About</h1>
      <div>
        <img
          style={{ height: 200, padding: 20 }}
          className="headshot"
          src="https://kreidanderson.github.io/Resp_Portfolio/assets/images/KRA.jpg"
          alt="Headshot"
        />
      </div>
      <div className="about">
        Hi, I'm Katie. Some of my hobbies include painting, coding, listening to
        music, running (not as often as I'd like), scuba diving, and cooking. I
        studied at University of St Andrews in Scotland for my undergraduate
        degree and received a Masters degree at NYU right after college. I
        worked at Sony Music for a bit but now I'm looking to expand my digital
        marketing knowledge with the wonders of code.
      </div>

      {/* <div className="container">
        <h6>A fun fact about me:</h6>I ran the Disney Half Marathon in Florida
        earlier this year (just before everything shut down due to COVID). It
        was my first ever half marathon and I hope to do more in the future.
      </div> */}
    </div>
  );
};

export default About;