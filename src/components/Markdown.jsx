import rehypeHighlight from "rehype-highlight";
import ReactMarkdown from "react-markdown";
export const Markdown = ({ markdown }) => (
  <div className="markdown-root">
    <ReactMarkdown rehypePlugins={[rehypeHighlight]} children={markdown} />
  </div>
);
