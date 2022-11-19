import { createSlice, current } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: "",
    username: "",
    logIn: false,
  },
  reducers: {
    setUser(state, action) {
      console.log("action", action);
      state.token = action.payload.token;
      state.username = action.payload.username;
    },
    removeUser(state) {
      state.token = "";
      state.username = "";
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
