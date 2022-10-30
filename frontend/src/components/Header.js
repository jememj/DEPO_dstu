import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const links = [
  { path: "/main", name: "Главная" },
  { path: "/coach", name: "Коуч" },
  { path: "/art", name: "Арт" },
  { path: "/media", name: "Медиа" },
  { path: "/proffesion", name: "Проф" },
  { path: "/about", name: "О нас" },
];

const Header = () => {
  return (
    <HeaderWrapper>
      <NavWrapper>
        {links.map(({ path, name }) => (
          <Link key={name} to={path}>
            {name}
          </Link>
        ))}
      </NavWrapper>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  padding: 10px;
`;
const NavWrapper = styled.nav`
  display: flex;
  border-bottom: 1px solid grey;
`;

const Link = styled(NavLink)`
  font-size: 16px;
  text-decoration: none;
  padding: 3px;
  margin: 3px;
  text-decoration: none;
  color: black;
  &.active {
    color: green;
  }
`;
