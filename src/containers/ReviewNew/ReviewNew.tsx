import React from "react";
import { useSelector } from "react-redux";
import { selectReviewById } from "../../store/review/selectors";
import { MemoReview } from "../../components/Review/Review";
import { useAppSelector } from "../../hooks/hook_ts";
import {Review} from "../../store/review";

type ReviewContainerProps = {
    addNew: Review;
};
const ReviewNewContainer: React.FC<ReviewContainerProps> = ({ addNew }) => {

    const { id, userId, text, rating } = addNew;

    const review = useAppSelector((state) => selectReviewById(state, id));
    if (!review) {
        return null;
    }

    return <MemoReview text={text} rating={rating} userId={userId} />;

};

export default ReviewNewContainer;
