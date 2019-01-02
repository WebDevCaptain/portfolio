import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const PortfolioPage = () => (
  <Layout>
    <h1>This is the portfolio!</h1>
    <p>Cool projects go here!</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default PortfolioPage;
