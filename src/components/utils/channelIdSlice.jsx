import { createSlice } from "@reduxjs/toolkit";

const channelIdSlice = createSlice({
  name: "channelId",
  initialState: { channelId: null },
  reducers: {
    setChannelId: (state, action) => {
      state.channelId = action.payload;
    },
  },
});

export default channelIdSlice.reducer;
export const { setChannelId } = channelIdSlice.actions;
