import React, { useContext, useEffect, useState } from "react";
import { HeaderHead } from "../components/Header";
import { Markdown } from "../components/Markdown";
import { PostsContext } from "../context/Posts";
import { useParams } from "react-router-dom";
import VotingBar from "../components/VotingBar";
import CommentSection from "../components/CommentSection";

function PostPage() {
  const { posts } = useContext(PostsContext);
  const [post, setPost] = useState();
  const params = useParams();

  useEffect(() => {
    if (posts) {
      setPost(posts.find((item) => item.slug === params.slug));
    }
  }, [posts, params.slug]);
  return (
    <>
      <HeaderHead />
      <Markdown markdown={post?.content} />
      <VotingBar post={post} />
      <CommentSection post={post} />
    </>
  );
}

export default PostPage;
