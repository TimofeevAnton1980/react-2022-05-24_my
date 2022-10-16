import React, { useEffect } from "react";
import { ReviewsContainer } from "../Reviews/Reviews";
import { useParams } from "react-router-dom";

const RestaurantReview = () => {
  const params = useParams();
  const id = params.to;
  // const label = params.label;

  return <ReviewsContainer id={id || ""} />;
};

export default RestaurantReview;
