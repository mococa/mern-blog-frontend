import React from "react";
import AuthBanner from "../components/AuthBanner";
import AuthForm from "../components/AuthForm";
import Page from "../components/Page";
import { StyledLabel } from "../components/styles";

function AuthPage() {
  return (
    <Page noHeader width="100%" row>
      <AuthBanner />
      <AuthForm />
    </Page>
  );
}

export default AuthPage;
