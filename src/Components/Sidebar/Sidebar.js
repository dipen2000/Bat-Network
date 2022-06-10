import "./Sidebar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { UserHandle } from "../UserHandle/UserHandle";
const Sidebar = () => {
  const activeStyle = {
    borderBottom: "2px solid black",
  };

  const navigate = useNavigate();

  return (
    <div className="aside-section">
      <div className="aside-section-fixed flex-col bord-3-purple justify-space-between-flex">
        <div className="flex-col gap-2">
          <div className="bord-3-red flex-row align-center-flex justify-center-flex">
            <h3 className="curs-point" onClick={() => navigate("/")}>
              BAT-NETWORK
            </h3>
          </div>
          <div>
            <ul className="flex-col gap-1 align-center-flex">
              <li className="nav-item">
                <NavLink
                  to="/"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/explore"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Explore
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/bookmark"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Bookmark
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex-row align-center-flex justify-center-flex">
            <button className="curs-point">+ new post</button>
          </div>
        </div>
        <UserHandle />
      </div>
    </div>
  );
};

export { Sidebar };
