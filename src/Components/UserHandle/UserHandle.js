import "./UserHandle.css";
import { useSelector } from "react-redux";
import { Avatar } from "../Avatar/Avatar";
import { useNavigate } from "react-router-dom";
const UserHandle = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const users = useSelector((state) => state.user.users);
  const loggedInUser = users?.find(
    (dbUser) => dbUser.username === user.username
  );

  return (
    <div
      className="bord-3-green flex-row justify-center-flex curs-point"
      onClick={() => navigate(`/profile/${loggedInUser?.username}`)}
    >
      <div className="bord-3-red flex-row gap-1 justify-center-flex align-center-flex">
        <Avatar
          avatar={loggedInUser?.profileAvatar}
          username={loggedInUser?.username}
          fullName={loggedInUser?.fullName}
        />
        <div className="flex-col user-handle-detail-section">
          <strong>{loggedInUser?.fullName}</strong>
          <span>@{loggedInUser?.username}</span>
        </div>
      </div>
    </div>
  );
};

export { UserHandle };
