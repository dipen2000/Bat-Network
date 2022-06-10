import "./Bookmark.css";
import { BatNetworkContainer } from "../../Components/Wrapper/BatNetworkContainer";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { RightSidebar } from "../../Components/RightSidebar/RightSidebar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBookMarks, getAllUsers } from "../../features/user";
import { PostCard } from "../../features/post";

const Bookmark = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const { bookmarks, isLoading } = useSelector((state) => state.user);
  const posts = useSelector((state) => state.post.posts);

  useEffect(() => {
    dispatch(getBookMarks(token));
    dispatch(getAllUsers());
  }, [dispatch, token]);

  const bookmarkedPosts = posts?.filter((dbPost) =>
    bookmarks?.find((bookmark) => bookmark._id === dbPost._id)
  );

  return (
    <BatNetworkContainer>
      <div className="home-grid-container">
        <Sidebar />
        <div className="">
          <div className="flex-col">
            <h2 className="page-title ">Bookmarks</h2>
            {isLoading ? (
              <div>Loading...</div>
            ) : bookmarkedPosts.length ? (
              [...bookmarkedPosts].reverse().map((bookmarkedPost) => {
                return (
                  <PostCard key={bookmarkedPost._id} post={bookmarkedPost} />
                );
              })
            ) : (
              <div>No bookmarks</div>
            )}
          </div>
        </div>
        <RightSidebar />
      </div>
    </BatNetworkContainer>
  );
};

export { Bookmark };
