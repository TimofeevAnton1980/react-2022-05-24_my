import React from "react";

interface Base {
  basket: string[];
}

export const selectBasket = (state: Base) => state.basket;

export const selectProductIdsFromBasket = (state: Base) => {
  const basket = selectBasket(state);

  return Object.keys(basket).filter((productId: string) => !!basket[productId]);
};

export const selectProductCountFromBasket = (state: Base, productId: string) =>
  selectBasket(state)[productId] || 0;
