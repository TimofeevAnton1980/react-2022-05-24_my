import React, {useCallback, useState} from "react";
import {Reviews} from "../../components/Reviews/component";
import reviewSlice, {Review} from "../../store/review";
import {useAppDispatch, useAppSelector} from "../../hooks/hook_ts";
import {selectRestaurantReviewsById} from "../../store/restaurant/selectors";

interface ReviewAddrProps {
    reviewIds: (string | undefined)[];
    restaurantId: string | undefined;
}

export const ReviewAdd: React.FC<ReviewAddrProps> = ({reviewIds, restaurantId}) => {
    // const [reviewIdsn, setReview] = useState(reviewIds);
    const dispatch = useAppDispatch();
    const Old = (NewReview: Review) => NewReview;
    const NewDispatch = useCallback(
        (Old: Review) => dispatch<any>(reviewSlice.actions.addReview(Old)), []);
    const All = useAppSelector((state) =>
        selectRestaurantReviewsById(state, {restaurantId}));
    // const New = {reviewIdsn, Old};
    // setReview(New);

    console.log(All);


    return (
        <Reviews reviewIds={reviewIds} addNewReview={NewDispatch}/>

    );
};
