import React, { createContext, useEffect, useState } from "react";
import { PostsAPI } from "../api/posts";

export const PostsContext = createContext({});

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    PostsAPI.paginate({}).then(({ data }) => {
      setPosts(data);
    });
  }, []);
  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostsContext.Provider>
  );
};
