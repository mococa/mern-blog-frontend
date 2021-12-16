import React, { useContext, useEffect, useState } from "react";
import Header, { HeaderHead } from "../components/Header";
import { Markdown } from "../components/Markdown";
import { PostsContext } from "../context/Posts";
import { useParams } from "react-router-dom";
import { StyledHeaderHead } from "../components/styles";

function PostPage() {
  const { posts } = useContext(PostsContext);
  const [post, setPost] = useState();
  const params = useParams();

  useEffect(() => {
    if (posts) {
      setPost(posts.find((item) => item.slug === params.slug));
    }
  }, [posts]);
  return (
    <>
      <HeaderHead />
      <Markdown markdown={post?.content} />
    </>
  );
}

export default PostPage;
