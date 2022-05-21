import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  isLoading: false,
  error: null,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setIsLoading(state, { payload }) {
      state.isLoading = payload;
    },
    fetchSuccess(state, { payload }) {
      state.data = payload;
    },
    fetchError(state, { payload }) {
      state.error = payload;
    },
  },
});

export const { setIsLoading, fetchSuccess, fetchError } = todosSlice.actions;

export default todosSlice.reducer;
