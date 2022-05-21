import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  isLoading: false,
  error: null,
  currentTodo: null,
  modalType: "",
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
    setCurrentTodo(state, { payload }) {
      state.currentTodo = payload;
    },
    setModalType(state, { payload }) {
      state.modalType = payload;
    },
  },
});

export const {
  setIsLoading,
  fetchSuccess,
  fetchError,
  setCurrentTodo,
  setModalType,
} = todosSlice.actions;

export default todosSlice.reducer;
