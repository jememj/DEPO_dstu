import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchLogin = createAsyncThunk(
  "fetchLogin",
  async ({ e, navigate }) => {
    const res = await axios
      .post(`http://localhost:1337/auth/local`, {
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
      .post(`http://localhost:1337/auth/local/register`, {
        username: e.target.username.value,
        email: e.target.email.value,
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
export const addPostToFav = createAsyncThunk(
  "addPostToFav",
  async (data, { getState }) => {
    console.log("data", data);
    const { userSlice } = getState();
    const res = await axios
      .put(
        `http://localhost:1337/users/${userSlice.userId}?_where[user.username]=${userSlice.username}`,
        {}
      )
      .then((res) => res.data)
      .catch((err) => console.log(err));
    return res;
  }
);
export const delPostFromFav = createAsyncThunk(
  "delPostFromFav",
  async (data) => {
    console.log("data", data);
    // const res = await axios
    //   .post(`http://localhost:1337/users`, {
    //     name: data.name,
    //     text: data.text,
    //     post: data.post,
    //   })
    //   .then((res) => res.data)
    //   .catch((err) => console.log(err));
    // return res;
  }
);
const userSlice = createSlice({
  name: "user",
  initialState: {
    token: "",
    username: "",
    userId: "",
    favoritesPosts: [],
  },
  reducers: {
    setUser(state, action) {
      state.token = action.payload.token;
      state.username = action.payload.username;
    },
    signOut(state) {
      state.token = "";
      state.username = "";
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
      localStorage.setItem("token", action.payload.jwt);
    });
    builder.addCase(fetchRegistration.fulfilled, (state, action) => {
      state.token = action.payload.jwt;
      state.username = action.payload.user.username;
      state.userId = action.payload.user.id;
      localStorage.setItem("token", action.payload.jwt);
    });
  },
});

export const { setUser, signOut } = userSlice.actions;

export default userSlice.reducer;
