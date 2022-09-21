import React from "react";
import { useSelector } from "react-redux";
import { selectProductIdsFromBasket } from "../../store/basket/selectors";
import Basket from "../../components/Basket/Basket";
import { useAppSelector } from "../../hooks/hook_ts";

interface BasketContainer {
  className: string;
}

const BasketContainer: React.FC<BasketContainer> = ({ className }) => {
  const productIds: string[] = useAppSelector(selectProductIdsFromBasket);
  return <Basket productIds={productIds} className={className} />;
};

export default BasketContainer;
