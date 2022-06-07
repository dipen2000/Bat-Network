import "./Explore.css";
import { BatNetworkContainer } from "../../Components/Wrapper/BatNetworkContainer";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { RightSidebar } from "../../Components/RightSidebar/RightSidebar";
import { getPosts } from "../../features/post";
import { getAllUsers } from "../../features/post";
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
      <div className="home-grid-container bord-3-purple">
        <Sidebar />

        <RightSidebar />
      </div>
    </BatNetworkContainer>
  );
};

export { Explore };
