import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { LoginFieldsType, RegisterFields, userType } from "../../types/types";

export const registerAction = createAsyncThunk(
  "auth/registerAction",
  async (data: RegisterFields): Promise<userType | undefined> => {
    try {
      const registerRequest = await axios.post("/api/auth", data);
      return registerRequest.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const loginAction = createAsyncThunk(
  "auth/loginAction",
  async (
    { usernameOrEmail, password }: LoginFieldsType,
    { rejectWithValue }
  ) => {
    try {
      const loginRequest = await axios.get(
        `/api/auth?usernameOrEmail=${usernameOrEmail}&password=${password}`
      );
      return loginRequest.data;
    } catch (error: any) {
      return rejectWithValue({ ...error.response.data });
    }
  }
);

export const validateTokenAction = createAsyncThunk(
  "auth/validateTokenAction",
  async (_, { rejectWithValue }) => {
    try {
      const validateRequest = await axios.get("/api/auth/token");
      return validateRequest.data;
    } catch (error) {
      return rejectWithValue({ token: "not authenticated" });
    }
  }
);

export const logoutAction = createAsyncThunk(
  "auth/logoutAction",
  async (): Promise<boolean | undefined> => {
    try {
      await axios.delete("/api/auth");
      return;
    } catch (error) {
      console.log(error);
    }
  }
);
