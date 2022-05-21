import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  isLoading: false,
  error: null,
  currentTodo: null,
  modalType: "",
  filterParam: "",
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
    setFilter(state, { payload }) {
      state.filterParam = payload;
    },
  },
});

export const {
  setIsLoading,
  fetchSuccess,
  fetchError,
  setCurrentTodo,
  setModalType,
  setFilter,
} = todosSlice.actions;

export default todosSlice.reducer;
