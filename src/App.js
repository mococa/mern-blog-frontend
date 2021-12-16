import { Routes, Route } from "react-router-dom";
import "./styles/App.css";
import IndexPage from "./pages/Index";
import PostPage from "./pages/Post";
function App() {
  return (
    <Routes>
      <Route path="/" exact element={<IndexPage />} />
      <Route path="post/:slug" element={<PostPage />} />
    </Routes>
  );
}

export default App;
