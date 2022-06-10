import "../styles.css";
import { Avatar } from "../../../Components/Avatar/Avatar";
import { useSelector, useDispatch } from "react-redux";
import { ButtonPrimary } from "../../../Components/Buttons";
import { useState } from "react";
import { createPost } from "../postSlice";

const NewPost = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const { user, token } = useSelector((state) => state.auth);
  const currentUser = users?.find(
    (dbUser) => dbUser?.username === user.username
  );
  const [input, setInput] = useState("");

  const newPostInputHandler = (e) => {
    setInput(e.target.value);
  };

  const newPostHandler = (e) => {
    e.preventDefault();
    dispatch(createPost({ input, token, user }));
    setInput("");
  };

  return (
    <div className="new-post-container-grid">
      <div className="">
        <Avatar
          avatar={currentUser?.profileAvatar}
          username={currentUser?.username}
          fullName={currentUser?.fullName}
        />
      </div>
      <div className="">
        <form onSubmit={newPostHandler}>
          <div className="flex-col gap-1">
            <textarea
              className="post-text-area"
              name="text"
              placeholder="What's happening?"
              onChange={newPostInputHandler}
              value={input}
            />
            <div className="flex-row justify-end-flex">
              <ButtonPrimary disabled={!input.trim()}>Post</ButtonPrimary>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export { NewPost };
