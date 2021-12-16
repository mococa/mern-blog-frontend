import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router";
import { ThemeContext } from "../context/Theme";
import { StyledHeader, StyledHeaderHead } from "./styles";
export const HeaderHead = ({ username }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const params = useParams();
  console.log({ params });
  return (
    <>
      <StyledHeaderHead>
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
        <span>{username ? "Logout" : "Login"}</span>
      </StyledHeaderHead>
      <div style={{ margin: 48 }}></div>
    </>
  );
};
function Header({ username }) {
  return (
    <>
      <HeaderHead username={username} />
      <StyledHeader>
        <h1>
          {username ? `Welcome back, ${username} ` : "Hello, stranger "}
          <span class="wave">👋</span>
        </h1>
        <span>What would you like to read today?</span>
      </StyledHeader>
    </>
  );
}

export default Header;
