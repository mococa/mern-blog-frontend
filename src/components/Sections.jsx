import React, { useState } from "react";
import { StyledLabel, StyledSection, StyledSectionRoot } from "./styles";

function Sections({ sections }) {
  const [active, setActive] = useState(0);
  return (
    <StyledSectionRoot>
      <StyledLabel>Tags</StyledLabel>
      <StyledSection nav active={active}>
        {sections.map((section, index) => (
          <span onClick={() => setActive(index)}>{section}</span>
        ))}
      </StyledSection>
    </StyledSectionRoot>
  );
}

export default Sections;
