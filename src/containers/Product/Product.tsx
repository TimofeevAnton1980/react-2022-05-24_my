import React, { useCallback } from "react";
import { Product } from "../../components/Product/Product";
import { useDispatch } from "react-redux";
import useProductWithCount from "../../hooks/useProductWithCount";
import {BasketActionPayload, basketSlice} from "../../store/basket";
import {useAppDispatch} from "../../hooks/hook_ts";

const ProductContainer: React.FC<BasketActionPayload> = ({productId} ) => {
  const { productName, productCount } = useProductWithCount(productId);

  const dispatch = useAppDispatch();

  const onRemoveProduct = useCallback(
    () => dispatch(basketSlice.actions.remove({productId})),
    [productId]
  );
  const onAddProduct = useCallback(
    () => dispatch(basketSlice.actions.add({productId})),
    [productId]
  );

  return (
    <Product
      name={productName}
      productCount={productCount}
      removeProduct={onRemoveProduct}
      addProduct={onAddProduct}

    />
  );
};

export default ProductContainer;
