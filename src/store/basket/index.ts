import {
  createAction,
  createReducer,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

const initialState = {};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    add: (state, { payload }: PayloadAction<string>) => {
      state[payload] = (state[payload] || 0) + 1;

      return state;
    },
    remove: (state, { payload }) => {
      state[payload] = state[payload] ? state[payload] - 1 : 0;

      return state;
    },
  },
});
