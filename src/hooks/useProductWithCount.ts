import { useSelector } from "react-redux";
import { selectProductNameById } from "../store/product/selectors";
import {selectProductCountFromBasket} from "../store/basket/selectors";
import {BasketState} from "../store/basket";


type Props = {
  productId: string
}

const useProductWithCount = ({productId}: Props) => {
  const productName: string = useSelector((state: BasketState) =>
    selectProductNameById(state, productId)
  );
  const productCount: number = useSelector((state: BasketState) =>
    selectProductCountFromBasket(state, productId)
  );

  return { productName, productCount };
};

export default useProductWithCount;
