import "./UserProfile.css";
import { BatNetworkContainer } from "../../Components/Wrapper/BatNetworkContainer";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { RightSidebar } from "../../Components/RightSidebar/RightSidebar";
import { useNavigate } from "react-router-dom";
import { ButtonSecondary, ButtonPrimary } from "../../Components/Buttons";
import { UserListModal, UserProfileEditModal } from "../../features/user";
import { useParams } from "react-router-dom";
import {
  getPosts,
  resetPostsOfUser,
  getPostsOfUser,
  PostCard,
} from "../../features/post";
import { getAllUsers } from "../../features/user";
import { logoutHandler } from "../../features/auth";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const UserProfile = () => {
  const navigate = useNavigate();
  const { username } = useParams();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const posts = useSelector((state) => state.post.posts);
  const user = useSelector((state) => state.auth.user);
  const loggedInUser = users?.find(
    (dbUser) => dbUser.username === user.username
  );
  const currentUser = users?.find((dbUser) => dbUser.username === username);

  const currentUserPosts = posts?.filter(
    (dbPost) => dbPost.username === username
  );

  const isUserFollowingCurrentUser = loggedInUser?.following.find(
    (userObj) => userObj.username === currentUser?.username
  );

  const postsOfUser = useSelector((state) => state.post.postsOfUser);
  const isLoading = useSelector((state) => state.post.isLoading);

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getAllUsers());
    dispatch(getPostsOfUser(username));

    return () => dispatch(resetPostsOfUser());
  }, [dispatch, username]);

  const [userModal, setUserModal] = useState({
    show: false,
    title: "",
    list: [],
  });

  const [userProfileModal, setUserProfileModal] = useState(false);

  return (
    <BatNetworkContainer>
      <div className="home-grid-container">
        <Sidebar />
        <div className="flex-col ">
          {currentUser ? (
            <div>
              <div className="flex-row  align-center-flex gap-1 profile-navigation">
                <i
                  className="fa-solid fa-arrow-left curs-point"
                  onClick={() => navigate(-1)}
                ></i>
                <div className="flex-col user-handle-line-height">
                  <h3>{currentUser?.fullName}</h3>
                  <span>{currentUserPosts.length} posts</span>
                </div>
              </div>
              <div className="user-profile-grid">
                <div>
                  <div className=" user-profile-img-container">
                    <img
                      className="img-resp avatar-img"
                      src={currentUser?.profileAvatar}
                      alt={`${currentUser?.fullName} ${currentUser?.username}`}
                    />
                  </div>
                </div>
                <div className="">
                  <div className="flex-col  gap-1">
                    <div className="flex-row justify-space-between-flex ">
                      <div className="flex-col big-fonts-user-profile-line-height">
                        <h2>{currentUser?.fullName}</h2>
                        <span>@{currentUser?.username}</span>
                      </div>
                      <div className="flex-row gap-1 align-center-flex">
                        {loggedInUser.username === currentUser?.username ? (
                          <div>
                            <ButtonSecondary
                              onClick={() => setUserProfileModal(true)}
                            >
                              Edit profile
                            </ButtonSecondary>
                          </div>
                        ) : isUserFollowingCurrentUser ? (
                          <ButtonPrimary>Unfollow</ButtonPrimary>
                        ) : (
                          <ButtonPrimary>follow</ButtonPrimary>
                        )}

                        {loggedInUser.username === currentUser?.username && (
                          <i
                            className="fa-solid fa-right-from-bracket curs-point"
                            onClick={(e) => {
                              e.stopPropagation();
                              dispatch(logoutHandler());
                            }}
                          ></i>
                        )}
                      </div>
                    </div>
                    <div className=" flex-col">
                      {currentUser?.bio.trim() && <p>{currentUser?.bio}</p>}
                      {currentUser?.website.trim() && (
                        <div className="flex-row align-center-flex gap-z-5 web-link">
                          <i className="fa-solid fa-link "></i>
                          <a
                            className="curs-point  underline-hover"
                            href={currentUser?.website}
                            target="_blank"
                          >
                            {currentUser?.website}
                          </a>
                        </div>
                      )}
                    </div>
                    <div className="flex-row align-center-flex gap-2">
                      <span
                        className="underline-hover curs-point"
                        onClick={(e) => {
                          e.stopPropagation();
                          setUserModal((prevState) => ({
                            ...prevState,
                            show: true,
                            title: "Followings",
                            list: currentUser?.following,
                          }));
                        }}
                      >
                        {currentUser?.following.length} Following
                      </span>
                      <span
                        className="underline-hover curs-point"
                        onClick={(e) => {
                          e.stopPropagation();
                          setUserModal((prevState) => ({
                            ...prevState,
                            show: true,
                            title: "Followers",
                            list: currentUser?.followers,
                          }));
                        }}
                      >
                        {currentUser?.followers.length} Followers
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>No user found</div>
          )}

          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <div className="flex-col">
              {postsOfUser?.length > 0 ? (
                [...postsOfUser]?.reverse().map((post) => {
                  return <PostCard key={post._id} post={post} />;
                })
              ) : (
                <div>Posts not found</div>
              )}
            </div>
          )}
        </div>

        <RightSidebar />
      </div>

      {userModal.show && (
        <UserListModal userModal={userModal} setUserModal={setUserModal} />
      )}

      {userProfileModal && (
        <UserProfileEditModal setUserProfileModal={setUserProfileModal} />
      )}
    </BatNetworkContainer>
  );
};

export { UserProfile };
