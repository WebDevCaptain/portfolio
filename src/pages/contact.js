import React from 'react';

import Layout from '../components/layout';

// perhaps add an email form to directly email me from this page?
// Name
// Email
// Subject
// Body

const ContactPage = () => (
  <Layout>
    <h1>Don't be a stranger</h1>
    <p>
      <em>Why not drop me a line?</em>
    </p>
    <ul>
      <li>LinkedIn</li>
      <li>Twitter</li>
      <li>GitHub</li>
    </ul>
  </Layout>
);

export default ContactPage;
