import postSlice from "./postSlice";

export {
  getPosts,
  getSinglePost,
  getPostsOfUser,
  resetPostsOfUser,
  likePost,
  dislikePost,
  createPost,
  deletePost,
  editPost,
} from "./postSlice";
export { PostCard } from "./components/PostCard";
export { NewPost } from "./components/NewPost";
export { NewPostModal } from "./components/NewPostModal";
export { PostOptionsModal } from "./components/PostOptionsModal";
export { CommentCard } from "./components/CommentCard";
export default postSlice.reducer;
