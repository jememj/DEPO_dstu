import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../constants/api_url";

export const fetchPosts = createAsyncThunk("fetchPosts", async () => {
  const res = await axios
    .get(`${API_URL}/posts`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
  return res;
});
export const fetchPopularPosts = createAsyncThunk(
  "fetchPopularPosts",
  async () => {
    const res = await axios
      .get(`${API_URL}/populars`)
      .then((res) => res.data)
      .catch((err) => console.log(err));
    return res;
  }
);
export const fetchMainPost = createAsyncThunk("fetchMainPost", async () => {
  const res = await axios
    .get(`${API_URL}/posts?_where[isMainPost]=true`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
  return res;
});
export const fetchPostsByTheme = createAsyncThunk(
  "fetchPostsByTheme",
  async (theme) => {
    const res = await axios
      .get(`${API_URL}/posts?_where[theme]=${theme}`)
      .then((res) => res.data)
      .catch((err) => console.log(err));
    return res;
  }
);
export const fetchPostsByRubric = createAsyncThunk(
  "fetchPostsByRubric",
  async ({ rubric, theme }) => {
    const res = await axios
      .get(
        `${API_URL}/posts?_where[rubric]=${rubric}${
          theme ? `&[theme]=${theme}` : ""
        }`
      )
      .then((res) => res.data)
      .catch((err) => console.log(err));
    return res;
  }
);
export const fetchPostById = createAsyncThunk("fetchPostById", async (id) => {
  const res = await axios
    .get(`${API_URL}/posts/${id}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
  return res;
});
export const fetchCommentsById = createAsyncThunk(
  "fetchCommentsById",
  async (id) => {
    const res = await axios
      .get(`${API_URL}/comments?_where[post.id]=${id}`)
      .then((res) => res.data)
      .catch((err) => console.log(err));
    return res;
  }
);
export const addComments = createAsyncThunk("addComments", async (data) => {
  console.log("data", data);
  const res = await axios
    .post(`${API_URL}/comments`, {
      name: data.name,
      text: data.text,
      post: data.post,
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
  return res;
});

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    popularPosts: [],
    mainPost: {},
    postsByTheme: [],
    postsByRubric: [],
    currentPost: [],
    commentsById: [],
    views: 0,
    status: false,
  },
  reducers: {
    setArticlesByTheme(state, action) {
      state.articlesByTheme = state.articles.filter(
        (e) => e.theme === action.payload
      );
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    resetThemePosts(state) {
      state.postsByTheme = [];
    },
    resetRubricPosts(state) {
      state.postsByRubric = [];
    },
    resetPost(state) {
      state.currentPost = [];
    },
    resetComments(state) {
      state.commentsById = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = [...action.payload];
      state.status = true;
    });
    builder.addCase(fetchPopularPosts.fulfilled, (state, action) => {
      state.popularPosts = [...action.payload];
      state.status = true;
    });
    builder.addCase(fetchMainPost.fulfilled, (state, action) => {
      state.mainPost = action.payload[0];
      state.status = true;
    });
    builder.addCase(fetchPostsByTheme.fulfilled, (state, action) => {
      state.postsByTheme = action.payload;
      state.status = true;
    });
    builder.addCase(fetchPostsByRubric.fulfilled, (state, action) => {
      state.postsByRubric = action.payload;
      console.log(action.payload);
      state.status = true;
    });
    builder.addCase(fetchPostById.fulfilled, (state, action) => {
      state.currentPost = action.payload;
      state.views = action.payload.views;
    });
    builder.addCase(fetchCommentsById.fulfilled, (state, action) => {
      state.commentsById = action.payload;
      state.status = true;
    });
  },
});

export const {
  setArticlesByTheme,
  setStatus,
  resetPost,
  resetComments,
  resetThemePosts,
  resetRubricPosts,
} = postsSlice.actions;

export default postsSlice.reducer;
