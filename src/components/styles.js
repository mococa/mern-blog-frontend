import styled from "styled-components";
import { shade } from "polished";
export const StyledHeaderHead = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  transition: 100ms;
  background: ${(props) =>
    props.transparent ? "rgba(0, 0, 0, 0.4)" : "black"};
  justify-content: flex-end;
  padding: 8px;
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
  margin: 100px 20px 40px !important;
  @media (max-width: 500px) {
    margin: 100px 12px 40px !important;
  }
`;
export const StyledLabel = styled.header`
  font-size: 20px;
`;
export const StyledSectionRoot = styled.div`
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
  padding: 12px 0;
  top: 74px;
  @media (max-width: 500px) {
    flex: 1;
    height: 48px;
    gap: 24px;
    flex-flow: row;
    overflow: auto;
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
    width: auto;
  }
`;
export const StyledPost = styled.li`
  display: flex;
  flex-flow: column;
  padding: 12px;
  & > hr {
    margin: 12px 0;
    border-color: ${(props) => shade(0.5, props.theme.colors.text)};
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
  background-color: ${({ theme }) => theme.colors.text};
  border-radius: 12px;
  margin: 12px;
  padding: 4px;
`;
export const StyledEmoji = styled.span`
  font-size: 24px;
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
  max-width: 720px;
  display: flex;
  flex-flow: column;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 12px;
  @media (max-width: 500px) {
    max-width: unset;
  }
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
    & > span {
      opacity: 0.8;
    }
  }
`;
