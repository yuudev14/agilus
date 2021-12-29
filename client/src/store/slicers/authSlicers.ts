import { createSlice } from "@reduxjs/toolkit";
import { authStateType } from "../../types/types";
import {
  loginAction,
  logoutAction,
  registerAction,
  validateTokenAction,
} from "../actions/authActions";

const initialState: authStateType<null | boolean> = {
  auth: null,
  user: {},
  loading: false,
  errors: {},
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
        errors: {},
      };
    });
    builder.addCase(loginAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginAction.fulfilled, (_, action) => {
      return {
        auth: true,
        user: action.payload ? action.payload : {},
        loading: false,
        errors: {},
      };
    });
    builder.addCase(loginAction.rejected, (_, action: any) => {
      return {
        auth: false,
        user: {},
        loading: false,
        errors: action.payload,
      };
    });
    builder.addCase(validateTokenAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(validateTokenAction.fulfilled, (_, action) => {
      return {
        auth: true,
        user: action.payload ? action.payload : {},
        loading: false,
        errors: {},
      };
    });
    builder.addCase(validateTokenAction.rejected, (state, action) => {
      state.auth = false;
    });
    builder.addCase(logoutAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(logoutAction.fulfilled, () => {
      const state = { ...initialState };
      state.auth = false;
      return state;
    });
  },
});

// export {} = authSlicers.actions
export const authReducer = authSlicers.reducer;
