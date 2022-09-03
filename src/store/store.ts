import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "./basket";
import productSlice from "./product";
import restaurantSlice from "./restaurant";
import reviewSlice from "./review";
import userSlice from "./user";
import { logger1 } from "./middlewares/logger";
import { loadRestaurantsIfNotExistMiddleware } from "./restaurant/middlewares/load-restaurants";
import React from "react";

interface Base {
  state?: [];
  action?: [];
}
const rootReducer: React.FC<Base> = ({ state, action }) => ({
  basket: basketSlice.reducer(state?.basket, action),
  restaurant: restaurantSlice.reducer(state?.restaurant, action),
  product: productSlice.reducer(state?.product, action),
  review: reviewSlice.reducer(state?.review, action),
  user: userSlice.reducer(state?.user, action),
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    logger1,
    loadRestaurantsIfNotExistMiddleware,
  ],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
