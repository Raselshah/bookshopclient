// stateHandlingSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

const stateHandlingSlice = createSlice({
  name: "stateHandling",
  initialState,
  reducers: {
    toggleValue: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleValue } = stateHandlingSlice.actions;
export default stateHandlingSlice.reducer;
