import "./Home.css";
import { BatNetworkContainer } from "../../Components/Wrapper/BatNetworkContainer";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { RightSidebar } from "../../Components/RightSidebar/RightSidebar";
import { SortBar } from "../../Components/SortBar/SortBar";
import { PostCard } from "../../features/post";
import { NewPost } from "../../features/post";
import { useEffect } from "react";
import { getPosts } from "../../features/post";
import { getAllUsers } from "../../features/user";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedInUserFeed, sortPostsByFilter } from "../../Utils";

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const users = useSelector((state) => state.user.users);
  const posts = useSelector((state) => state.post.posts);
  const isLoading = useSelector((state) => state.post.isLoading);
  const activeSort = useSelector((state) => state.post.activeSort);

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getAllUsers());
  }, [dispatch]);

  const loggedInUser = users?.find(
    (dbUser) => dbUser.username === user.username
  );

  const loggedInUserFeed = getLoggedInUserFeed({ loggedInUser, posts });

  const userFeed = sortPostsByFilter(loggedInUserFeed, activeSort);

  return (
    <BatNetworkContainer>
      <div className="home-grid-container">
        <Sidebar />
        <div className="">
          <div className="flex-col">
            <h3 className="page-title">Home</h3>
            <NewPost />
            <SortBar />
            {isLoading ? (
              <div>Loading...</div>
            ) : userFeed.length ? (
              [...userFeed].reverse().map((post) => {
                return <PostCard key={post._id} post={post} />;
              })
            ) : (
              <div>
                No posts in your feed go follow some people to see their posts.
              </div>
            )}
          </div>
        </div>
        <RightSidebar />
      </div>
    </BatNetworkContainer>
  );
};

export { Home };
