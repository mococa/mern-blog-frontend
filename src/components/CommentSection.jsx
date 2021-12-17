import React, { useEffect, useRef, useState } from "react";
import {
  StyledComment,
  StyledCommentInput,
  StyledCommentSection,
  StyledLabel,
} from "./styles";

function CommentSection({ post }) {
  if (!post) return null;
  return (
    <>
      {!post.comments?.length && (
        <>
          <StyledLabel>No comments yet</StyledLabel>
          <span>Be the first one</span>
        </>
      )}
      <StyledCommentSection>
        <CommentSectionInput />
        <StyledComment>
          <img src="/src/python.svg" alt="Profile picture" />
          <div>
            <header>Username</header>
            <span>Actual comment</span>
          </div>
        </StyledComment>
      </StyledCommentSection>
    </>
  );
}
function CommentSectionInput() {
  const [comment, setComment] = useState("");
  return (
    <StyledCommentInput writing={!!comment}>
      <img src="/src/node.svg" alt="" />
      <div>
        <span>
          Name: <b>Luiz</b>
        </span>
        <div>
          <textarea
            value={comment}
            onChange={({ target }) => setComment(target.value)}
            placeholder="Write here..."
            multiline
            rows="5"
          ></textarea>
          <button>Send</button>
        </div>
      </div>
    </StyledCommentInput>
  );
}
export default CommentSection;
