import React, { useContext, useEffect, useState } from "react";
import { PostsAPI } from "../api/posts";
import { REACTIONS } from "../constants";
import { PostsContext } from "../context/Posts";
import { errorHandler } from "../helpers";
import { useToastr } from "../hooks/Toastr";
import { StyledEmoji, StyledLabel, StyledVotingBar } from "./styles";

function VotingBar({ post }) {
  const [updatedPost, setUpdatedPost] = useState(post);
  useEffect(() => {
    setUpdatedPost(post);
  }, [post]);
  const Toastr = useToastr();
  if (!post) return null;
  const votePost = (reaction) => {
    PostsAPI.react({ reaction, post: post._id })
      .then(({ data }) => {
        setUpdatedPost((post) => ({ ...post, reactions: data }));
      })
      .catch((err) => Toastr.error({ message: errorHandler(err) }));
  };
  return (
    <>
      <StyledLabel>What do you think about it?</StyledLabel>
      <StyledVotingBar>
        {REACTIONS.map((reaction) => (
          <VotingEmoji
            key={reaction.value}
            emoji={reaction.emoji}
            title={reaction.label}
            onClick={() => {
              votePost(reaction.value);
            }}
            count={updatedPost?.reactions?.[reaction.value]}
          />
        ))}
      </StyledVotingBar>
    </>
  );
}
function VotingEmoji({ emoji, title = "React", count = 0, onClick }) {
  const [clicking, setClicking] = useState(false);
  return (
    <StyledEmoji
      clicking={clicking}
      title={title}
      onMouseDown={() => setClicking(true)}
      onMouseUp={() => setClicking(false)}
      count={count}
      onClick={onClick}
    >
      {emoji}
    </StyledEmoji>
  );
}
export default VotingBar;
