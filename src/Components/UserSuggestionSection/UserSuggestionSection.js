import "./UserSuggestionSection.css";
import { Avatar } from "../Avatar/Avatar";
import { ButtonPrimary } from "../Buttons";
import { getSuggestedUsers } from "../../Utils";

const UserSuggestionSection = () => {
  // const arr = [1, 2, 3];

  const userSuggestionArr = getSuggestedUsers();
  return (
    <div className="bord-3-blue user-suggestion-section">
      <h3>Who to follow</h3>
      <div className="flex-col bord-3-red gap-1">
        {userSuggestionArr.map((user) => {
          return (
            <div
              key={user?._id}
              className="flex-row justify-space-between-flex bord-3-purple align-center-flex"
            >
              <div className="flex-row gap-1 align-center-flex single-user-handle-suggestion-container">
                <Avatar
                  avatar={user?.profileAvatar}
                  fullName={user?.fullName}
                  username={user?.username}
                />
                <div className="flex-col user-handle-detail-section">
                  <strong>{user?.fullName}</strong>
                  <span>@{user?.username}</span>
                </div>
              </div>
              <ButtonPrimary>Follow</ButtonPrimary>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { UserSuggestionSection };
