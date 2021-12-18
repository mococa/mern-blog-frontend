import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ThemeContext } from "../context/Theme";
import { UserContext } from "../context/User";
import { clearAllCookies } from "../helpers";
import { StyledHeader, StyledHeaderHead } from "./styles";
export const HeaderHead = ({ username }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const params = useParams();
  const [scrollPosition, setScrollPosition] = useState(window.scrollY);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const loginLogout = () => {
    if (username) {
      //* Logout
      clearAllCookies();
      setUser(null);
    } else {
      //* Login
      sessionStorage.setItem("redirect", window.location.pathname);
      navigate("/auth");
    }
  };
  return (
    <>
      <StyledHeaderHead transparent={scrollPosition < 174}>
        {Object.keys(params).length > 0 && (
          <div
            style={{ marginRight: "auto", cursor: "pointer" }}
            onClick={() => {
              navigate("/");
            }}
          >
            Back
          </div>
        )}
        <img
          {...(theme === "dark" && { style: { filter: "invert(1)" } })}
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
          src={`/src/${theme === "dark" ? "sun" : "moon"}.svg`}
          alt="theme toggle"
        />
        <span onClick={loginLogout}>{username ? "Logout" : "Login"}</span>
      </StyledHeaderHead>
      <div style={{ margin: 34 }}></div>
    </>
  );
};
function Header({ username }) {
  return (
    <>
      <HeaderHead username={username} />
      <StyledHeader>
        <h1>
          {username ? `Welcome back, ${username.split(' ')[0]} ` : "Hello, stranger"}{" "}
          <span class="wave">👋</span>
        </h1>
        <span>What would you like to read today?</span>
      </StyledHeader>
    </>
  );
}

export default Header;
