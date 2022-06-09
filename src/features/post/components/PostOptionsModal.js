import "../styles.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { deletePost } from "../postSlice";
import { EditPostModal } from "./EditPostModal";
import { unfollowUser, followUser } from "../../user";
const PostOptionsModal = ({ post, setPostOptionsModal }) => {
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.auth);
  const users = useSelector((state) => state.user.users);
  const [editPostModal, setEditPostModal] = useState(false);

  const userToFollow = users?.find(
    (dbUser) => dbUser.username === post.username
  );

  const loggedInUserAlreadyFollowing = userToFollow.followers.find(
    (follower) => follower.username === user.username
  );

  return (
    <div className="absolute post-options-modal-container">
      <div className="flex-col">
        {post.username === user.username ? (
          <div>
            <div
              className="single-option-container  flex-row align-center-flex justify-center-flex curs-point gap-z-5"
              onClick={(e) => {
                e.stopPropagation();
                setEditPostModal(true);
              }}
            >
              <i className="fa-regular fa-pen-to-square"></i>
              <span>Edit</span>
            </div>
            <div
              className="single-option-container flex-row align-center-flex justify-center-flex curs-point gap-z-5"
              onClick={(e) => {
                e.stopPropagation();
                dispatch(deletePost({ token, postId: post._id }));
                setPostOptionsModal(false);
              }}
            >
              <i className="fa-regular fa-trash-can"></i>
              Delete
            </div>
          </div>
        ) : (
          <div className="single-option-container  flex-row align-center-flex justify-center-flex curs-point gap-z-5">
            <div className="flex-row gap-z-5 align-center-flex justify-center-flex follow-unfollow-small-fonts-for-modal">
              <i
                className={`fa-solid ${
                  loggedInUserAlreadyFollowing
                    ? "fa-user-xmark"
                    : "fa-user-plus"
                }`}
              ></i>
              {loggedInUserAlreadyFollowing ? (
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch(
                      unfollowUser({ token, followUserId: userToFollow._id })
                    );
                  }}
                >
                  unfollow
                </span>
              ) : (
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch(
                      followUser({ token, followUserId: userToFollow._id })
                    );
                  }}
                >
                  follow
                </span>
              )}
            </div>
          </div>
        )}
      </div>
      {editPostModal && (
        <EditPostModal
          post={post}
          setEditPostModal={setEditPostModal}
          setPostOptionsModal={setPostOptionsModal}
        />
      )}
    </div>
  );
};

export { PostOptionsModal };
