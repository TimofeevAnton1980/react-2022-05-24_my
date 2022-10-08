import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { Reviews } from "../../components/Reviews/component";
import {
  selectIsReviewsFailed,
  selectIsReviewsLoading,
} from "../../store/review/selectors";
import { loadUsersIfNotExist } from "../../store/user/thunks/load-users";
import { selectRestaurantReviewsById } from "../../store/restaurant/selectors";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/hook_ts";

type Props = {
  id: string;
}

export const ReviewsContainer: React.FC<Props> = ({ id }) => {
  // const {restaurantId} = useParams();
  const dispatch = useAppDispatch();
  const isReviewsLoading = useAppSelector(selectIsReviewsLoading);
  const isReviewsFailed = useAppSelector(selectIsReviewsFailed);
  const reviewIds = useAppSelector((state) =>
    selectRestaurantReviewsById(state, { id })
  );

  useEffect(() => {
    dispatch(loadUsersIfNotExist());
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
