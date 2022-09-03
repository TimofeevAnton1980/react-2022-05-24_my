import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

type Todo = {
  id: string;
  title: string;
  completed: boolean;
}

type TodosState = {
  list: Todo[];
}

const initialState: TodosState = {
  list: [],
}
export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    add: (state, { payload }) => {
      state[payload] = (state[payload] || 0) + 1;

      return state;
    },
    remove: (state, { payload }) => {
      state[payload] = state[payload] ? state[payload] - 1 : 0;

      return state;
    },
  },
});
