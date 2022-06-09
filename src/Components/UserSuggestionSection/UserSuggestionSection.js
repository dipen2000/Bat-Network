import "./UserSuggestionSection.css";
import { Avatar } from "../Avatar/Avatar";
import { ButtonPrimary } from "../Buttons";
import { getSuggestedUsers } from "../../Utils";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { followUser } from "../../features/user";

const UserSuggestionSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userSuggestionArr = getSuggestedUsers();
  const token = useSelector((state) => state.auth.token);
  return (
    <div>
      {userSuggestionArr.length > 0 && (
        <div className=" user-suggestion-section flex-col gap-1">
          <h3>Who to follow</h3>
          <div className="flex-col  gap-1">
            {userSuggestionArr.map((user) => {
              return (
                <div
                  key={user?._id}
                  className="flex-row justify-space-between-flex single-user-suggestion-container align-center-flex curs-point"
                  onClick={() => {
                    navigate(`/profile/${user?.username}`);
                  }}
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
                  <ButtonPrimary
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(followUser({ token, followUserId: user?._id }));
                    }}
                  >
                    Follow
                  </ButtonPrimary>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export { UserSuggestionSection };
