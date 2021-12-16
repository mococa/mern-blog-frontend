import rehypeHighlight from "rehype-highlight";
import ReactMarkdown from "react-markdown";
export const Markdown = ({ markdown }) => (
  <div style={{ padding: "16px 24px 36px" }} className="markdown-root">
    <ReactMarkdown rehypePlugins={[rehypeHighlight]} children={markdown} />
  </div>
);
