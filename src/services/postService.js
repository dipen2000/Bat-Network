import axios from "axios";

const getPostsService = async () => {
  return await axios.get("/api/posts");
};

export { getPostsService };
