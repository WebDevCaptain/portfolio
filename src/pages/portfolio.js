import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Project from '../components/project';

const PortfolioPage = () => (
  <Layout>
    <h1>What I've been working on</h1>
    <Project />
  </Layout>
);

export default PortfolioPage;
