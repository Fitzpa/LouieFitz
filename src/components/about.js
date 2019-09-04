import React from "react"
import scroll_icon from "../images/down_scroll1.svg"
import me from "../images/Louie.jpg"

const About = () => (
  <div
    id="about"
    className="jumbotron-fluid bg-primary text-white d-flex flex-column justify-content-center align-items-center position-relative aboutSection"
  >
    <div className="container headshotContainer">
      <img
        className="headshot"
        src={me}
        alt="A Photo of Louie Fitzpatrick looking good.."
      />
    </div>
    <div className="container w-75 text-dark py-2 aboutMeContainer">
      <h2>
        I'm <span id="louieFitzpatrick">Louie Fitzpatrick</span> a Full Stack
        Web Developer. I spend my days developing websites and designing icons
        and logos. I am constantly learning new web technologies as well as
        honing my specialties. Currently my focus is JavaScript using React for
        my front end framework. I also love exploring Codepen.io for CSS design
        inspiration & Scotch.io for interesting articles on web development
        topics. {" "}
      </h2>
    </div>
    <p className="lead position-absolute scrollContainer">
      <a className="scrollIcon hvr-pulse" href="#portfolio" role="button">
        <img src={scroll_icon} alt="scroll wheel icon" />
      </a>
    </p>
  </div>
)

export default About
