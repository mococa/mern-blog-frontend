import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../context/User";
import Footer from "./Footer";
import Header, { HeaderHead } from "./Header";
const StyledPage = styled.div`
  display: flex;
  flex-flow: ${(props) => (props.row ? "row" : "column")};
  margin: ${(props) => (props.noHeader ? 0 : "24px")}
    calc(100% - ${(props) => props.width});
  min-height: calc(100vh - ${(props) => (props.noHeader ? "0px" : "150px")});
  @media (max-width: 500px) {
    margin: 12px;
  }
`;
function Page({ width = 80, home = false, noHeader, row = false, children }) {
  const { user } = useContext(UserContext);
  return (
    <>
      {!noHeader &&
        (home ? (
          <Header username={user?.username} />
        ) : (
          <HeaderHead username={user?.username} />
        ))}
      <StyledPage noHeader={noHeader} width={width} row={row}>
        {children}
      </StyledPage>
      <Footer />
    </>
  );
}

export default Page;
