import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {selectProductIds, selectProductNameById} from "../../store/product/selectors";
import { Product } from "../../components/Products/Products";
import styles from "../../components/Menu/styles.module.css";
import { loadProducts } from "../../store/product/thunk/load-all-product";
import {useAppDispatch, useAppSelector} from "../../hooks/hook_ts";

const ProductsContainer = ({ className: string }) => {
  const dispatch = useAppDispatch();
  const productIds = useAppSelector((state) => selectProductIds(state));
  // console.log(productIds);
  useEffect(() => {
    dispatch(loadProducts());
  }, []);
  if (!productIds?.length) {
    return null;
  }
  return productIds?.map((productId: string) => (
    <Product
      key={productId}
      productId={productId}
      className={styles.product}
    />
  ));
};

export default ProductsContainer;
