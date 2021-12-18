import React, { useContext, useEffect, useState } from "react";
import { HeaderHead } from "../components/Header";
import { Markdown } from "../components/Markdown";
import { PostsContext } from "../context/Posts";
import { useParams } from "react-router-dom";
import VotingBar from "../components/VotingBar";
import CommentSection from "../components/CommentSection";
import Page from "../components/Page";
import { getPrettyDate } from "../helpers";

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
      <Page width="80%">
        <Markdown post={post} />
        <hr style={{ margin: "28px 0" }} />
        <VotingBar post={post} />
        <CommentSection post={post} />
      </Page>
    </>
  );
}

export default PostPage;
