import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllUsersService,
  updateProfileService,
  addBookmarkService,
  getBookMarksService,
  removeBookMarkService,
} from "../../services/userService";

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

export const updateProfile = createAsyncThunk(
  "user/updateProfile",
  async ({ editInput, token }) => {
    try {
      const { data, status } = await updateProfileService(editInput, token);

      if (status === 201) {
        return data.user;
      }
    } catch (e) {
      console.log(e);
    }
  }
);

export const getBookMarks = createAsyncThunk(
  "user/getBookMarks",
  async (token) => {
    try {
      const { data, status } = await getBookMarksService(token);

      if (status === 200) {
        return data.bookmarks;
      }
    } catch (e) {
      console.log(e);
    }
  }
);

export const addBookMark = createAsyncThunk(
  "user/addBookMark",
  async ({ token, postId }) => {
    try {
      const { data, status } = await addBookmarkService(token, postId);

      if (status === 200 || status === 201) {
        return data.bookmarks;
      }
    } catch (e) {
      console.log(e);
    }
  }
);

export const removeBookMark = createAsyncThunk(
  "user/removeBookMark",
  async ({ token, postId }) => {
    try {
      const { data, status } = await removeBookMarkService(token, postId);

      if (status === 200) {
        return data.bookmarks;
      }
    } catch (e) {
      console.log(e);
    }
  }
);

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
    [updateProfile.fulfilled]: (state, { payload }) => {
      state.users = state.users.map((user) => {
        return user.username === payload.username ? payload : user;
      });
      state.isLoading = false;
    },
    [addBookMark.fulfilled]: (state, { payload }) => {
      state.bookmarks = payload;
    },
    [getBookMarks.pending]: (state) => {
      state.isLoading = true;
    },
    [getBookMarks.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.bookmarks = payload;
    },
    [removeBookMark.fulfilled]: (state, { payload }) => {
      state.bookmarks = payload;
    },
  },
});

export default userSlice.reducer;
