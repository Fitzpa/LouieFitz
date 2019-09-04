import React from 'react';
// import { Link } from "gatsby"

import Layout from '../components/layout';
// import Image from "../components/image"
import SEO from '../components/seo';
import Landing from '../components/landing';
import About from '../components/about';
import Portfolio from '../components/portfolio';
import Contact from '../components/contact';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Landing />
    <About />
    <Portfolio />
    <Contact />
  </Layout>
);

export default IndexPage;
