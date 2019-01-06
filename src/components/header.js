import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background: #c9af98;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  position: absolute;
  margin-left: 5vw;
  margin-top: 2vh;
`;

const NavbarContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: flex-end;
`;

const NavList = styled.ul`
  padding-top: 0.5rem;
  display: flex;
  flex-direction: row;
  list-style-type: none;
  font-size: 20px;
`;

const NavLi = styled.li`
  padding: 0 20px;
  color: #fafafa;
  a:visited {
    text-decoration: none;
  }
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <Title>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <span>{siteTitle}</span>
      </Link>
    </Title>
    <NavbarContainer>
      <NavList>
        <NavLi>
          <Link to="/about/" style={{ textDecoration: 'none' }}>
            about
          </Link>
        </NavLi>
        <NavLi>
          <Link to="/portfolio/" style={{ textDecoration: 'none' }}>
            portfolio
          </Link>
        </NavLi>
        <NavLi>
          <Link to="/contact/" style={{ textDecoration: 'none' }}>
            contact
          </Link>
        </NavLi>
        <NavLi>
          <Link to="/blog/" style={{ textDecoration: 'none' }}>
            blog
          </Link>
        </NavLi>
      </NavList>
    </NavbarContainer>
  </HeaderWrapper>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
