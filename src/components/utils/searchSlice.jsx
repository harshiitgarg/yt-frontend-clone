import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cachedResults: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});
export default searchSlice.reducer;
export const { cachedResults } = searchSlice.actions;
