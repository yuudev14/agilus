import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authStateType } from "../../types/types";
import { registerAction } from "../actions/authActions";

const initialState: authStateType<null | boolean> = {
  auth: null,
  user: {},
  loading: false,
};

const authSlicers = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(registerAction.fulfilled, (_, action) => {
      return {
        auth: true,
        user: action.payload ? action.payload : {},
        loading: false,
      };
    });
  },
});

// export {} = authSlicers.actions
export const authReducer = authSlicers.reducer;
