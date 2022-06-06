import "./UserHandle.css";
import { useSelector } from "react-redux";
import { Avatar } from "../Avatar/Avatar";
const UserHandle = () => {
  const loggedInUser = useSelector((state) => state.auth.user);
  return (
    <div className="bord-3-green flex-row justify-center-flex">
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
