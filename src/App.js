import "./App.css";
import { NavRoutes } from "./Routes/NavRoutes";
import { useSelector } from "react-redux";

function App() {
  const users = useSelector((state) => state.user.users);
  // const catwomanObj = users?.find((dbUser) => {
  //   dbUser?.username === "the_cat";
  // });
  // console.log(users[users?.length - 2]);
  // console.log(users[0]);
  // console.log(catwomanObj);
  const batmanUser = users?.f;
  return (
    <div className="App ">
      <NavRoutes />
    </div>
  );
}

export default App;
