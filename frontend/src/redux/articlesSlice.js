import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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
const articlesSlice = createSlice({
  name: "Articles",
  initialState: {
    articles: [],
    articlesByTheme: [],
  },
  reducers: {
    setArticlesByTheme(state, action) {
      state.articlesByTheme = state.articles.filter(
        (e) => e.theme === action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.articles = [...action.payload.articles];
    });
    builder.addCase(fetchArticlesByTheme.fulfilled, (state, action) => {
      console.log("action", action.payload.articles);
      state.articlesByTheme = action.payload.articles;
    });
  },
});

export const { setArticlesByTheme } = articlesSlice.actions;

export default articlesSlice.reducer;
