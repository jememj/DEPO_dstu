import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk(
  "fetchPosts",
  async (_, { getState }) => {
    const res = await axios
      .get(`http://localhost:1337/posts`)
      .then((res) => res.data)
      .catch((err) => console.log(err));
    return res;
  }
);
export const fetchPostsByTheme = createAsyncThunk(
  "fetchPostsByTheme",
  async (theme) => {
    const res = await axios
      .get(`http://localhost:1337/posts?_where[theme]=${theme}`)
      .then((res) => res.data)
      .catch((err) => console.log(err));
    return res;
  }
);
export const fetchPostsByRubric = createAsyncThunk(
  "fetchPostsByRubric",
  async (rubric) => {
    const res = await axios
      .get(`http://localhost:1337/posts?_where[rubric]=${rubric}`)
      .then((res) => res.data)
      .catch((err) => console.log(err));
    return res;
  }
);
export const fetchPostById = createAsyncThunk("fetchPostById", async (id) => {
  const res = await axios
    .get(`http://localhost:1337/posts/${id}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
  return res;
});
export const fetchCommentsById = createAsyncThunk(
  "fetchCommentsById",
  async (id) => {
    const res = await axios
      .get(`http://localhost:1337/comments?_where[post.id]=${id}`)
      .then((res) => res.data)
      .catch((err) => console.log(err));
    return res;
  }
);
export const addComments = createAsyncThunk("addComments", async (data) => {
  console.log("data", data);
  const res = await axios
    .post(`http://localhost:1337/comments`, {
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
    postsByTheme: [],
    postsByRubric: [],
    currentPost: [],
    commentsById: [],
    status: true,
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
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = [...action.payload];
      state.status = true;
    });
    builder.addCase(fetchPostsByTheme.fulfilled, (state, action) => {
      state.postsByTheme = action.payload;
      state.status = true;
    });
    builder.addCase(fetchPostsByRubric.fulfilled, (state, action) => {
      state.postsByRubric = action.payload;
      state.status = true;
    });
    builder.addCase(fetchPostById.fulfilled, (state, action) => {
      state.currentPost = action.payload;
      state.status = true;
    });
    builder.addCase(fetchCommentsById.fulfilled, (state, action) => {
      state.commentsById = action.payload;
    });
    builder.addCase(addComments.fulfilled, (state, action) => {
      console.log("action.payload", action.payload);
    });
  },
});

export const { setArticlesByTheme, setStatus } = postsSlice.actions;

export default postsSlice.reducer;
