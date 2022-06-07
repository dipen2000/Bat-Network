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

export { getAllUsersService, updateProfileService };
