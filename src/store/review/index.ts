import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ReviewState = {
  entities: Record<string, Review>;
  ids: string[];
  status: string;
};

export interface Review {
  id: string;
  userId: string;
  text: string;
  rating: number;
}

const initialState: ReviewState = {
  entities: {},
  ids: [],
  status: "notStarted",
};
type Acc = Record<string, Review>;

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    startLoading: (state: ReviewState, action: PayloadAction<null>) => {
      state.status = "loading";
    },
    failLoading: (state: ReviewState, action: PayloadAction<{}>) => {
      state.status = "failed";
    },
    successLoading: (state: ReviewState, action: PayloadAction<Review[]>) => {
      state.entities = (action.payload || []).reduce(
        (acc: Acc, review) => {
          acc[review.id] = review;
          return acc;
        },
        { ...state.entities }
      );

      state.ids = [...state.ids, ...(action.payload || []).map(({ id }) => id)];

      state.status = "success";
    },
  },
});

export default reviewSlice;
