import React from "react"

const PortfolioItem = ({ img, alt, href, github_href, title, description }) => (
  <div className="card bg-white workCard">
    <h3 className="workh3 text-center text-dark mb-0 mt-5">{title}</h3>
    <a href={href} className="container imgContainer"  target="_blank">
      <img className="workImage" src={img} alt={alt} />
    </a>

    <a href={github_href} className="WorkBtns btn btn-primary btn-sm w-1 mb-2"  target="_blank" >
      GITHUB
    </a>
    <p className="px-2">{description}</p>
  </div>
)

export default PortfolioItem
