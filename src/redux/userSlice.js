import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../constants/api_url";

export const fetchLogin = createAsyncThunk(
  "fetchLogin",
  async ({ e, navigate }) => {
    const res = await axios
      .post(`${API_URL}/auth/local`, {
        identifier: e.target.email.value,
        password: e.target.password.value,
      })
      .then((res) => {
        navigate("/profile");
        return res.data;
      })
      .catch((err) => console.log(err));
    return res;
  }
);
export const fetchRegistration = createAsyncThunk(
  "fetchRegistration",
  async ({ e, navigate }) => {
    const res = await axios
      .post(`${API_URL}/auth/local/register`, {
        username: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value,
      })
      .then((res) => {
        navigate("/profile");
        console.log("res", res);
        return res.data;
      })
      .catch((err) => console.log(err));
    return res;
  }
);
export const addPostToFav = createAsyncThunk(
  "addPostToFav",
  async (data, { getState }) => {
    console.log("data", data);
    const { userSlice } = getState();
    const res = await axios
      .put(
        `${API_URL}/users/${userSlice.userId}?_where[user.username]=${userSlice.username}`,
        { favoritesPosts: [...userSlice.favoritesPosts, data] }
      )
      .then((res) => res.data)
      .catch((err) => console.log(err));
    return res;
  }
);
export const delPostFromFav = createAsyncThunk(
  "delPostFromFav",
  async (data, { getState }) => {
    console.log("data", data);
    const { userSlice } = getState();
    const newList = userSlice.favoritesPosts.filter((i) => i.id !== data.id);
    const res = await axios
      .put(
        `${API_URL}/users/${userSlice.userId}?_where[user.username]=${userSlice.username}`,
        { favoritesPosts: newList }
      )
      .then((res) => res.data)
      .catch((err) => console.log(err));
    return res;
  }
);
const userSlice = createSlice({
  name: "user",
  initialState: {
    token: "",
    username: "",
    userId: "",
    email: "",
    favoritesPosts: [],
  },
  reducers: {
    setUser(state, action) {
      state.token = action.payload.token;
      state.username = action.payload.username;
      state.email = action.payload.email;
    },
    signOut(state) {
      state.token = "";
      state.username = "";
      state.email = "";
      state.favoritesPosts = [];
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      console.log("action", action);
      state.token = action.payload.jwt;
      state.username = action.payload.user.username;
      state.favoritesPosts = action.payload.user.favoritesPosts;
      state.userId = action.payload.user.id;
      state.email = action.payload.user.email;
      localStorage.setItem("token", action.payload.jwt);
    });
    builder.addCase(fetchRegistration.fulfilled, (state, action) => {
      state.token = action.payload.jwt;
      state.username = action.payload.user.username;
      state.userId = action.payload.user.id;
      localStorage.setItem("token", action.payload.jwt);
    });
    builder.addCase(addPostToFav.fulfilled, (state, action) => {
      state.favoritesPosts = action.payload.favoritesPosts;
    });
    builder.addCase(delPostFromFav.fulfilled, (state, action) => {
      state.favoritesPosts = action.payload.favoritesPosts;
    });
  },
});

export const { setUser, signOut } = userSlice.actions;

export default userSlice.reducer;
