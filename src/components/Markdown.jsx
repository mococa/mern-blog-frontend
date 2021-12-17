import rehypeHighlight from "rehype-highlight";
import ReactMarkdown from "react-markdown";
//import remarkGfm from "https://cdn.skypack.dev/remark-gfm@3?dts";

export const Markdown = ({ markdown }) => (
  <div className="markdown-root">
    <ReactMarkdown
      rehypePlugins={[rehypeHighlight]}
      //remarkPlugins={[remarkGfm]}
      children={markdown}
    />
  </div>
);
