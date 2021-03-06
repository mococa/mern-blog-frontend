import React, { useContext, useEffect, useState } from "react";
import { CommentAPI } from "../api/comment";
import { UserContext } from "../context/User";
import { errorHandler, getTime, pickOne } from "../helpers";
import { useToastr } from "../hooks/Toastr";
import { TAGS } from "../constants";
import {
  StyledComment,
  StyledCommentInput,
  StyledCommentSection,
  StyledLabel,
} from "./styles";
const getRandomPicture = () => {
  return `/src/${pickOne(
    TAGS.filter((tag) => !["DevOps", "SQL"].includes(tag)).map((tag) =>
      tag.toLowerCase()
    )
  )}.svg`;
};
function CommentSection({ post }) {
  const [updatedPost, setUpdatedPost] = useState(post);
  useEffect(() => {
    if (post) {
      //? Setting random profile picure to user missing one
      [
        ...new Set(post?.comments?.map((comment) => comment?.author?._id)),
      ].forEach((id) => {
        const newProfilePic = getRandomPicture();
        post?.comments?.forEach((comment) => {
          if (comment.author._id !== id) return;
          if (!comment.author.profilePicture) {
            comment.author.profilePicture = newProfilePic;
          }
        });
      });
      setUpdatedPost(post);
    }
  }, [post]);
  if (!post) return null;
  const onComment = (comments) => {
    setUpdatedPost((_post) => ({ ..._post, comments }));
  };
  return (
    <>
      {!updatedPost?.comments?.length && (
        <>
          <StyledLabel>No comments yet</StyledLabel>
          <span>Be the first one</span>
        </>
      )}
      <StyledCommentSection>
        <CommentSectionInput postId={post?._id} onComment={onComment} />
        {updatedPost?.comments
          ?.map((comment) => (
            <StyledComment key={comment._id}>
              <img
                src={comment.author.profilePicture || getRandomPicture()}
                onError={(e) => (e.target.src = "/src/javascript.svg")}
                alt="Profile"
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
function CommentSectionInput({ postId, onComment = () => {} }) {
  const [comment, setComment] = useState("");
  const { user } = useContext(UserContext);
  const Toastr = useToastr();
  const sendComment = () => {
    CommentAPI.create({ content: comment, postId })
      .then(({ data }) => {
        onComment(data);
        setComment("");
      })
      .catch((err) => Toastr.error({ message: errorHandler(err) }));
  };
  return (
    <StyledCommentInput writing={!!comment}>
      {user ? (
        <>
          <img src={user.profilePicture || getRandomPicture()} alt="profile" />
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
