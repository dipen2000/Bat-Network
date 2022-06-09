import "../styles.css";
import { Avatar } from "../../../Components/Avatar/Avatar";
import { useNavigate } from "react-router-dom";
import { CommentOptionsModal } from "./CommentOptionsModal";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getPostDate } from "../../../Utils";
const CommentCard = ({ comment, postId }) => {
  const users = useSelector((state) => state.user.users);
  const currentUser = users?.find(
    (dbUser) => dbUser.username === comment.username
  );
  const navigate = useNavigate();

  const [commentOptionsModal, setCommentOptionsModal] = useState(false);

  return (
    <div className="new-post-container-grid bord-3-purple">
      <div
        className="bord-3-green curs-point"
        onClick={(e) => {
          e.stopPropagation();
          navigate(`/profile/${currentUser?.username}`);
        }}
      >
        <Avatar
          avatar={currentUser?.profileAvatar}
          username={currentUser?.username}
          fullName={currentUser?.fullName}
        />
      </div>
      <div className="flex-col bord-3-blue">
        <div className="flex-row justify-space-between-flex align-center-flex">
          <div
            className="flex-row align-center-flex user-username-for-post-details curs-point"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/profile/${currentUser?.username}`);
            }}
          >
            <strong>{currentUser?.fullName}</strong>
            <span>@{currentUser?.username}</span>
            <span>·</span>
            <span>{getPostDate(currentUser?.createdAt)}</span>
          </div>
          <div className="relative">
            <div
              className="bord-3-red options-icon-container curs-point"
              onClick={(e) => {
                e.stopPropagation();
                setCommentOptionsModal((prevState) => !prevState);
              }}
            >
              <i className="fa-solid fa-ellipsis-vertical curs-point"></i>
            </div>
            {commentOptionsModal && (
              <CommentOptionsModal
                postId={postId}
                comment={comment}
                setCommentOptionsModal={setCommentOptionsModal}
              />
            )}
          </div>
        </div>
        <div className="bord-3-red">{comment.comment}</div>
      </div>
    </div>
  );
};

export { CommentCard };
