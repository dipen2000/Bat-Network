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

const likePostService = async (token, postId) => {
  return await axios.post(
    `/api/posts/like/${postId}`,
    {},
    {
      headers: { authorization: token },
    }
  );
};

const dislikePostService = async (token, postId) => {
  return await axios.post(
    `/api/posts/dislike/${postId}`,
    {},
    {
      headers: { authorization: token },
    }
  );
};

const createPostService = async (input, token, user) => {
  return await axios.post(
    "/api/posts",
    {
      postData: {
        content: input,
        fullName: user.fullName,
      },
    },
    {
      headers: { authorization: token },
    }
  );
};

const deletePostService = async (token, postId) => {
  return await axios.delete(`/api/posts/${postId}`, {
    headers: { authorization: token },
  });
};

const editPostService = async (input, token, postId) => {
  return await axios.post(
    `/api/posts/edit/${postId}`,
    {
      postData: { content: input },
    },
    {
      headers: { authorization: token },
    }
  );
};

const addCommentService = async (token, commentData, postId) => {
  return await axios.post(
    `/api/comments/add/${postId}`,
    { commentData },
    {
      headers: { authorization: token },
    }
  );
};

const deleteCommentService = async (token, commentId, postId) => {
  return await axios.delete(`/api/comments/delete/${postId}/${commentId}`, {
    headers: { authorization: token },
  });
};

const editCommentService = async (token, commentData, postId, commentId) => {
  return await axios.post(
    `/api/comments/edit/${postId}/${commentId}`,
    { commentData },
    {
      headers: { authorization: token },
    }
  );
};

export {
  getPostsService,
  getSinglePostService,
  getPostsOfUserService,
  likePostService,
  dislikePostService,
  createPostService,
  deletePostService,
  editPostService,
  addCommentService,
  deleteCommentService,
  editCommentService,
};
