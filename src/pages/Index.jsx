import React, { useContext } from "react";
import Header from "../components/Header";
import Post from "../components/Post";
import Sections from "../components/Sections";
import { Posts } from "../components/styles";
import { PostsContext } from "../context/Posts";

function IndexPage() {
  const { posts } = useContext(PostsContext);
  return (
    <>
      <Header />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Sections
          sections={[
            "Javascript",
            "C#",
            "Java",
            "Perl",
            "HTML",
            "CSS",
            "DevOps",
          ]}
        />
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
    </>
  );
}

export default IndexPage;
