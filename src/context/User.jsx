import React, { createContext, useEffect, useState } from "react";
import { AuthAPI } from "../api/auth";
import { clearAllCookies, getCookie } from "../helpers";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    AuthAPI.byJWT()
      .then(({ data }) => {
        setUser(data);
      })
      .catch(() => {
        //clearAllCookies();
      });
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
