import "./Sidebar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { UserHandle } from "../UserHandle/UserHandle";
import { NewPostModal } from "../../features/post";
import { useState } from "react";
const Sidebar = () => {
  const activeStyle = {
    backgroundColor: "var(--post-color)",
  };
  const [newPostModal, setNewPostModal] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="aside-section">
      <div className="aside-section-fixed flex-col justify-space-between-flex">
        <div className="flex-col gap-2">
          <div className=" flex-row align-center-flex justify-center-flex">
            <h3 className="curs-point app-title" onClick={() => navigate("/")}>
              BAT-NETWORK
            </h3>
          </div>
          <div>
            <ul className="flex-col gap-2 align-center-flex">
              <li>
                <NavLink
                  className="nav-item"
                  to="/"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-item"
                  to="/explore"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Explore
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-item"
                  to="/bookmark"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Bookmark
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex-row align-center-flex justify-center-flex">
            <button
              className="curs-point new-post-btn"
              onClick={(e) => {
                e.stopPropagation();
                setNewPostModal(true);
              }}
            >
              <div className="flex-row gap-z-5 align-center-flex">
                <i className="fa-solid fa-plus"></i>
                <span>New post</span>
              </div>
            </button>
          </div>
        </div>
        <UserHandle />
      </div>
      {newPostModal && <NewPostModal setNewPostModal={setNewPostModal} />}
    </div>
  );
};

export { Sidebar };
