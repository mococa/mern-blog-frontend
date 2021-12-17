import React, { useState } from "react";
import { TAGS } from "../constants";
import { StyledLabel, StyledSection, StyledSectionRoot } from "./styles";

function Sections() {
  const [active, setActive] = useState(0);
  return (
    <StyledSectionRoot>
      <StyledLabel>Tags</StyledLabel>
      <StyledSection nav active={active}>
        {TAGS.map((section, index) => (
          <span onClick={() => setActive(index)}>{section}</span>
        ))}
      </StyledSection>
    </StyledSectionRoot>
  );
}

export default Sections;
