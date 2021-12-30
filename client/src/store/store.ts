import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slicers/authSlicers";
import { navReducer } from "./slicers/navSlicers";

const store = configureStore({
  reducer: {
    authReducer,
    navReducer,
  },
});
export default store;
