import React from "react";
import classnames from "classnames";

import styles from "./styles.module.css";

type ProductProps = {
  name: string;
  productCount: number;
  removeProduct: (e: React.MouseEvent) => number;
  addProduct: (e: React.MouseEvent) => number;
  className: string;
};
export const Product: React.FC<ProductProps> = ({
  name,
  productCount,
  removeProduct,
  addProduct,
  className,
}) => {
  return (
    <div className={classnames(styles.root, className)}>
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
