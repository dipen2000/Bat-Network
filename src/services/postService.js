import axios from "axios";

const getPostsService = async () => {
  return await axios.get("/api/posts");
};

const getSinglePostService = async (postId) => {
  return await axios.get(`/api/posts/${postId}`);
};

const getPostsOfUserService = async (username) => {
  return await axios.get(`/api/posts/user/${username}`);
};

export { getPostsService, getSinglePostService, getPostsOfUserService };
