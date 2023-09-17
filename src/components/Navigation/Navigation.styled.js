import styled from "styled-components";
import { NavLink as StyledLink } from "react-router-dom";

export const NavLink = styled(StyledLink)`
  display: inline-block;
  text-decoration: none;
  padding: 10px;
  font-size: 20px;
  font-weight: 700;
  color: black;
  cursor: pointer;
  &:hover,
  :focus {
    cursor: pointer;
    color: #0b44cd;

  }
  &.active {
    color: #3470ff;
  }
`;

export const Nav = styled.nav`
background: #FFFFFF;
padding-bottom: 15px;
padding-top: 15px;
position: fixed;
z-index: 100;
left: 0;
top: 0;
right: 0;
`;
