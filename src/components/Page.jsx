import React from "react";
import styled from "styled-components";
import Header, { HeaderHead } from "./Header";
const StyledPage = styled.div`
  display: flex;
  flex-flow: column;
  margin: 24px calc(100% - ${(props) => props.width});
  @media (max-width: 500px) {
    margin: 12px;
  }
`;
function Page({ width = 80, home = false, children }) {
  return (
    <>
      {home ? <Header /> : <HeaderHead />}
      <StyledPage width={width}>{children}</StyledPage>
    </>
  );
}

export default Page;
