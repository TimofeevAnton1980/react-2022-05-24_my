import React from "react";
import styles from "./styles.module.css";
import classnames from "classnames";
import ProductContainer from "../../containers/Product/Product";

interface MenuInterface {
    productIds:string[],
    className: string,
}
const Menu: React.FC<MenuInterface> = ({ productIds, className }) => (
  <div className={classnames(styles.root, className)}>
    <span className={styles.menuTitle}>Menu</span>
    {productIds?.map((productId) => (
      <ProductContainer
        key={productId}
        productId={productId}
        className={styles.product}
      />
    ))}
  </div>
);

export default React.memo(Menu);
