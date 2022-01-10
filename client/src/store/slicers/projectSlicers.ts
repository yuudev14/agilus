import { createSlice } from "@reduxjs/toolkit";
import { ProjectStoreTypes } from "../../types/types";
import { addProjectsAction, addToFavoritesAction, getAllFavoritesAction, getAllProjectsAction } from "../actions/projectActions";

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

    builder.addCase(getAllFavoritesAction.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getAllFavoritesAction.fulfilled, (state, action) => {
      state.favorites = action.payload;
    });

    builder.addCase(addProjectsAction.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(addProjectsAction.fulfilled, (state, action) => {
      state.allProjects.push(action.payload);
    });

    builder.addCase(addToFavoritesAction.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(addToFavoritesAction.fulfilled, (state, action) => {
      state.favorites.push(action.payload);
    });
    

    
  }
})

export const projectReducer = projectSlicers.reducer;
export const {emptyProjectListsAction} = projectSlicers.actions;