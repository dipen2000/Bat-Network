import "../styles.css";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../postSlice";
const PostOptionsModal = ({ post, setPostOptionsModal }) => {
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.auth);

  return (
    <div className="absolute post-options-modal-container">
      <div className="flex-col">
        {post.username === user.username ? (
          <div>
            <div
              className="single-option-container bord-3-red flex-row align-center-flex justify-center-flex curs-point gap-z-5"
              onClick={(e) => {
                e.stopPropagation();
                console.log("edit");
              }}
            >
              <i className="fa-regular fa-pen-to-square"></i>
              <span>Edit</span>
            </div>
            <div
              className="single-option-container bord-3-red flex-row align-center-flex justify-center-flex curs-point gap-z-5"
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
          <div className="single-option-container bord-3-red flex-row align-center-flex justify-center-flex curs-point gap-z-5">
            Follow
          </div>
        )}
      </div>
    </div>
  );
};

export { PostOptionsModal };
