import React from "react";

interface Basket {
  productId: string;
}

export const selectBasket = (state: Basket) => state;

export const selectProductIdsFromBasket = (state: Basket) => {
  const basket = selectBasket(state);

  return Object.keys(basket).filter((productId) => !!basket[productId]);
};

export const selectProductCountFromBasket = (state: Basket, productId: string) =>
  selectBasket(state)[productId] || 0;
