import "../styles.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { deletePost } from "../postSlice";
import { EditPostModal } from "./EditPostModal";
const PostOptionsModal = ({ post, setPostOptionsModal }) => {
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.auth);
  const [editPostModal, setEditPostModal] = useState(false);
  return (
    <div className="absolute post-options-modal-container">
      <div className="flex-col">
        {post.username === user.username ? (
          <div>
            <div
              className="single-option-container bord-3-red flex-row align-center-flex justify-center-flex curs-point gap-z-5"
              onClick={(e) => {
                e.stopPropagation();
                setEditPostModal(true);
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
