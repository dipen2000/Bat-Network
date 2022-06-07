import "../styles.css";
import { Avatar } from "../../../Components/Avatar/Avatar";
import { useSelector } from "react-redux";
import { ButtonPrimary } from "../../../Components/Buttons";

const NewPost = () => {
  const loggedInUser = useSelector((state) => state.auth.user);

  return (
    <div className="new-post-container-grid bord-3-purple">
      <div className="bord-3-green">
        <Avatar
          avatar={loggedInUser.profileAvatar}
          username={loggedInUser.username}
          fullName={loggedInUser.fullName}
        />
      </div>
      <div className="bord-3-green">
        <div className="flex-col gap-1">
          <textarea
            className="post-text-area"
            placeholder="What's happening?"
          />
          <div className="flex-row justify-end-flex">
            <ButtonPrimary>Post</ButtonPrimary>
          </div>
        </div>
      </div>
    </div>
  );
};

export { NewPost };
