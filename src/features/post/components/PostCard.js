import "../styles.css";
import { Avatar } from "../../../Components/Avatar/Avatar";
import { ButtonPrimary } from "../../../Components/Buttons";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBookMark } from "../../user/userSlice";

const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();
  const { content, fullName, username, likes, comments, id } = post;
  const userOfPost = users?.find((user) => user.username === username);

  return (
    <div
      className="new-post-container-grid bord-3-purple curs-point"
      onClick={() => navigate(`/post/${id}`)}
    >
      <div
        className="bord-3-green"
        onClick={(e) => {
          e.stopPropagation();
          navigate(`/profile/${username}`);
        }}
      >
        <Avatar
          avatar={userOfPost?.profileAvatar}
          username={userOfPost?.username}
          fullName={userOfPost?.fullName}
        />
      </div>
      <div className="flex-col bord-3-yellow gap-1">
        <div className="flex-row justify-space-between-flex align-center-flex">
          <div
            className="flex-row align-center-flex user-username-for-post-details curs-point bord-3-blue test-5"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/profile/${userOfPost?.username}`);
            }}
          >
            <strong>{userOfPost?.fullName}</strong>
            <span>@{userOfPost?.username}</span>
            <span>·</span>
            <span>10min ago</span>
          </div>
          <i className="fa-solid fa-ellipsis-vertical curs-point"></i>
        </div>
        <div className="bord-3-blue">{content}</div>
        <div className="flex-row gap-1">
          <div className="bord-3-purple flex-row post-card-single-CTA-container align-center-flex">
            <i className="fa-regular fa-heart curs-point"></i>
            <span>{likes.likeCount}</span>
          </div>
          <div className="bord-3-purple flex-row post-card-single-CTA-container align-center-flex">
            <i className="fa-regular fa-comment curs-point"></i>
            <span>{comments.length}</span>
          </div>
          <div className="bord-3-purple flex-row post-card-single-CTA-container align-center-flex">
            <i
              className="fa-regular fa-bookmark curs-point"
              onClick={(e) => {
                e.stopPropagation();
                dispatch(addBookMark({ token, postId: post._id }));
              }}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export { PostCard };
