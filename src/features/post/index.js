import postSlice from "./postSlice";

export {
  getPosts,
  getSinglePost,
  getPostsOfUser,
  resetPostsOfUser,
  likePost,
  dislikePost,
  createPost,
} from "./postSlice";
export { PostCard } from "./components/PostCard";
export { NewPost } from "./components/NewPost";
export { NewPostModal } from "./components/NewPostModal";
export { CommentCard } from "./components/CommentCard";
export default postSlice.reducer;
