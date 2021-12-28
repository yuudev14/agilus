import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RegisterFields, userType } from "../../types/types";

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

export const validateTokenAction = createAsyncThunk(
  "auth/validateTokenAction",
  async (): Promise<userType | undefined> => {
    try {
      const validateRequest = await axios.get("/api/auth");
      return validateRequest.data;
    } catch (error) {
      console.log(error);
    }
  }
);
