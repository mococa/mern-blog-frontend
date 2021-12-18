import React, { useEffect } from "react";
import styled from "styled-components";
import {
  MdCheckCircle,
  MdError,
  MdWarning,
  MdInfo,
  MdClose,
} from "react-icons/md";
import { lighten } from "polished";

function ToastrComponent({
  id,
  delay,
  title,
  message,
  type,
  onClose = () => {},
}) {
  useEffect(() => {
    setTimeout(() => onClose(id), delay || 3000);
  }, [id, delay, onClose]);

  return (
    <StyledToastr type={type} id={id}>
      {type === "success" && <MdCheckCircle />}
      {type === "error" && <MdError />}
      {type === "info" && <MdInfo />}
      {type === "warning" && <MdWarning />}
      <div>
        <header>{title}</header>
        <span>{message}</span>
      </div>
      <div onClick={() => onClose(id)}>
        <MdClose />
      </div>
    </StyledToastr>
  );
}

export default ToastrComponent;
const colors = {
  error: "#f75d52",
  info: "#519bf0",
  success: "#51f083",
  warning: "#f5b840",
};
const StyledToastr = styled.div`
  color: black;
  background-color: ${(props) => lighten(0.25, colors[props.type])};
  border-left: 8px solid ${(props) => colors[props.type]};
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 1fr 5fr;
  grid-column-gap: 8px;
  box-sizing: content-box;
  border-radius: 4px;
  width: 200px;
  height: 35px;
  padding: 8px;
  font-size: 14px;
  & header {
    font-weight: 500;
  }
  & span {
  }
  & > svg {
    height: inherit;
    width: 28px;
    color: ${(props) => colors[props.type]};
  }
  & > div {
    &:first-of-type {
      display: flex;
      flex-flow: column;
    }
    &:last-of-type {
      position: absolute;
      right: 12px;
      cursor: pointer;
    }
  }
`;
