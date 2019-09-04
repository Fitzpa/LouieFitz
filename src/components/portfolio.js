import React from 'react';
import PortfolioItem from './portfolioItem';
import ContactManager from '../images/contactKeeper.jpg';
import GithubFinder from '../images/githubFinder.jpg';
import RPS from '../images/rps.jpg';
import DadJokes from '../images/dadJokes.jpg';
import santrick from '../images/san.jpg';

import scroll_icon from '../images/blackScroll.svg';

const Portfolio = () => (
  <div
    id="portfolio"
    className="jumbotron-fluid pt-0 px-sm-0 mb-0 bg-white text-dark d-flex flex-wrap justify-content-around align-content-center position-relative portfolioSection"
  >
    <h2 className="text-center w-100 mt-5">Portfolio</h2>
    <PortfolioItem
      img={santrick}
      alt="Screen Shot of Santrick Digital landing page"
      href="https://santrickdigital.com"
      title="Santrick Digital Website"
      description="This is a website developed for Santrick Digital. This was created using Gatsby.js and is deployed on Netlify."
    />
    <PortfolioItem
      img={ContactManager}
      alt="Screen Shot of Contact Manager app"
      href="https://desolate-sea-53895.herokuapp.com/"
      github_href="https://github.com/Fitzpa/ContactKeeper"
      title="Contact Keeping App"
      description="This is a CRUD Application using the MERN Stack (MongDB, Express, React & Node)."
    />
    <PortfolioItem
      img={GithubFinder}
      alt="Screen Shot of Github User API app"
      href="https://githubsearchapp098098.netlify.com/"
      github_href="https://github.com/Fitzpa/github_user_api_app"
      title="Github User Finder"
      description="This React application that uses React Hooks and Context along with the github users API to search and return information on github users."
    />
    <PortfolioItem
      img={RPS}
      alt="Screen Shot of Rock Paper Scissors app"
      href="https://fitzpa.github.io/RockPaperScissorsGame/"
      github_href="https://github.com/Fitzpa/RockPaperScissorsGame"
      title="Rock Paper Scissors"
      description="This simple Rock Paper Scissors game uses only vanilla JavaScript for any logic and basic CSS for styles."
    />
    <PortfolioItem
      img={DadJokes}
      alt="Screen Shot of Dad Jokes app"
      href="https://lucid-yalow-af2e5c.netlify.com/"
      github_href="https://github.com/Fitzpa/dad_joke_app"
      title="Dad Jokes Generator"
      description="This is a React application that uses the Icanhazjokes API to return dad jokes to the page. The page persists."
    />
    <p className="lead position-absolute scrollContainer">
      <a className="scrollIcon hvr-pulse" href="#portfolio" role="button">
        <img src={scroll_icon} alt="scroll wheel icon" />
      </a>
    </p>
  </div>
);

export default Portfolio;
