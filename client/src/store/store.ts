import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slicers/authSlicers";
import { navReducer } from "./slicers/navSlicers";
import { projectReducer } from "./slicers/projectSlicers";

const store = configureStore({
  reducer: {
    authReducer,
    navReducer,
    projectReducer,
  },
});
export default store;
