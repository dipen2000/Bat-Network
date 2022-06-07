import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPostsService } from "../../services/postService";

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

const postSlice = createSlice({
  name: "post",
  initialState: {
    isLoading: false,
    posts: [],
    singlePost: null,
    activeSort: "Latest",
    error: "",
  },

  reducers: {},

  extraReducers: {
    [getPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [getPosts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.posts = payload;
    },
  },
});

export default postSlice.reducer;
