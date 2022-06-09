import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getPostsService,
  getSinglePostService,
  getPostsOfUserService,
  likePostService,
  dislikePostService,
  createPostService,
  deletePostService,
  editPostService,
  addCommentService,
  deleteCommentService,
  editCommentService,
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

export const likePost = createAsyncThunk(
  "post/likePost",
  async ({ token, postId }) => {
    try {
      const { data, status } = await likePostService(token, postId);

      if (status === 201) {
        return data.posts;
      }
    } catch (e) {
      console.log(e);
    }
  }
);

export const dislikePost = createAsyncThunk(
  "post/dislikePost",
  async ({ token, postId }) => {
    try {
      const { data, status } = await dislikePostService(token, postId);

      if (status === 201) {
        return data.posts;
      }
    } catch (e) {
      console.log(e);
    }
  }
);

export const createPost = createAsyncThunk(
  "post/createPost",
  async ({ input, token, user }) => {
    try {
      const { data, status } = await createPostService(input, token, user);
      console.log(data.posts);
      if (status === 201) {
        return data.posts;
      }
    } catch (e) {
      console.log(e);
    }
  }
);

export const deletePost = createAsyncThunk(
  "post/deletePost",
  async ({ token, postId }) => {
    try {
      const { data, status } = await deletePostService(token, postId);

      if (status === 201) {
        return data.posts;
      }
    } catch (e) {
      console.log(e);
    }
  }
);

export const editPost = createAsyncThunk(
  "post/editPost",
  async ({ input, token, postId }) => {
    try {
      const { data, status } = await editPostService(input, token, postId);

      if (status === 201) {
        return data.posts;
      }
    } catch (e) {
      console.log(e);
    }
  }
);

export const addComment = createAsyncThunk(
  "post/addComment",
  async ({ token, commentData, postId }) => {
    try {
      const { data, status } = await addCommentService(
        token,
        commentData,
        postId
      );

      if (status === 201) {
        return data.posts;
      }
    } catch (e) {
      console.log(e);
    }
  }
);

export const deleteComment = createAsyncThunk(
  "post/deleteComment",
  async ({ token, commentId, postId }) => {
    try {
      const { data, status } = await deleteCommentService(
        token,
        commentId,
        postId
      );

      if (status === 201) {
        return data.posts;
      }
    } catch (e) {
      console.log(e);
    }
  }
);

export const editComment = createAsyncThunk(
  "post/editComment",
  async ({ token, commentData, postId, commentId }) => {
    try {
      const { data, status } = await editCommentService(
        token,
        commentData,
        postId,
        commentId
      );

      if (status === 201) {
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
    [likePost.fulfilled]: (state, { payload }) => {
      state.posts = payload;
    },
    [dislikePost.fulfilled]: (state, { payload }) => {
      state.posts = payload;
    },
    [createPost.fulfilled]: (state, { payload }) => {
      state.posts = payload;
    },
    [deletePost.fulfilled]: (state, { payload }) => {
      state.posts = payload;
    },
    [editPost.fulfilled]: (state, { payload }) => {
      state.posts = payload;
    },
    [addComment.fulfilled]: (state, { payload }) => {
      state.posts = payload;
    },
    [deleteComment.fulfilled]: (state, { payload }) => {
      state.posts = payload;
    },
    [editComment.fulfilled]: (state, { payload }) => {
      state.posts = payload;
    },
  },
});

export const { resetPostsOfUser } = postSlice.actions;

export default postSlice.reducer;
