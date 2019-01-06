import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import gatsbyLogo from '../images/gatsby-icon.png';

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <span>
            {siteTitle}
            <img
              style={{ height: '30px' }}
              src={gatsbyLogo}
              alt="Gatsby Logo"
            />
          </span>
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/about/">About</Link>
        </li>
        <li>
          <Link to="/portfolio/">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact/">Contact</Link>
        </li>
        <li>
          <Link to="/blog/">Blog</Link>
        </li>
      </ul>
    </div>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
