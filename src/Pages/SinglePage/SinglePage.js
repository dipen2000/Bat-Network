import "./SinglePage.css";
import { BatNetworkContainer } from "../../Components/Wrapper/BatNetworkContainer";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { RightSidebar } from "../../Components/RightSidebar/RightSidebar";
import { useParams, useNavigate } from "react-router-dom";
import { Avatar } from "../../Components/Avatar/Avatar";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers } from "../../features/user";
import { PostOptionsModal } from "../../features/post";
import {
  getSinglePost,
  CommentCard,
  likePost,
  dislikePost,
  addComment,
} from "../../features/post";
import { useEffect, useState } from "react";
import { ButtonPrimary } from "../../Components/Buttons";
import {
  UserListModal,
  addBookMark,
  removeBookMark,
} from "../../features/user";

const SinglePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { postId } = useParams();
  const { singlePost, posts, isLoading } = useSelector((state) => state.post);
  const { users } = useSelector((state) => state.user);
  const token = useSelector((state) => state.auth.token);
  const bookmarks = useSelector((state) => state.user.bookmarks);
  const user = useSelector((state) => state.auth.user);
  const currentPost = posts?.find((post) => post?.id === postId);

  const isPostInBookMarks = bookmarks?.find(
    (bookmark) => bookmark?._id === currentPost?._id
  );

  const currentUser = users?.find(
    (dbUser) => dbUser.username === singlePost?.username
  );

  const loggedInUser = users?.find(
    (dbUser) => dbUser.username === user.username
  );

  const [comment, setComment] = useState("");

  const commentChangeHandler = (e) => {
    setComment(e.target.value);
  };

  useEffect(() => {
    dispatch(getSinglePost(currentPost?._id));
    dispatch(getAllUsers());
  }, [dispatch, posts, currentPost?._id]);

  const [userModal, setUserModal] = useState({
    show: false,
    title: "",
    list: [],
  });

  const isLikedByLoggedInUser = currentPost?.likes.likedBy?.find(
    (likeUser) => likeUser.username === user.username
  );

  const [postOptionsModal, setPostOptionsModal] = useState(false);

  const newCommentSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      addComment({ token, commentData: comment, postId: currentPost?._id })
    );
    setComment("");
  };

  return (
    <BatNetworkContainer>
      <div className="home-grid-container bord-3-purple">
        <Sidebar />
        <div className="bord-3-red flex-col">
          <div className="bord-3-green flex-row gap-1 align-center-flex single-post-navigation">
            <i
              className="fa-solid fa-arrow-left curs-point"
              onClick={() => navigate(-1)}
            ></i>
            <h3>Post</h3>
          </div>
          <div className="bord-3-green">
            {isLoading ? (
              <div>Loading...</div>
            ) : currentPost ? (
              <div>
                <div className="new-post-container-grid bord-3-purple">
                  <div
                    className="bord-3-green curs-point"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/profile/${currentUser?.username}`);
                    }}
                  >
                    <Avatar
                      avatar={currentUser?.profileAvatar}
                      username={currentUser?.username}
                      fullName={currentUser?.fullName}
                    />
                  </div>
                  <div className="flex-col bord-3-yellow gap-1">
                    <div className="flex-row justify-space-between-flex align-center-flex">
                      <div
                        className="flex-row align-center-flex user-username-for-post-details curs-point"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/profile/${currentUser?.username}`);
                        }}
                      >
                        <strong>{currentUser?.fullName}</strong>
                        <span>@{currentUser?.username}</span>
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
                            post={currentPost}
                            setPostOptionsModal={setPostOptionsModal}
                          />
                        )}
                      </div>
                    </div>
                    <div className="bord-3-blue">{currentPost?.content}</div>
                    {currentPost?.likes.likeCount > 0 && (
                      <div
                        className="underline-hover curs-point"
                        onClick={(e) => {
                          e.stopPropagation();
                          setUserModal((prevState) => ({
                            ...prevState,
                            show: true,
                            title: "Liked by",
                            list: currentPost?.likes.likedBy,
                          }));
                        }}
                      >
                        {currentPost?.likes.likeCount} Likes
                      </div>
                    )}
                    <div className="flex-row gap-1">
                      <div className="bord-3-purple flex-row post-card-single-CTA-container align-center-flex">
                        <i
                          className={`${
                            isLikedByLoggedInUser ? "fa-solid" : "fa-regular"
                          } fa-heart curs-point`}
                          onClick={(e) => {
                            e.stopPropagation();
                            isLikedByLoggedInUser
                              ? dispatch(
                                  dislikePost({
                                    token,
                                    postId: currentPost?._id,
                                  })
                                )
                              : dispatch(
                                  likePost({ token, postId: currentPost?._id })
                                );
                          }}
                        ></i>
                        <span>{currentPost?.likes.likeCount}</span>
                      </div>
                      <div className="bord-3-purple flex-row post-card-single-CTA-container align-center-flex">
                        <i className="fa-regular fa-comment curs-point"></i>
                        <span>{currentPost?.comments?.length}</span>
                      </div>
                      <div className="bord-3-purple flex-row post-card-single-CTA-container align-center-flex">
                        <i
                          className={`${
                            isPostInBookMarks ? "fa-solid" : "fa-regular"
                          } fa-bookmark curs-point`}
                          onClick={(e) => {
                            e.stopPropagation();
                            isPostInBookMarks
                              ? dispatch(
                                  removeBookMark({
                                    token,
                                    postId: currentPost?._id,
                                  })
                                )
                              : dispatch(
                                  addBookMark({
                                    token,
                                    postId: currentPost?._id,
                                  })
                                );
                          }}
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="new-post-container-grid bord-3-purple">
                  <div className="bord-3-green">
                    <Avatar
                      avatar={loggedInUser.profileAvatar}
                      username={loggedInUser.username}
                      fullName={loggedInUser.fullName}
                    />
                  </div>
                  <div className="bord-3-purple">
                    <form
                      className="reply-container bord-3-blue"
                      onSubmit={newCommentSubmitHandler}
                    >
                      <div className="flex-row align-center-flex gap-1">
                        <input
                          className="flex-grow-1 reply-input-box"
                          type="text"
                          placeholder="Write your reply here."
                          name="reply"
                          onChange={commentChangeHandler}
                          value={comment}
                        />
                        <ButtonPrimary disabled={!comment?.trim()}>
                          Reply
                        </ButtonPrimary>
                      </div>
                    </form>
                  </div>
                </div>

                {currentPost?.comments?.length > 0
                  ? [...currentPost?.comments]?.reverse().map((comment) => {
                      return (
                        <CommentCard
                          key={comment._id}
                          comment={comment}
                          postId={currentPost?._id}
                        />
                      );
                    })
                  : null}
              </div>
            ) : (
              <p>Post not found</p>
            )}
          </div>
        </div>
        {userModal.show && (
          <UserListModal userModal={userModal} setUserModal={setUserModal} />
        )}
        <RightSidebar />
      </div>
    </BatNetworkContainer>
  );
};

export { SinglePage };
