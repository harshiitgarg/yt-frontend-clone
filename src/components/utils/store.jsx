import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import themeSlice from "./themeSlice";
import channelIdSlice from "./channelIdSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    chat: chatSlice,
    theme: themeSlice,
    channelId: channelIdSlice,
  },
});

export default store;
