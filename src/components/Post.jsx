import React from "react";
import {
  StyledLabel,
  StyledPost,
  StyledPostContent,
  StyledPostHeader,
} from "./styles";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";

function Post({ subject, title, content, slug, tags = [], section }) {
  const navigate = useNavigate();
  const onClick = () => {
    sessionStorage.setItem("section", section);
    navigate("/post/" + slug);
  };
  return (
    <StyledPost className="post">
      <StyledPostHeader onClick={onClick}>
        <img src={"src/" + subject?.toLowerCase() + ".svg"} alt="Subject" />
        <StyledLabel>{title}</StyledLabel>
      </StyledPostHeader>
      <StyledPostContent>
        <ReactMarkdown
          components={{
            h1: "span",
            h2: "span",
            h3: "span",
            img: "span",
            hr: "span",
          }}
        >
          {content}
        </ReactMarkdown>
      </StyledPostContent>
      <span onClick={onClick}>Read more</span>
      <hr />
      <span>{tags.map((tag) => `#${tag}`).join(" ")}</span>
    </StyledPost>
  );
}

export default Post;
