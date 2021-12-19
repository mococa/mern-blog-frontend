import React, { useContext } from "react";
import { PostsAPI } from "../api/posts";
import Header from "../components/Header";
import Page from "../components/Page";
import Post from "../components/Post";
import Sections from "../components/Sections";
import { Posts } from "../components/styles";
import { PostsContext } from "../context/Posts";

function IndexPage() {
  const { posts, setPosts } = useContext(PostsContext);
  const onChangeSection = (tag) => {
    PostsAPI.paginate({ tag }).then(({ data }) => {
      setPosts(data);
    });
  };
  return (
    <Page home>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Sections onChange={onChangeSection} />
        <Posts>
          {posts?.map((post) => (
            <Post
              key={post._id}
              subject={post.subject}
              slug={post.slug}
              title={post.title}
              content={post.content}
              tags={post.tags}
            />
          ))}
        </Posts>
      </div>
    </Page>
  );
}

export default IndexPage;
