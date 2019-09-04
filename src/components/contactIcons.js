import React from "react"

const ContactIcons = ({ theHref, theIcon, theAlt }) => (
  <div className="container mx-sm-1 mx-md-4 my-auto">
    <a href={theHref} target="_blank">
      <div className="circleIcon d-flex justify-content-center align-content-center">
        <img className="iconWidth contactIcons" src={theIcon} alt={theAlt} />
      </div>
    </a>
  </div>
)

export default ContactIcons
