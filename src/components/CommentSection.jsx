import React, { useContext, useEffect, useRef, useState } from "react";
import { CommentAPI } from "../api/comment";
import { PostsContext } from "../context/Posts";
import { UserContext } from "../context/User";
import { errorHandler, getTime } from "../helpers";
import { useToastr } from "../hooks/Toastr";
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
        <CommentSectionInput postId={post?._id} />
        {post.comments
          ?.map((comment) => (
            <StyledComment key={comment._id}>
              <img
                src={comment.author.profilePicture || "/src/python.svg"}
                alt="Profile picture"
              />
              <div>
                <header title={comment.author.name}>
                  {comment.author.username}
                  <sub>{getTime(comment.createdAt)}</sub>
                </header>
                <span>{comment.content}</span>
              </div>
            </StyledComment>
          ))
          .reverse()}
      </StyledCommentSection>
    </>
  );
}
function CommentSectionInput({ postId }) {
  const [comment, setComment] = useState("");
  const { user } = useContext(UserContext);
  const { posts, setPosts } = useContext(PostsContext);
  const Toastr = useToastr();
  const sendComment = () => {
    CommentAPI.create({ content: comment, postId })
      .then(({ data }) => {
        setPosts(
          posts.map((post) => {
            if (post._id === postId) {
              post.comments = data;
            }
            return post;
          })
        );
        setComment("");
      })
      .catch((err) => Toastr.error({ message: errorHandler(err) }));
  };
  return (
    <StyledCommentInput writing={!!comment}>
      {user ? (
        <>
          <img src="/src/node.svg" alt="" />
          <div>
            <span>
              Username: <b>{user.username}</b>
            </span>
            <div>
              <textarea
                value={comment}
                onChange={({ target }) => setComment(target.value)}
                placeholder="Write here..."
                multiline
                rows="2"
              ></textarea>
              <button onClick={sendComment}>Send</button>
            </div>
          </div>
        </>
      ) : (
        <span style={{ marginBottom: 16 }}>
          You need to be logged in to comment here
        </span>
      )}
    </StyledCommentInput>
  );
}
export default CommentSection;
