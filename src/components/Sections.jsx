import React, { useRef, useState } from "react";
import { TAGS } from "../constants";
import { StyledLabel, StyledSection, StyledSectionRoot } from "./styles";
const tags = ["All", ...TAGS];
function Sections({ onChange, initialSection = "All" }) {
  const [active, setActive] = useState(
    tags.findIndex((tag) => tag === initialSection)
  );
  const ref = useRef();
  return (
    <StyledSectionRoot>
      <StyledLabel>Tags</StyledLabel>
      <StyledSection nav active={active} ref={ref}>
        {tags.map((section, index) => (
          <span
            key={section}
            onClick={(e) => {
              ref.current?.scrollTo({
                left:
                  e.target?.offsetLeft -
                  ref.current.clientWidth / 2 +
                  e.target?.clientWidth / 2,
                behavior: "smooth",
              });
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
