import { selectReviewIds } from "../selectors";
import reviewSlice from "../index";
import { selectRestaurantReviewsById } from "../../restaurant/selectors";
import {RootState} from "../../store";

export function loadReviewsIfNotExist(restaurantId: string) {
  return function (dispatch: ({}) => {}, getState: () => RootState) {
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
