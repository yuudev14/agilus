import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AddProjectType } from "../../types/types";

export const addProjectsAction = createAsyncThunk(
  'projects/addProjectsAction', async(data : AddProjectType) => {
    try {
      const addProjectRequest = await axios.post('/api/projects', data);
      return ''
    } catch (error) {     
    }
  })