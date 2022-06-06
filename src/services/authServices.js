import axios from "axios";

const loginService = async (inputData) => {
  return axios.post("/api/auth/login", inputData);
};

const signUpService = async (inputData) => {
  return axios.post("/api/auth/signup", inputData);
};

export { loginService, signUpService };
