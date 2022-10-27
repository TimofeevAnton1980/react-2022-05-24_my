import React, { useEffect } from "react";
import { Reviews } from "../../components/Reviews/component";
import {
  selectIsReviewsFailed,
  selectIsReviewsLoading,
} from "../../store/review/selectors";
import { loadUsersIfNotExist } from "../../store/user/thunks/load-users";
import { selectRestaurantReviewsById } from "../../store/restaurant/selectors";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hook_ts";

type Props = {
  restaurantId: string | undefined;
};

export const ReviewsContainer: React.FC<Props> = ({ restaurantId }) => {
  // const {restaurantId} = useParams();
  const dispatch = useAppDispatch();
  const isReviewsLoading = useAppSelector(selectIsReviewsLoading);
  const isReviewsFailed = useAppSelector(selectIsReviewsFailed);
  // console.log(restaurantId);
  const reviewIds = useAppSelector((state) =>
    selectRestaurantReviewsById(state, {restaurantId})
  );
  // console.log(reviewIds);
  useEffect(() => {
    dispatch<any>(loadUsersIfNotExist());
  }, []);

  if (isReviewsFailed) {
    return <span>Error</span>;
  }

  return isReviewsLoading ? (
    <span>Loading</span>
  ) : (
    // <Reviews reviewIds={reviewIds} {...props} />
    <Reviews reviewIds={reviewIds} />
  );
};
