import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";
import qs from "qs";

const qsConfig = {
  sort: (a, b) => a.localeCompare(b),
  skipNulls: true,
  strictNullHandling: true,
  encodeValuesOnly: true,
  indices: false,
  addQueryPrefix: true,
};

export const fetchArticles = createAsyncThunk(
  "fetchArticles",
  async (_, { getState }) => {
    const { articlesSlice } = getState();
    const res = await axios
      .get(`http://localhost:5000/articles`)
      .then((res) => res.data)
      .catch((err) => console.log(err));
    return res;
  }
);
export const fetchArticlesByTheme = createAsyncThunk(
  "fetchArticlesByTheme",
  async (theme) => {
    const res = await axios
      .get(`http://localhost:5000/articles/theme/${theme}`)
      .then((res) => res.data)
      .catch((err) => console.log(err));
    return res;
  }
);
export const fetchArticlesByRubric = createAsyncThunk(
  "fetchArticlesByRubric",
  async (rubric) => {
    const res = await axios
      .get(`http://localhost:5000/articles/rubric/${rubric}`)
      .then((res) => res.data)
      .catch((err) => console.log(err));
    return res;
  }
);
export const fetchArticleById = createAsyncThunk(
  "fetchArticleById",
  async (id) => {
    const res = await axios
      .get(`http://localhost:5000/article/${id}`)
      // .get(`http://localhost:3000/api/article/${id}?theme=govno,mocha`)
      .then((res) => res.data)
      .catch((err) => console.log(err));
    return res;
  }
);
export const fetchCommentsById = createAsyncThunk(
  "fetchCommentsById",
  async (id) => {
    const res = await axios
      .get(`http://localhost:5000/article/comments/${id}`)
      .then((res) => res.data)
      .catch((err) => console.log(err));
    return res;
  }
);
export const addComments = createAsyncThunk("addComments", async (data) => {
  const res = await axios
    .post(`http://localhost:5000/article/comments`, { data })
    .then((res) => res.data)
    .catch((err) => console.log(err));
  return res;
});
// const filters = {
//   theme: ["govno", "mocha", "sup"],
//   article: "vasek",
//   author: "keker",
//   biggerThan: 55,
// };
// console.log(
//   "lol",
//   `http://localhost:3000/api/article/${id}${qs.stringify(
//     filters,
//     qsConfig
//   )}`
// );

const articlesSlice = createSlice({
  name: "Articles",
  initialState: {
    articles: [],
    articlesByTheme: [],
    currentArticle: [],
    commentsById: [],
    status: true,
    filtersRubric: "",
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
    setFiltersRubric(state, action) {
      state.filtersRubric = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.articles = [...action.payload];
      state.status = true;
    });
    builder.addCase(fetchArticlesByTheme.fulfilled, (state, action) => {
      state.articlesByTheme = action.payload;
      state.status = true;
    });
    builder.addCase(fetchArticleById.fulfilled, (state, action) => {
      state.currentArticle = action.payload;
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

export const {
  setArticlesByTheme,
  setStatus,
  setFiltersTheme,
  setFiltersRubric,
} = articlesSlice.actions;

export default articlesSlice.reducer;
