/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { AuthAPI } from "../api/auth";
import { UserContext } from "../context/User";
import { errorHandler, getCookie } from "../helpers";
import { useToastr } from "../hooks/Toastr";
import { AiFillPicture } from "react-icons/ai";
import {
  StyledAuthForm,
  StyledAuthFormHeader,
  StyledAuthInnerForm,
  StyledLabel,
} from "./styles";

function AuthForm() {
  const [action, setAction] = useState("signin");
  const [profilePicture, setProfilePicture] = useState("");
  const Toastr = useToastr();
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    const cookie = getCookie("jwt");
    if (!cookie) setUser(null);
  }, []);
  useEffect(() => {
    if (user) {
      navigate(sessionStorage.getItem("redirect") || "/");
      sessionStorage.removeItem("redirect");
    }
  }, [user, navigate]);
  const onSubmit = (e) => {
    e.preventDefault();
    const getProp = (prop) => e.target?.[prop]?.value;
    const username = getProp("username");
    const password = getProp("password");
    const submitButton = e.target.submit;
    submitButton.disabled = true;
    if (action === "signin") {
      AuthAPI.login({ username, password })
        .then(({ data }) => {
          const { user } = data;
          setTimeout(() => {
            setUser(user);
          }, 500);
          Toastr.success({ message: `Welcome back, ${user.username}!` });
        })
        .catch((err) => {
          submitButton.disabled = false;
          Toastr.error({ message: errorHandler(err) });
        });
    } else {
      const name = getProp("name");
      const passwordConfirmation = getProp("passwordConfirmation");
      const email = getProp("email");
      AuthAPI.register({
        name,
        username,
        email,
        password,
        passwordConfirmation,
        profilePicture,
      })
        .then(({ data }) => {
          Toastr.success({ message: data.message });
          changeAction();
          submitButton.disabled = false;
        })
        .catch((err) => {
          submitButton.disabled = false;
          Toastr.error({ message: errorHandler(err) });
        });
    }
  };
  const changeAction = () => {
    setAction(action === "signup" ? "signin" : "signup");
  };
  const getBase64 = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function (event) {
      setProfilePicture(reader.result);
    };
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
        {action === "signup" && (
          <label>
            {profilePicture && (
              <img src={profilePicture} alt="Profile picture" />
            )}
            {!profilePicture && (
              <>
                <AiFillPicture />
                <input type="file" onChange={getBase64} />
              </>
            )}
          </label>
        )}
        {action === "signup" && <input name="name" placeholder="Name" />}
        <input required name="username" placeholder="Username" />
        {action === "signup" && (
          <input
            required
            name="email"
            type="email"
            placeholder="E-mail address"
          />
        )}
        <input
          required
          name="password"
          type="password"
          placeholder="Password"
        />
        {action === "signup" && (
          <input
            name="passwordConfirmation"
            type="password"
            placeholder="Confirm password"
          />
        )}
        <button name="submit" type="submit">
          {action === "signup" ? "Sign Up" : "Login"}
        </button>
      </StyledAuthInnerForm>
    </StyledAuthForm>
  );
}

export default AuthForm;
