import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const Project = () => (
  <StaticQuery
    query={graphql`
      query AllProjectsQuery {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                gitURL
                title
                description
              }
            }
          }
        }
      }
    `}
    render={({ allMarkdownRemark }) => (
      <>
        {allMarkdownRemark.edges.map(edge => (
          <div>
            <h1>
              <a href={edge.node.frontmatter.gitURL}>
                {edge.node.frontmatter.title}
              </a>
            </h1>
            <p>{edge.node.frontmatter.description}</p>
          </div>
        ))}
      </>
    )}
  />
);

// TODO: implement PropTypes for testing later

export default Project;
