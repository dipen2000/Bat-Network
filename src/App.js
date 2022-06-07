import "./App.css";
import { NavRoutes } from "./Routes/NavRoutes";
import { useSelector } from "react-redux";

function App() {
  const users = useSelector((state) => state.user.users);
  console.log(users);
  return (
    <div className="App bord-3-blue">
      <NavRoutes />
    </div>
  );
}

export default App;
