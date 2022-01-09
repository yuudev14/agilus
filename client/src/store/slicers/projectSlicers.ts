import { createSlice } from "@reduxjs/toolkit";
import { ProjectStoreTypes } from "../../types/types";
import { addProjectsAction, getAllProjectsAction } from "../actions/projectActions";

const initialState : ProjectStoreTypes = {
  favorites : [],
  allProjects: [],
  loading: false,
}

const projectSlicers = createSlice({
  name: "projects",
  initialState,
  reducers: {
    emptyProjectListsAction: (state) => {
      return initialState
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProjectsAction.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getAllProjectsAction.fulfilled, (state, action) => {
      state.allProjects = action.payload;
    });

    builder.addCase(addProjectsAction.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(addProjectsAction.fulfilled, (state, action) => {
      state.allProjects.push(action.payload);
    });
  }
})

export const projectReducer = projectSlicers.reducer;
export const {emptyProjectListsAction} = projectSlicers.actions;