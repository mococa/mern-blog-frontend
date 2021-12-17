import React, { useState } from "react";
import { REACTIONS } from "../constants";
import { StyledEmoji, StyledLabel, StyledVotingBar } from "./styles";

function VotingBar({ post }) {
  if (!post) return null;
  return (
    <>
      <StyledLabel style={{ marginTop: 60 }}>
        What do you think about it?
      </StyledLabel>
      <StyledVotingBar>
        {REACTIONS.map((reaction) => (
          <VotingEmoji
            key={reaction.value}
            emoji={reaction.emoji}
            title={reaction.label}
            onClick={() => {
              console.log(reaction.value);
            }}
          />
        ))}
      </StyledVotingBar>
    </>
  );
}
function VotingEmoji({ emoji, title = "React", count = 13, onClick }) {
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