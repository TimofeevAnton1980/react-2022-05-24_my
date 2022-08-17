import React from "react";
import { useSelector } from "react-redux";
import { selectProductIdsFromBasket } from "../../store/basket/selectors";
import Basket from "../../components/Basket/Basket";

interface Base {
  className: string,
  productIds: number[],
}

const BasketContainer: React.FC< Base > = ({ className }) => {
  const productIds = useSelector(selectProductIdsFromBasket);
  return <Basket productIds = {productIds} className = {className} />;
};

export default BasketContainer;
