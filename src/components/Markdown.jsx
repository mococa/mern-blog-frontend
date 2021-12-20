import rehypeHighlight from "rehype-highlight";
import ReactMarkdown from "react-markdown";
import { getPrettyDate, getTime } from "../helpers";
//import remarkGfm from "https://cdn.skypack.dev/remark-gfm@3?dts";

export const Markdown = ({ post }) => {
  if (!post) return null;
  const { title, author, content, createdAt } = post;
  return (
    <article className="markdown-root">
      <h2>{title}</h2>
      <h5>By {author?.name}</h5>
      <ReactMarkdown
        rehypePlugins={[rehypeHighlight]}
        //remarkPlugins={[remarkGfm]}
        children={content}
      />
      <h4 style={{ textAlign: "right", marginTop: 8 }}>
        {getPrettyDate(createdAt)}
      </h4>
    </article>
  );
};
