import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postsSlice from "./postsSlice";
import userSlice from "./userSlice";

const rootReducer = combineReducers({
  postsSlice: postsSlice,
  userSlice: userSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
