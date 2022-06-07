import "../styles.css";
import { Avatar } from "../../../Components/Avatar/Avatar";
const CommentCard = ({ comment, postId }) => {
  return (
    <div className="new-post-container-grid bord-3-purple">
      <div className="bord-3-green">
        <Avatar
          avatar={comment.profileAvatar}
          username={comment.username}
          fullName={comment.fullName}
        />
      </div>
      <div className="flex-col bord-3-blue">
        <div className="flex-row justify-space-between-flex align-center-flex">
          <div className="flex-row align-center-flex user-username-for-post-details">
            <strong>{comment.fullName}</strong>
            <span>@{comment.username}</span>
            <span>·</span>
            <span>10min ago</span>
          </div>
          <i className="fa-solid fa-ellipsis-vertical curs-point"></i>
        </div>
        <div className="bord-3-red">{comment.comment}</div>
      </div>
    </div>
  );
};

export { CommentCard };
