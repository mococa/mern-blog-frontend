import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
// eslint-disable-next-line no-unused-vars
import hljs from "highlight.js";
import "highlight.js/styles/vs2015.css";
import { CustomThemeProvider } from "./context/Theme";
import { UserProvider } from "./context/User";
import { BrowserRouter } from "react-router-dom";
import { PostsProvider } from "./context/Posts";
import { ToastrProvider } from "./context/Toastr";

ReactDOM.render(
  <React.StrictMode>
    <CustomThemeProvider>
      <ToastrProvider>
        <PostsProvider>
          <UserProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </UserProvider>
        </PostsProvider>
      </ToastrProvider>
    </CustomThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
