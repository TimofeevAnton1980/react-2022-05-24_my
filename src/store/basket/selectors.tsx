
import React from "react";
import {BasketState} from "./index";


export const selectBasket = ( state: BasketState ) => state.basket;

export const selectProductIdsFromBasket = ( state: BasketState) => {
  const basket = selectBasket(state);

  return Object.keys(basket).filter((productId) => !!basket[productId]);
};

export const selectProductCountFromBasket: React.FC<BasketState> = (
  state,
  productId
) => selectBasket(state)[productId] || 0;
