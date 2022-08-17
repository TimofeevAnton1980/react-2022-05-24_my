import React from "react";
import { useSelector } from "react-redux";
import { selectProductIdsFromBasket } from "../../store/basket/selectors";
import Basket from "../../components/Basket/Basket";

interface Base {
  className: string;
}

const BasketContainer: React.FC<Base> = ({ className }) => {
  const productIds: number[] = useSelector(selectProductIdsFromBasket);
  return <Basket productIds={productIds} className={className} />;
};

export default BasketContainer;
