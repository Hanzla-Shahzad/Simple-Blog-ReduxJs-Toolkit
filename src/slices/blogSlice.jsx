import { createSlice } from "@reduxjs/toolkit";
import { getData } from "../thunks/blogThunk";

const blogReducer = createSlice({
  name: "blog",
  initialState: {
    data: [],
    error: false,
    pending: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getData.pending, (state) => {
      state.pending = true;
    });
    builder.addCase(getData.rejected, (state) => {
      state.error = true;
    });
  },
});
export default blogReducer.reducer;
