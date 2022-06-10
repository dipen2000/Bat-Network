import axios from "axios";

const getPostsService = async () => {
  return await axios.get("/api/posts");
};

const getSinglePostService = async (postId) => {
  return await axios.get(`/api/posts/${postId}`);
};

export { getPostsService, getSinglePostService };
