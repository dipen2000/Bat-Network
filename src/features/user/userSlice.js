import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllUsersService,
  updateProfileService,
  addBookmarkService,
  getBookMarksService,
  removeBookMarkService,
  unfollowUserService,
  followUserService,
} from "../../services/userService";

const updateFollowingUser = (users, followingUser) => {
  return [...users].map((user) =>
    user._id === followingUser._id ? followingUser : user
  );
};

const updateFollowedUser = (users, followedUser) => {
  return [...users].map((user) =>
    user._id === followedUser._id ? followedUser : user
  );
};

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
      console.log(data);
      if (status === 200) {
        return data.bookmarks;
      }
    } catch (e) {
      console.log(e);
    }
  }
);

export const unfollowUser = createAsyncThunk(
  "user/unfollowUser",
  async ({ token, followUserId }) => {
    try {
      const { data, status } = await unfollowUserService(token, followUserId);
      console.log(data);

      if (status === 200) {
        return data;
      }
    } catch (e) {
      console.log(e);
    }
  }
);

export const followUser = createAsyncThunk(
  "user/followUser",
  async ({ token, followUserId }) => {
    try {
      const { data, status } = await followUserService(token, followUserId);

      if (status === 200) {
        return data;
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
    [unfollowUser.fulfilled]: (state, { payload }) => {
      state.users = updateFollowingUser(state.users, payload.user);
      state.users = updateFollowedUser(state.users, payload.followUser);
    },
    [followUser.fulfilled]: (state, { payload }) => {
      state.users = updateFollowingUser(state.users, payload.user);
      state.users = updateFollowedUser(state.users, payload.followUser);
    },
  },
});

export default userSlice.reducer;
