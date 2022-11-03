import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchArticles = createAsyncThunk(
  "api/fetchArticles",
  async (_, { getState }) => {
    const res = await axios
      .get(`http://localhost:3000/api/articles`)
      .then((res) => res.data)
      .catch((err) => console.log(err));
    return res;
  }
);
export const fetchArticlesByTheme = createAsyncThunk(
  "api/fetchArticlesByTheme",
  async (theme) => {
    const res = await axios
      .get(`http://localhost:3000/api/articles/${theme}`)
      .then((res) => res.data)
      .catch((err) => console.log(err));
    return res;
  }
);
export const fetchArticleById = createAsyncThunk(
  "api/fetchArticleById",
  async (id) => {
    const res = await axios
      .get(`http://localhost:3000/api/article/${id}`)
      .then((res) => res.data)
      .catch((err) => console.log(err));
    return res;
  }
);

const articlesSlice = createSlice({
  name: "Articles",
  initialState: {
    articles: [],
    articlesByTheme: [],
    currentArticle: [],
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
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.articles = [...action.payload.articles];
      state.status = true;
    });
    builder.addCase(fetchArticlesByTheme.fulfilled, (state, action) => {
      state.articlesByTheme = action.payload.articles;
      state.status = true;
    });
    builder.addCase(fetchArticleById.fulfilled, (state, action) => {
      state.currentArticle = action.payload.articles;
      state.status = true;
    });
  },
});

export const { setArticlesByTheme, setStatus } = articlesSlice.actions;

export default articlesSlice.reducer;
