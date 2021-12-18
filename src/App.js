import { Routes, Route } from "react-router-dom";
import "./styles/App.css";
import IndexPage from "./pages/Index";
import PostPage from "./pages/Post";
import AuthPage from "./pages/Auth";
function App() {
  return (
    <Routes>
      <Route path="/" exact element={<IndexPage />} />
      <Route path="post/:slug" element={<PostPage />} />
      <Route path="/auth" exact element={<AuthPage />} />
    </Routes>
  );
}

export default App;
