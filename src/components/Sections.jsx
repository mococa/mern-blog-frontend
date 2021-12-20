import React, { useState } from "react";
import { TAGS } from "../constants";
import { StyledLabel, StyledSection, StyledSectionRoot } from "./styles";
const tags = ["All", ...TAGS];
function Sections({ onChange, initialSection = "All" }) {
  const [active, setActive] = useState(
    tags.findIndex((tag) => tag === initialSection)
  );
  return (
    <StyledSectionRoot>
      <StyledLabel>Tags</StyledLabel>
      <StyledSection nav active={active}>
        {tags.map((section, index) => (
          <span
            key={section}
            onClick={() => {
              setActive(index);
              onChange(section);
            }}
          >
            {section}
          </span>
        ))}
      </StyledSection>
    </StyledSectionRoot>
  );
}

export default Sections;
