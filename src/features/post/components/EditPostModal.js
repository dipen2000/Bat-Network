import "../styles.css";
import { useSelector, useDispatch } from "react-redux";
import { Avatar } from "../../../Components/Avatar/Avatar";
import { useState } from "react";
import { editPost } from "../postSlice";
import { ButtonPrimary, ButtonSecondary } from "../../../Components/Buttons";
const EditPostModal = ({ post, setEditPostModal, setPostOptionsModal }) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState(post.content);
  const { token } = useSelector((state) => state.auth);
  const users = useSelector((state) => state.user.users);
  const currentUser = users?.find(
    (dbUser) => dbUser.username === post.username
  );

  const editPostModalChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const editModalSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(editPost({ token, input, postId: post._id }));
    setEditPostModal(false);
    setPostOptionsModal(false);
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
          <form onSubmit={editModalSubmitHandler}>
            <div className="flex-col gap-1">
              <textarea
                className="post-text-area"
                name="text"
                placeholder="What's happening?"
                onChange={editPostModalChangeHandler}
                value={input}
              />
              <div className="flex-row justify-end-flex gap-1">
                <ButtonSecondary
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setEditPostModal(false);
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

export { EditPostModal };
