import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const links = [
  { path: "/", name: "Главная" },
  { path: "/t/coach", name: "Коуч" },
  { path: "/t/art", name: "Арт" },
  { path: "/t/media", name: "Медиа" },
  { path: "/t/prof", name: "Проф" },
  { path: "/about", name: "О нас" },
  { path: "/archive", name: "Архив" },
  { path: "/profile", name: "Профиль" },
];

const Header = () => {
  // const navigate = useNavigate();
  // const handleLogout = () => {
  //   removeToken();
  //   navigate("/signin", { replace: true });
  // };

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
