import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getPostsService,
  getSinglePostService,
  getPostsOfUserService,
} from "../../services/postService";

export const getPosts = createAsyncThunk("post/getPosts", async () => {
  try {
    const { data, status } = await getPostsService();

    if (status === 200) {
      return data.posts;
    }
  } catch (e) {
    console.log(e);
  }
});

export const getSinglePost = createAsyncThunk(
  "post/getSinglePost",
  async (postId) => {
    try {
      const { data, status } = await getSinglePostService(postId);
      if (status === 200) {
        return data.post;
      }
    } catch (e) {
      console.log(e);
    }
  }
);

export const getPostsOfUser = createAsyncThunk(
  "post/getPostsOfUser",
  async (username) => {
    try {
      const { data, status } = await getPostsOfUserService(username);

      if (status === 200) {
        return data.posts;
      }
    } catch (e) {
      console.log(e);
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState: {
    isLoading: false,
    posts: [],
    singlePost: null,
    postsOfUser: [],
    activeSort: "Latest",
    error: "",
  },

  reducers: {
    resetPostsOfUser: (state) => {
      state.postsOfUser = [];
    },
  },

  extraReducers: {
    [getPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [getPosts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.posts = payload;
    },
    [getSinglePost.pending]: (state) => {
      state.isLoading = true;
    },
    [getSinglePost.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.singlePost = payload;
    },
    [getPostsOfUser.pending]: (state) => {
      state.isLoading = true;
    },
    [getPostsOfUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.postsOfUser = payload;
    },
  },
});

export const { resetPostsOfUser } = postSlice.actions;

export default postSlice.reducer;
