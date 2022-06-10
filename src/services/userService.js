import axios from "axios";

const getAllUsersService = async () => {
  return await axios.get("/api/users");
};

export { getAllUsersService };
