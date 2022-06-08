import "./App.css";
import { NavRoutes } from "./Routes/NavRoutes";
import { useSelector } from "react-redux";

function App() {
  // const bookmarks = useSelector((state) => state.user.bookmarks);
  // // console.log(bookmarks);
  // const posts = useSelector((state) => state.post.posts);
  // console.log(posts[0]?.likedBy);
  return (
    <div className="App bord-3-blue">
      <NavRoutes />
    </div>
  );
}

export default App;
