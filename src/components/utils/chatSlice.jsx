import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessages: (state, action) => {
      // Max limit of messages = 25
        state.messages.splice(25,1);
      state.messages.unshift(action.payload);
    },
  },
});

export default chatSlice.reducer;
export const { addMessages } = chatSlice.actions;
