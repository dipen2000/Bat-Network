import postSlice from "./postSlice";

export {
  getPosts,
  getSinglePost,
  getPostsOfUser,
  resetPostsOfUser,
  likePost,
  dislikePost,
} from "./postSlice";
export { PostCard } from "./components/PostCard";
export { CommentCard } from "./components/CommentCard";
export default postSlice.reducer;
