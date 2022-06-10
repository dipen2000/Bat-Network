import "./App.css";
import { NavRoutes } from "./Routes/NavRoutes";
import { useSelector } from "react-redux";

function App() {
  const bookmarks = useSelector((state) => state.user.bookmarks);
  console.log(bookmarks);
  return (
    <div className="App bord-3-blue">
      <NavRoutes />
    </div>
  );
}

export default App;
