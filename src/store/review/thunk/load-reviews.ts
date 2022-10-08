import { selectReviewIds } from "../selectors";
import reviewSlice, { Review, ReviewState } from "../index";
import { selectRestaurantReviewsById } from "../../restaurant/selectors";
import { AppDispatch, RootState } from "../../store";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { PayloadAction } from "@reduxjs/toolkit";
import { Restaurant } from "../../restaurant";
import {useAppDispatch} from "../../../hooks/hook_ts";


// ThunkAction<void, RootState, unknown, PayloadAction<Review[] | null | {}>>
export function loadReviewsIfNotExist(
  restaurantId: string
)  {
  return function (
      dispatch = useAppDispatch(), getState: () => RootState) {
    const reviewIds = selectReviewIds(getState());
    const id = restaurantId;
    const restaurantReviews = selectRestaurantReviewsById(getState(), {
      id,
    });

    if (restaurantReviews.every((reviewId) => reviewIds.includes(reviewId))) {
      return;
    }

    dispatch(reviewSlice.actions.startLoading(null));

    fetch(
      `http://localhost:3001/api/reviews?${new URLSearchParams({
        id: restaurantId,
      }).toString()}`
    )
      .then((response) => response.json())
      .then((reviews) => {
        dispatch(reviewSlice.actions.successLoading(reviews));
      })
      .catch((error) => {
        dispatch(reviewSlice.actions.failLoading(error));
      });
  };
}
