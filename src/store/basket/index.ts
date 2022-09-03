import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

type Basket = {
  add: [];
  remove: [];
};

export const basketSlice = createSlice({
  name: "basket",
  initialState: {},
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