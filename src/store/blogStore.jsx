import { configureStore } from "@reduxjs/toolkit";
import blog from "../slices/blogSlice";

const store = configureStore({
  reducer: {
    blog: blog,
  },
});
export default store;
