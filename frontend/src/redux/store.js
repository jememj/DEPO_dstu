import { combineReducers, configureStore } from "@reduxjs/toolkit";
import articlesSlice from "./articlesSlice";

const rootReducer = combineReducers({
  articlesSlice: articlesSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
