import "../styles.css";
import { Avatar } from "../../../Components/Avatar/Avatar";
import { ButtonPrimary } from "../../../Components/Buttons";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBookMark, removeBookMark } from "../../user/userSlice";
import { dislikePost, likePost } from "../postSlice";
import { PostOptionsModal } from "./PostOptionsModal";
import { useState } from "react";

const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const { token, user } = useSelector((state) => state.auth);
  const bookmarks = useSelector((state) => state.user.bookmarks);
  const posts = useSelector((state) => state.post.posts);
  const navigate = useNavigate();
  const { content, fullName, username, likes, comments, id } = post;
  const userOfPost = users?.find((user) => user.username === username);
  const currentPost = posts?.find((dbPost) => dbPost._id === post._id);

  const isPostInBookmarks = bookmarks?.find(
    (bookmark) => bookmark?._id === currentPost?._id
  );

  const isLikedByLoggedInUser = currentPost?.likes.likedBy?.find(
    (likeUser) => likeUser.username === user.username
  );

  const [postOptionsModal, setPostOptionsModal] = useState(false);

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
          <div className="relative">
            <div
              className="bord-3-red options-icon-container curs-point"
              onClick={(e) => {
                e.stopPropagation();
                setPostOptionsModal((prevState) => !prevState);
              }}
            >
              <i className="fa-solid fa-ellipsis-vertical curs-point"></i>
            </div>
            {postOptionsModal && (
              <PostOptionsModal
                post={post}
                setPostOptionsModal={setPostOptionsModal}
              />
            )}
          </div>
        </div>
        <div className="bord-3-blue">{content}</div>
        <div className="flex-row gap-1">
          <div className="bord-3-purple flex-row post-card-single-CTA-container align-center-flex">
            <i
              className={`${
                isLikedByLoggedInUser ? "fa-solid" : "fa-regular"
              } fa-heart curs-point`}
              onClick={(e) => {
                e.stopPropagation();
                isLikedByLoggedInUser
                  ? dispatch(dislikePost({ token, postId: currentPost?._id }))
                  : dispatch(likePost({ token, postId: currentPost?._id }));
              }}
            ></i>
            <span>{likes.likeCount}</span>
          </div>
          <div className="bord-3-purple flex-row post-card-single-CTA-container align-center-flex">
            <i className="fa-regular fa-comment curs-point"></i>
            <span>{comments?.length}</span>
          </div>
          <div className="bord-3-purple flex-row post-card-single-CTA-container align-center-flex">
            <i
              className={`${
                isPostInBookmarks ? "fa-solid" : "fa-regular"
              } fa-bookmark curs-point`}
              onClick={(e) => {
                e.stopPropagation();
                isPostInBookmarks
                  ? dispatch(
                      removeBookMark({ token, postId: currentPost?._id })
                    )
                  : dispatch(addBookMark({ token, postId: currentPost?._id }));
              }}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export { PostCard };
