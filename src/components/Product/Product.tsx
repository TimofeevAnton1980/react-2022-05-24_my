import React from "react";
import classnames from "classnames";

import styles from "./styles.module.css";

type ProductProps = {
  name: string,
  productCount: number,
  removeProduct: (e: React.MouseEvent) => void,
  addProduct: (e: React.MouseEvent) => void
}
export const Product: React.FC<ProductProps> = ({
  name,
  productCount,
  removeProduct,
  addProduct,
}) => {
  return (
    <div className={classnames(styles.root)}>
      <span>{name}</span>
      <div className={styles.actions}>
        <button
          onClick={removeProduct}
          className={styles.action}
          disabled={productCount <= 0}
        >
          -
        </button>
        <div className={styles.count}>{productCount}</div>
        <button
          onClick={addProduct}
          className={styles.action}
          disabled={productCount >= 25}
        >
          +
        </button>
      </div>
    </div>
  );
};
