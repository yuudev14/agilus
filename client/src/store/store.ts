import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slicers/authSlicers";

const store = configureStore({
  reducer: {
    authReducer: authReducer,
  },
});
export default store;
