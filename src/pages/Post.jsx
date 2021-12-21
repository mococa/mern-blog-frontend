import React, { useContext, useEffect, useState } from "react";
import { Markdown } from "../components/Markdown";
import { PostsContext } from "../context/Posts";
import { useParams } from "react-router-dom";
import VotingBar from "../components/VotingBar";
import CommentSection from "../components/CommentSection";
import Page from "../components/Page";
import { PostsAPI } from "../api/posts";

function PostPage() {
  const { posts } = useContext(PostsContext);
  const [post, setPost] = useState();
  const params = useParams();

  useEffect(() => {
    let timer;
    window.scrollTo(0, 0);
    if (posts) {
      const _post = posts.find((item) => item.slug === params.slug);
      setPost(_post);
      timer = setTimeout(() => {
        if (!params.slug) return;
        PostsAPI.getById({ id: _post._id }).then(({ data }) => {
          setPost(data.posts);
        });
      }, 1000);
    } else {
      PostsAPI.getBySlug({ slug: params.slug }).then(({ data }) => {
        setPost(data.posts);
      });
    }
    return () => {
      clearTimeout(timer);
      setTimeout(() => {
        sessionStorage.removeItem("section");
      }, 1000);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
