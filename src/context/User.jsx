import React, { createContext, useEffect, useState } from "react";
import { AuthAPI } from "../api/auth";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    AuthAPI.byJWT().then(({ data }) => {
      setUser(data);
    });
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
