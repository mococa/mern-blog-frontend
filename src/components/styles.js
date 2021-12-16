import styled from "styled-components";
import { shade } from "polished";
export const StyledHeaderHead = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  justify-content: flex-end;
  padding: 8px;
  gap: 8px;
  align-items: center;
  color: white;
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
  }
  margin: 100px 20px 40px;
  @media (max-width: 500px) {
    margin: 100px 12px 40px;
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
  }
`;
export const StyledSection = styled.section`
  display: flex;
  gap: 8px;
  flex-flow: column;
  padding: 12px 0;
  @media (max-width: 500px) {
    flex: 1;
    height: 48px;
    gap: 24px;
    flex-flow: row;
    overflow: auto;
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
export const Posts = styled.section`
  display: flex;
  flex-flow: column;
  width: calc(100% - 300px);
  gap: 12px;
  @media (max-width: 500px) {
    width: auto;
  }
`;
export const StyledPost = styled.div`
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
  margin-bottom: 12px;
`;
