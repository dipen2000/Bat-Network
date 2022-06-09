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
import { getLoggedInUserFeed } from "../../Utils";

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const users = useSelector((state) => state.user.users);
  const posts = useSelector((state) => state.post.posts);
  const isLoading = useSelector((state) => state.post.isLoading);

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getAllUsers());
  }, [dispatch]);

  const loggedInUser = users?.find(
    (dbUser) => dbUser.username === user.username
  );

  const loggedInUserFeed = getLoggedInUserFeed({ loggedInUser, posts });

  return (
    <BatNetworkContainer>
      <div className="home-grid-container bord-3-purple">
        <Sidebar />
        <div className="bord-3-red">
          <div className="flex-col">
            <div className="page-title bord-3-black">Home</div>
            <NewPost />
            <SortBar />
            {isLoading ? (
              <div>Loading...</div>
            ) : loggedInUserFeed.length ? (
              [...loggedInUserFeed].reverse().map((post) => {
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
