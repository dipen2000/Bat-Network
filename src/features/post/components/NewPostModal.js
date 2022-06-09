import "../styles.css";
import { Avatar } from "../../../Components/Avatar/Avatar";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { ButtonPrimary, ButtonSecondary } from "../../../Components/Buttons";
import { createPost } from "../postSlice";
const NewPostModal = ({ setNewPostModal }) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const users = useSelector((state) => state.user.users);
  const newPostModalChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const { token, user } = useSelector((state) => state.auth);

  const currentUser = users?.find(
    (dbUser) => dbUser.username === user.username
  );

  const newPostFormHandler = (e) => {
    e.preventDefault();
    dispatch(createPost({ input, token, user }));
    setInput("");
    setNewPostModal(false);
  };

  return (
    <div className="modal-section-overlay flex-col justify-center-flex align-center-flex">
      <div className="new-post-container-grid  curs-point new-post-container modal-primary-color">
        <div className="">
          <div className="">
            <Avatar
              avatar={currentUser?.profileAvatar}
              username={currentUser?.username}
              fullName={currentUser?.fullName}
            />
          </div>
        </div>
        <div className="">
          <form onSubmit={newPostFormHandler}>
            <div className="flex-col gap-1">
              <textarea
                className="post-text-area"
                name="text"
                placeholder="What's happening?"
                onChange={newPostModalChangeHandler}
                value={input}
              />
              <div className="flex-row justify-end-flex gap-1">
                <ButtonSecondary
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setInput("");
                    setNewPostModal(false);
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

export { NewPostModal };
