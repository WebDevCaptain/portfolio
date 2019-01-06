import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const ContactPage = () => (
  <Layout>
    <h1>Don't be a stranger</h1>
    <p>This is where some fluff will go.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default ContactPage;
