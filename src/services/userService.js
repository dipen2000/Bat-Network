import axios from "axios";

const getAllUsersService = async () => {
  return await axios.get("/api/users");
};

const updateProfileService = async (editInput, token) => {
  return await axios.post(
    "/api/users/edit",
    { userData: editInput },
    { headers: { authorization: token } }
  );
};

const getBookMarksService = async (token) => {
  return await axios.get("/api/users/bookmark", {
    headers: { authorization: token },
  });
};

const addBookmarkService = async (token, postId) => {
  return await axios.post(
    `/api/users/bookmark/${postId}`,
    {},
    {
      headers: { authorization: token },
    }
  );
};

const removeBookMarkService = async (token, postId) => {
  return await axios.post(
    `/api/users/remove-bookmark/${postId}`,
    {},
    {
      headers: { authorization: token },
    }
  );
};

const unfollowUserService = async (token, followUserId) => {
  return await axios.post(
    `/api/users/unfollow/${followUserId}`,
    {},
    {
      headers: { authorization: token },
    }
  );
};

const followUserService = async (token, followUserId) => {
  return await axios.post(
    `/api/users/follow/${followUserId}`,
    {},
    {
      headers: { authorization: token },
    }
  );
};

export {
  getAllUsersService,
  updateProfileService,
  addBookmarkService,
  getBookMarksService,
  removeBookMarkService,
  unfollowUserService,
  followUserService,
};
