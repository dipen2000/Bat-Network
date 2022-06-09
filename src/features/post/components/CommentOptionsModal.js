import "../styles.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { deleteComment } from "../postSlice";
import { EditCommentModal } from "./EditCommentModal";
import { unfollowUser, followUser } from "../../user";
const CommentOptionsModal = ({ comment, setCommentOptionsModal, postId }) => {
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.auth);
  const users = useSelector((state) => state.user.users);
  const [editCommentModal, setEditCommentModal] = useState(false);

  const userToFollow = users?.find(
    (dbUser) => dbUser.username === comment.username
  );

  const loggedInUserAlreadyFollowing = userToFollow.followers.find(
    (follower) => follower.username === user.username
  );

  return (
    <div className="absolute post-options-modal-container">
      <div className="flex-col">
        {comment.username === user.username ? (
          <div>
            <div
              className="single-option-container bord-3-red flex-row align-center-flex justify-center-flex curs-point gap-z-5"
              onClick={(e) => {
                e.stopPropagation();
                setEditCommentModal(true);
              }}
            >
              <i className="fa-regular fa-pen-to-square"></i>
              <span>Edit</span>
            </div>
            <div
              className="single-option-container bord-3-red flex-row align-center-flex justify-center-flex curs-point gap-z-5"
              onClick={(e) => {
                e.stopPropagation();
                dispatch(
                  deleteComment({ token, commentId: comment?._id, postId })
                );
                setCommentOptionsModal(false);
              }}
            >
              <i className="fa-regular fa-trash-can"></i>
              Delete
            </div>
          </div>
        ) : (
          <div className="single-option-container bord-3-red flex-row align-center-flex justify-center-flex curs-point gap-z-5">
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
      {editCommentModal && (
        <EditCommentModal
          comment={comment}
          postId={postId}
          setEditCommentModal={setEditCommentModal}
          setCommentOptionsModal={setCommentOptionsModal}
        />
      )}
    </div>
  );
};

export { CommentOptionsModal };
