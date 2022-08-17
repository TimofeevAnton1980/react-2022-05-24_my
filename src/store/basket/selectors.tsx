import React from "react";

interface Base {
  state: [];
  productId: number;
}

export const selectBasket: React.FC<Base> = ({ state }) => state.basket;

export const selectProductIdsFromBasket: React.FC<Base> = ({ state }) => {
  const basket = selectBasket(state);

  return Object.keys(basket).filter((productId) => !!basket[productId]);
};

export const selectProductCountFromBasket: React.FC<Base> = (
  state,
  productId
) => selectBasket(state)[productId] || 0;
