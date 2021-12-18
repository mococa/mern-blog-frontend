import React from "react";
import styled from "styled-components";
import Header, { HeaderHead } from "./Header";
const StyledPage = styled.div`
  display: flex;
  flex-flow: ${(props) => (props.row ? "row" : "column")};
  margin: ${(props) => (props.noHeader ? 0 : "24px")}
    calc(100% - ${(props) => props.width});
  min-height: calc(100vh - ${(props) => (props.noHeader ? "0px" : "48px")});
  @media (max-width: 500px) {
    margin: 12px;
  }
`;
function Page({ width = 80, home = false, noHeader, row = false, children }) {
  return (
    <>
      {!noHeader && (home ? <Header /> : <HeaderHead />)}
      <StyledPage noHeader={noHeader} width={width} row={row}>
        {children}
      </StyledPage>
    </>
  );
}

export default Page;
