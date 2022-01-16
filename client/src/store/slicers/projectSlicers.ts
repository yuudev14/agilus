import { createSlice } from "@reduxjs/toolkit";
import { ProjectStoreTypes } from "../../types/types";
import { addProjectsAction, addToFavoritesAction, deleteProjectAction, deleteToFavoritesAction, getAllFavoritesAction, getAllProjectsAction } from "../actions/projectActions";

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
      action.payload.infavorite = '0'
      state.allProjects.push(action.payload);
    });

    builder.addCase(addToFavoritesAction.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(addToFavoritesAction.fulfilled, (state, action) => {
      state.favorites.push(action.payload);
      state.allProjects = state.allProjects.map(_fav =>{
        if (_fav.id === action.payload.id) {
          _fav.infavorite = '1'
        }
        return _fav
      });
    });

    builder.addCase(deleteProjectAction.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(deleteProjectAction.fulfilled, (state, action) => {
      state.favorites = state.favorites.filter(_fav => _fav.id !== action.payload);
      state.allProjects = state.allProjects.filter(_fav => _fav.id !== action.payload);
    });

    builder.addCase(deleteToFavoritesAction.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(deleteToFavoritesAction.fulfilled, (state, action) => {
      state.favorites = state.favorites.filter(_fav => _fav.id !== action.payload);
      state.allProjects = state.allProjects.map(_fav =>{
        if (_fav.id === action.payload) {
          _fav.infavorite = '0';
        }
        return _fav
      });
    });
  }
})

export const projectReducer = projectSlicers.reducer;
export const {emptyProjectListsAction} = projectSlicers.actions;