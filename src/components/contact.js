import React from "react"
import ContactIcons from "./contactIcons"
import NetlifyForm from "./netlifyForm"
import Envelope from "../images/envelope.svg"
import LinkedIn from "../images/linkedin.svg"
import Twitter from "../images/twitter.svg"

const Contact = () => (
  <div id="contact" className="jumbotron-fluid pt-0 px-sm-0 bg-dark text-light d-flex flex-column align-content-center position-relative contactSection">
    <h2 className="sectionTitle">Contact</h2>
    <div className="container contactFormContainer">
      <NetlifyForm />
    </div>
    <div className="container d-flex contactIconsContainer">
      <ContactIcons
        theHref="mailto:pd.louis.fitzpatrick@icloud.com"
        theIcon={Envelope}
        theAlt="Envelope scalabe vector graphic"
      />
      <ContactIcons
        theHref="https://www.linkedin.com/in/louie-fitzpatrick/"
        theIcon={LinkedIn}
        theAlt="LinkedIn Logo scalabe vector graphic"
      />
      <ContactIcons
        theHref="https://twitter.com/LouieFitzpatr13"
        theIcon={Twitter}
        theAlt="Twitter Logo scalabe vector graphic"
      />
    </div>
  </div>
)

export default Contact
