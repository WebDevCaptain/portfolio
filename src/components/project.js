import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const Project = () => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <p>PROJECT {data.site.siteMetadata.title}</p>
      </>
    )}
  />
);

export default Project;
