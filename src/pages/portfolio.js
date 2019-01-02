import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Project from '../components/project';

const PortfolioPage = () => (
  <Layout>
    <h1>This is the portfolio!</h1>
    <p>Cool projects go here!</p>
    <Project />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default PortfolioPage;
