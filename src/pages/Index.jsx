import React, { useContext, useEffect, useState } from "react";
import { PostsAPI } from "../api/posts";
import Page from "../components/Page";
import Post from "../components/Post";
import Sections from "../components/Sections";
import { Posts } from "../components/styles";
import { PostsContext } from "../context/Posts";

function IndexPage() {
  const { posts, setPosts } = useContext(PostsContext);
  const [section, setSection] = useState(
    sessionStorage.getItem("section") || "All"
  );
  const onChangeSection = (tag) => {
    setSection(tag);
    window.scrollTo({ top: 0, behavior: "smooth" });
    PostsAPI.paginate({ tag }).then(({ data }) => {
      setPosts(data);
    });
  };
  useEffect(() => {
    return () => {
      window.onbeforeunload = function () {
        sessionStorage.removeItem("section");
      };
    };
  }, []);
  return (
    <Page home>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Sections onChange={onChangeSection} initialSection={section} />
        <Posts>
          {posts?.map((post) => (
            <Post
              key={post._id}
              subject={post.subject}
              slug={post.slug}
              title={post.title}
              content={post.content}
              tags={post.tags}
              section={section}
            />
          ))}
        </Posts>
      </div>
    </Page>
  );
}

export default IndexPage;
