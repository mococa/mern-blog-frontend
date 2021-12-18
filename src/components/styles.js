import styled from "styled-components";
import { shade } from "polished";
export const StyledHeaderHead = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  transition: 300ms;
  background: ${(props) =>
    props.transparent ? "rgba(0, 0, 0, 0.4)" : "black"};
  justify-content: flex-end;
  padding: 8px 16px;
  gap: 8px;
  align-items: center;
  color: white;
  z-index: 10;
  & img {
    filter: invert(1);
  }
  & * {
    cursor: pointer;
    height: 18px;
  }
`;
export const StyledHeader = styled.header`
  & > h1 {
    font-size: 36px;
    width: fit-content;
    margin: auto;
  }
  & > span {
    opacity: 0.7;
    display: block;
    width: fit-content;
    margin: auto;
    padding: 4px;
    background-color: ${(props) =>
      props.theme.title === "dark" ? "rgba(0, 0, 0, 0.4)" : "transparent"};
  }
  padding: 80px 20px 60px;
  margin: 0 0 16px !important;
  background: ${(props) =>
    props.theme.title === "dark"
      ? "rgba(256,256,256,0.02)"
      : "rgba(0, 0, 0, 0.04)"};
`;
export const StyledLabel = styled.header`
  font-size: 20px;
`;
export const StyledSectionRoot = styled.div`
  border-radius: 6px;
  padding: 12px 24px;
  min-width: 128px;
  width: 15%;
  min-height: 80vh;
  @media (max-width: 500px) {
    padding: 24px 12px;
    width: 100%;
    min-width: 100%;
    min-height: unset;
    height: 96px;
    position: sticky;
    top: 34px;
    background-color: ${(props) => props.theme.colors.background};
    z-index: 10;
  }
  & > header,
  section {
    position: sticky;
  }
  & > header {
    top: 50px;
  }
`;
export const StyledSection = styled.section`
  display: flex;
  gap: 8px;
  flex-flow: column;
  padding: 12px 8px;
  top: 74px;
  overflow-y: hidden;

  @media (max-width: 500px) {
    flex: 1;
    height: 48px;
    gap: 36px;
    flex-flow: row;
    overflow-x: auto;
    position: relative;
  }
  & > span {
    opacity: ${(props) => (props.nav ? 0.4 : 1)};
    height: fit-content;
    user-select: none;
    &:nth-of-type(${(props) => props.active + 1}) {
      opacity: 1;
    }
    &:hover {
      opacity: 1;
      cursor: pointer;
    }
  }
`;
export const Posts = styled.ul`
  display: flex;
  flex-flow: column;
  width: calc(100% - 300px);
  gap: 12px;
  padding: 0;
  @media (max-width: 500px) {
    width: fill-available;
  }
`;
export const StyledPost = styled.li`
  display: flex;
  flex-flow: column;
  padding: 12px;
  & > hr {
    margin: 12px 0;
  }
  & > span {
    &:nth-of-type(1) {
      cursor: pointer;
      font-weight: 500;
      color: ${(props) => props.theme.colors.link};
      width: fit-content;
    }
    &:nth-of-type(2) {
      font-size: 14px;
      opacity: 0.7;
    }
  }
`;
export const StyledPostHeader = styled.header`
  display: flex;
  gap: 8px;
  align-items: center;
  height: 48px;
  cursor: pointer;
  margin-bottom: 8px;
  & > img {
    background-color: ${(props) => props.theme.colors.darker};
    padding: 8px;
    border-radius: 8px;
    height: 100%;
    object-fit: cover;
  }
`;
export const StyledPostContent = styled.section`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
`;
export const StyledVotingBar = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  background-color: white;
  border-radius: 12px;
  margin: 12px 0 24px;
  padding: 4px 12px;
  overflow: auto;
  @media (max-width: 500px) {
    justify-content: flex-start;
  }
`;
export const StyledEmoji = styled.span`
  font-size: 24px;
  @media (max-width: 500px) {
    font-size: 18px;
  }
  &:last-of-type {
    @media (max-width: 500px) {
      margin-right: 12px;
    }
  }
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  transition: 200ms;
  user-select: none;
  filter: ${(props) =>
    props.clicking ? "brightness(75%)" : "brightness(100%)"};
  background: rgba(0, 0, 0, 0);
  &::after {
    position: absolute;
    padding: 4px;
    font-size: 14px;
    @media (max-width: 500px) {
      font-size: 12px;
    }
    top: 0;
    content: "${(props) => props.count || 0}";
    color: ${({ theme }) => theme.colors.notificationText};
    background-color: ${({ theme }) => theme.colors.notification};
    border-radius: 50%;
  }
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;
export const StyledCommentSection = styled.section`
  width: 100%;
  display: flex;
  flex-flow: column;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 24px;
  border-radius: 4px;
  margin-top: 16px;
`;
export const StyledCommentInput = styled.div`
  display: flex;
  gap: 8px;
  & > img {
    border-radius: 8px;
    height: 80px;
    width: 80px;
    object-fit: cover;
  }
  & > div {
    display: flex;
    flex-flow: column;
    gap: 8px;
    flex: 1;
    & > span,
    b {
      font-size: 14px;
    }
    & > div {
      display: flex;
      flex-flow: column;
      gap: 8px;
      & > textarea {
        width: fill-available;
      }
      & > button {
        width: 100px;
        place-self: flex-end;
        padding: 4px;
        visibility: ${(props) => (props.writing ? "visible" : "hidden")};
      }
    }
  }
`;
export const StyledComment = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 8px;
  & > img {
    border-radius: 8px;
    height: 48px;
    width: 48px;
    object-fit: cover;
  }
  & > div {
    display: flex;
    flex-flow: column;
    & > header {
      font-weight: 500;
      & > sub {
        vertical-align: baseline;
        opacity: 0.5;
        font-size: 11px;
        margin-left: 4px;
      }
    }
    & > span {
      opacity: 0.8;
    }
  }
`;
export const StyledAuthForm = styled.section`
  display: flex;
  flex-flow: column;
  gap: 12px;
  max-width: 450px;
  margin: 0 auto;
  width: 100%;
  padding: 12px;
`;
export const StyledAuthFormHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  gap: 24px;
  & > span {
    cursor: pointer;
  }
`;
export const StyledAuthInnerForm = styled.form`
  display: flex;
  flex-flow: column;
  gap: 8px;
  margin-top: 12px;
  & input {
    font-size: 16px;
  }
  & > button {
    margin-top: 18px;
  }
`;
export const StyledAuthBanner = styled.main`
  flex: 0.85;
  width: fill-available;
  display: flex;
  flex-flow: column;
  background-color: ${({ theme }) => theme.colors.secondary};
  @media (max-width: 500px) {
    display: none;
  }
`;
