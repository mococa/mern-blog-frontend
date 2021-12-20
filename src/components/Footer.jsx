import React from "react";
import { FaGithub } from "react-icons/fa";
import { StyledFooter } from "./styles";
function Footer() {
  return (
    <StyledFooter>
      <FaGithub
        size={48}
        onClick={() => {
          window.open("https://github.com/mococa/mern-blog-api");
        }}
      />
      <a
        href="https://github.com/mococa/mern-blog-api"
        target="_blank"
        rel="noreferrer"
      >
        Open-source blog hosted on Repl.it
      </a>
    </StyledFooter>
  );
}

export default Footer;
