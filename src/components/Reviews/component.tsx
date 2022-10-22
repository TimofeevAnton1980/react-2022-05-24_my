import React from "react";
import { NewReviewForm } from "../NewReviewForm/NewReviewForm";
import ReviewContainer from "../../containers/Review/Review";

type ReviewProps = {
    reviewIds: (string | undefined)[]
}

export const Reviews: React.FC<ReviewProps>  = ({ reviewIds }) => {
  return (
    <div>
      {reviewIds?.length &&
        reviewIds?.map((reviewId) => (
          <ReviewContainer key={reviewId} reviewId={reviewId} />
        ))}
      <NewReviewForm />
    </div>
  );
};
