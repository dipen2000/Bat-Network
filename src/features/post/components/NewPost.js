import "../styles.css";
import { Avatar } from "../../../Components/Avatar/Avatar";
import { useSelector } from "react-redux";
import { ButtonPrimary } from "../../../Components/Buttons";
import { useState } from "react";

const NewPost = () => {
  const loggedInUser = useSelector((state) => state.auth.user);
  const [input, setInput] = useState({ text: "" });

  const newPostInputHandler = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({ ...prevState, [name]: value }));
  };

  console.log(input.text);

  return (
    <div className="new-post-container-grid bord-3-purple">
      <div className="bord-3-green">
        <Avatar
          avatar={loggedInUser.profileAvatar}
          username={loggedInUser.username}
          fullName={loggedInUser.fullName}
        />
      </div>
      <div className="bord-3-green">
        <form>
          <div className="flex-col gap-1">
            <textarea
              className="post-text-area"
              name="text"
              placeholder="What's happening?"
              onChange={newPostInputHandler}
              value={input.text}
            />
            <div className="flex-row justify-end-flex">
              <ButtonPrimary disabled={!input.text.trim()}>Post</ButtonPrimary>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export { NewPost };
