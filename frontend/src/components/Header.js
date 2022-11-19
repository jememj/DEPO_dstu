import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../helpers";

const links = [
  { path: "/main", name: "Главная" },
  { path: "/coach", name: "Коуч" },
  { path: "/art", name: "Арт" },
  { path: "/media", name: "Медиа" },
  { path: "/proffesion", name: "Проф" },
  { path: "/about", name: "О нас" },
  { path: "/archive", name: "Архив" },
];

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    navigate("/signin", { replace: true });
  };

  return (
    <HeaderWrapper>
      <NavWrapper>
        {links.map(({ path, name }) => (
          <Link key={name} to={path}>
            {name}
          </Link>
        ))}
        {false ? (
          <>
            {/* <Link to="/profile">{user.username}</Link> */}
            <button onClick={handleLogout}>Выйти</button>
          </>
        ) : (
          <>
            <Link to="/signin">Войти</Link>
          </>
        )}
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
