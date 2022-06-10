import "../styles.css";
import { useSelector, useDispatch } from "react-redux";
import { Avatar } from "../../../Components/Avatar/Avatar";
import { useState } from "react";
import { editComment } from "../postSlice";
import { ButtonPrimary, ButtonSecondary } from "../../../Components/Buttons";
const EditCommentModal = ({
  postId,
  comment,
  setEditCommentModal,
  setCommentOptionsModal,
}) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState(comment.comment);
  const { token } = useSelector((state) => state.auth);
  const users = useSelector((state) => state.user.users);

  const currentUser = users?.find(
    (dbUser) => dbUser.username === comment.username
  );

  const editCommentModalChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const editCommentModalSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      editComment({
        token,
        commentData: input,
        postId,
        commentId: comment?._id,
      })
    );
    setEditCommentModal(false);
    setCommentOptionsModal(false);
  };

  return (
    <div
      className="modal-section-overlay flex-col justify-center-flex align-center-flex"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className="new-post-container-grid bord-3-purple curs-point new-post-container">
        <div className="bord-3-green">
          <div className="bord-3-green">
            <Avatar
              avatar={currentUser?.profileAvatar}
              username={currentUser?.username}
              fullName={currentUser?.fullName}
            />
          </div>
        </div>
        <div className="bord-3-green">
          <form onSubmit={editCommentModalSubmitHandler}>
            <div className="flex-col gap-1">
              <textarea
                className="post-text-area"
                name="text"
                placeholder="What's happening?"
                onChange={editCommentModalChangeHandler}
                value={input}
              />
              <div className="flex-row justify-end-flex gap-1">
                <ButtonSecondary
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setEditCommentModal(false);
                  }}
                >
                  Cancel
                </ButtonSecondary>
                <ButtonPrimary disabled={!input.trim()}>Post</ButtonPrimary>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export { EditCommentModal };
