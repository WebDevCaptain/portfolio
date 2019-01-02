import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const AboutPage = () => (
  <Layout>
    <h1>About Me</h1>
    <p>
      Lorem ipsum dolor amet meggings twee tumeric hot chicken live-edge, chia
      ramps biodiesel enamel pin kickstarter banh mi tbh. Yr poutine actually
      vape microdosing deep v seitan plaid quinoa godard kale chips. Banjo
      succulents fingerstache, wolf chartreuse organic distillery butcher
      kickstarter gluten-free hexagon. Tumeric kale chips pug fam thundercats
      pinterest blue bottle helvetica letterpress plaid swag. Hashtag taiyaki
      wayfarers keffiyeh organic, pitchfork fashion axe. Actually pour-over
      vinyl la croix, enamel pin post-ironic four loko.
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default AboutPage;
