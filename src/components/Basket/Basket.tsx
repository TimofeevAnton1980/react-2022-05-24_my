import React from "react";
import styles from "./styles.module.css";
import classnames from "classnames";
import { BasketItemContainer } from "../../containers/BasketItem/BasketItem";

type Props = {
    productIds: string[]
    className: string
}
const Basket = (props: Props) => (
  <div className={classnames(styles.root, props.className)}>
    <h2>Basket</h2>
    {props.productIds?.length > 0 &&
    props.productIds.map((productId) => (
        <BasketItemContainer
          key={productId}
          productId={productId}
          className={styles.product}
        />
      ))}
  </div>
);

export default Basket;
