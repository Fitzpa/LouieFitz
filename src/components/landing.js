import React from "react"
import hero from "../images/logo_white.png"
import scroll_icon from "../images/down_scroll1.svg"


const Landing = ({data}) => (
  <div className="jumbotron-fluid bg-dark text-white d-flex flex-column align-items-center position-relative landingSection">
    <img className="position-absolute logoImg" src={hero} alt="logo" />
    <p className="lead position-absolute logoCaption">
      A Web Developer for you.
    </p>
    <p className="lead position-absolute scrollContainer">
      <a className="scrollIcon hvr-pulse" href="#about" role="button">
        <img src={scroll_icon} alt="scroll wheel icon" />
      </a>
    </p>
  </div>
)

export default Landing
