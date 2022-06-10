import "./Explore.css";
import { BatNetworkContainer } from "../../Components/Wrapper/BatNetworkContainer";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { RightSidebar } from "../../Components/RightSidebar/RightSidebar";
import { getPosts, PostCard } from "../../features/post";
import { getAllUsers } from "../../features/user";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Explore = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);
  const isLoading = useSelector((state) => state.post.isLoading);

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <BatNetworkContainer>
      <div className="home-grid-container">
        <Sidebar />
        <div className="">
          <div className="flex-col">
            <h2 className="page-title">Explore</h2>
            {isLoading ? (
              <div>Loading...</div>
            ) : posts.length ? (
              [...posts].reverse().map((post) => {
                return <PostCard key={post._id} post={post} />;
              })
            ) : (
              <div>No posts</div>
            )}
          </div>
        </div>
        <RightSidebar />
      </div>
    </BatNetworkContainer>
  );
};

export { Explore };
