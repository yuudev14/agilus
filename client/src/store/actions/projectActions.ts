import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AddProjectType } from "../../types/types";

export const addProjectsAction = createAsyncThunk(
  'projects/addProjectsAction', async(data : AddProjectType) => {
    try {
      const addProjectRequest = await axios.post('/api/projects', data);
      return addProjectRequest.data;
    } catch (error) {     
    }
});

export const getAllProjectsAction = createAsyncThunk(
  'projects/getAllProjectsAction', async() => {
    try {
      const projects= await axios.get('/api/projects');
      return projects.data;
    } catch (error) {     
    }
});

export const deleteProjectAction = createAsyncThunk(
  'projects/deleteProjectAction', async(project_id : String) => {
    try {
      await axios.delete(`/api/projects/${project_id}`);
      return project_id;
    } catch (error) {     
    }
});

export const getAllFavoritesAction = createAsyncThunk(
  'projects/getAllFavoritesAction', async() => {
    try {
      const projects= await axios.get('/api/projects/favorites');
      return projects.data;
    } catch (error) {     
    }
});

export const addToFavoritesAction = createAsyncThunk(
  'projects/addToFavoritesAction', async(project_id : String, {rejectWithValue}) => {
    try {
      const projects= await axios.post('/api/projects/favorites', {project_id});
      console.log(projects.data);
      return projects.data;
    } catch (error) {   
      console.log(error);
      return rejectWithValue(null);
    }
});
