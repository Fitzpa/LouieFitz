import React from "react"


const NetlifyForm = () => (
  <form
  className="d-flex flex-column"
  name="contact"
  method="post"
  data-netlify="true"
  data-netlify-honeypot="bot-field"
>
  <input type="hidden" name="bot-field" />
  <input type="hidden" name="form-name" value="contact" />
  <div className="field half first d-flex flex-column justify-content-center px-1">
    <label htmlFor="name">Name</label>
    <input className="mb-4" type="text" name="name" id="name" />
  </div>
  <div className="field half d-flex flex-column justify-content-center px-1">
    <label htmlFor="email">Email</label>
    <input className="mb-4" type="text" name="email" id="email" />
  </div>
  <div className="field d-flex flex-column justify-content-center px-1">
    <label htmlFor="message">Message</label>
    <textarea className="mb-3" name="message" id="message" rows="6" />
  </div>
  <ul className="actions d-flex flex-column justify-content-center list-unstyled ml-auto px-1">
    <li>
      <input type="submit" value="Send Message" className="special btn btn-primary" />
    </li>
  </ul>
</form>
)

export default NetlifyForm
