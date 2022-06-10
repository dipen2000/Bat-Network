import "./SearchModal.css";
import { Avatar } from "../Avatar/Avatar";

const SearchModal = ({ userList }) => {
  return (
    <div className="search-modal-container absolute">
      {userList.length > 0 ? (
        <div>
          <div className="flex-col">
            {userList.map((user, index) => {
              return (
                <div
                  key={index}
                  className="bord-3-red flex-row gap-1 align-center-flex single-search-result"
                >
                  <Avatar
                    avatar={user?.profileAvatar}
                    username={user?.username}
                    fullName={user?.fullName}
                  />
                  <div className="flex-col user-handle-detail-section">
                    <strong>{user?.fullName}</strong>
                    <span>@{user?.username}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="flex-row align-center-flex justify-center-flex">
          No such users found
        </div>
      )}
    </div>
  );
};

export { SearchModal };
