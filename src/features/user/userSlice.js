import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllUsersService } from "../../services/userService";

export const getAllUsers = createAsyncThunk("user/getAllUsers", async () => {
  try {
    const { data, status } = await getAllUsersService();

    if (status === 200) {
      return data.users;
    }
  } catch (e) {
    console.log(e);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    bookmarks: [],
    isLoading: false,
    error: "",
  },

  reducers: {},

  extraReducers: {
    [getAllUsers.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllUsers.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.users = payload;
    },
  },
});

export default userSlice.reducer;
