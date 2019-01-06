import { Link } from 'gatsby';
import React from 'react';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>moment muse</h1>
    <ul>
      <li>\ˈmō-mənt\ an indefinitely short period of time; instant</li>
      <li>
        \ˈmyüz\ to think or meditate in silence : to become absorbed in thought
      </li>
    </ul>
    <div>
      <h2>full stack developer, teacher, public speaker, writer</h2>
      <p>
        I'm Amy Kirasack, a full stack developer and content creator based in
        Barcelona, Spain. I've got a passion for building new experiences with
        language, human or otherwise.
      </p>
      <Link to="/portfolio/">See My Latest Projects</Link>
    </div>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
);

export default IndexPage;
