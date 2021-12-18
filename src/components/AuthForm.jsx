/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import {
  StyledAuthForm,
  StyledAuthFormHeader,
  StyledAuthInnerForm,
  StyledLabel,
} from "./styles";

function AuthForm() {
  const [action, setAction] = useState("signin");
  const onSubmit = (e) => {
    e.preventDefault();
    const {
      name: { value: name },
      username: { value: username },
      email: { value: email },
      password: { value: password },
      passwordConfirmation: { value: passwordConfirmation },
    } = e.target;
    console.log({ name, username, email, password, passwordConfirmation });
  };
  const changeAction = () => {
    setAction(action === "signup" ? "signin" : "signup");
  };
  return (
    <StyledAuthForm>
      <StyledAuthFormHeader>
        <span onClick={changeAction}>
          {action === "signup" ? "Sign in" : "Sign up"}
        </span>
        <span>GitHub</span>
      </StyledAuthFormHeader>
      <StyledLabel>{action === "signup" ? "Sign Up" : "Sign In"}</StyledLabel>
      <div>
        Or{" "}
        <a onClick={changeAction}>
          {action === "signup"
            ? "sign in to your account"
            : "create your account"}
        </a>
      </div>
      <StyledAuthInnerForm onSubmit={onSubmit}>
        {action === "signup" && <input name="name" placeholder="Name" />}
        <input name="username" placeholder="Username" />
        {action === "signup" && (
          <input name="email" type="email" placeholder="E-mail address" />
        )}
        <input name="password" type="password" placeholder="Password" />
        {action === "signup" && (
          <input
            name="passwordConfirmation"
            type="password"
            placeholder="Confirm password"
          />
        )}
        <button type="submit">
          {action === "signup" ? "Sign Up" : "Login"}
        </button>
      </StyledAuthInnerForm>
    </StyledAuthForm>
  );
}

export default AuthForm;
