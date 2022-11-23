import React from "react";
import { NewReviewForm } from "../NewReviewForm/NewReviewForm";
import ReviewContainer from "../../containers/Review/Review";
import {Review} from "../../store/review";
import ReviewNewContainer from "../../containers/ReviewNew/ReviewNew";
import {ReviewAdd} from "../../containers/ReviewAdd/ReviewAdd";

type ReviewProps = {
    reviewIds: (string | undefined)[];
    addNewReview: (f: Review) => Review;

}

export const Reviews: React.FC<ReviewProps>  = ({ reviewIds, addNewReview = f => f}) => {
  return (
    <div>
      {reviewIds?.length &&
        reviewIds?.map((reviewId) => (
          <ReviewContainer key={reviewId} reviewId={reviewId} />
        ))}
        {/*<ReviewNewContainer addNew={addNew}/>*/}
      <NewReviewForm onAdd={addNewReview} reviewIds={reviewIds} />
    </div>
  );
};
