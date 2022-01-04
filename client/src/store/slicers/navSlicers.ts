import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  state: false,
};

const navSlicers = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setNavStateAction: (state, { payload }) => {
      state.state = payload;
    },
  },
  extraReducers: {},
});

export const { setNavStateAction } = navSlicers.actions;
export const navReducer = navSlicers.reducer;
