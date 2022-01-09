import { createSlice } from "@reduxjs/toolkit";
import { ProjectStoreTypes } from "../../types/types";

const initialState : ProjectStoreTypes = {
  favorites : [],
  allProjects: [],
  loading: false,
}

const projectSlicers = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: {}
})

export const projectReducer = projectSlicers.reducer