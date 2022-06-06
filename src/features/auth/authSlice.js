import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginService, signUpService } from "../../services/authServices";

const loginHandler = createAsyncThunk("auth/loginHandler", async (arg) => {
  const { inputData, setInputData } = arg;
  try {
    const { data, status } = await loginService(inputData.input);

    if (status === 200) {
      localStorage.setItem("token", data.encodedToken);
      localStorage.setItem("user", JSON.stringify(data.foundUser));
    }

    return data;
  } catch (e) {
    setInputData((prevState) => ({
      ...prevState,
      error: "Check if the credentials are correct.",
    }));
  }
});

const signupHandler = createAsyncThunk("auth/signupHandler", async (arg) => {
  const { inputData, setInputData } = arg;

  try {
    const { data, status } = await signUpService(inputData.input);

    if (status === 201) {
      localStorage.setItem("token", data.encodedToken);
      localStorage.setItem("user", JSON.stringify(data.createdUser));
    }

    return data;
  } catch (e) {
    setInputData((prevState) => ({
      ...prevState,
      error: "The user maybe already existing.",
    }));
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token") || null,
    user: JSON.parse(localStorage.getItem("user")) || null,
    isLoading: false,
  },
  reducers: {
    logoutHandler: (state) => {
      state.token = null;
      state.user = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },

  extraReducers: {
    [loginHandler.pending]: (state) => {
      state.isLoading = true;
    },
    [loginHandler.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.token = payload.encodedToken;
      state.user = payload.foundUser;
    },
    [signupHandler.pending]: (state) => {
      state.isLoading = true;
    },
    [signupHandler.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.token = payload.encodedToken;
      state.user = payload.createdUser;
    },
  },
});

export const { logoutHandler } = authSlice.actions;

export { loginHandler, signupHandler };

export default authSlice.reducer;
