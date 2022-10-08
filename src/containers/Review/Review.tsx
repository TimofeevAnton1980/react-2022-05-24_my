import React from "react";
import { useSelector } from "react-redux";
import { selectReviewById } from "../../store/review/selectors";
import { MemoReview } from "../../components/Review/Review";
import {useAppSelector} from "../../hooks/hook_ts";

type ReviewContainerProps = {
  reviewId: string
}
const ReviewContainer: React.FC<ReviewContainerProps> = ({ reviewId }) => {
  const review = useAppSelector((state) => selectReviewById(state, reviewId));

  if (!review) {
    return null;
  }

  const { text, rating, userId } = review;

  return (
    <MemoReview
      text={text}
      rating={rating}
      userId={userId}
    />
  );
};

export default ReviewContainer;
