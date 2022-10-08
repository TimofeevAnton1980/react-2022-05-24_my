import {selectRestaurantState} from "../restaurant/selectors";
import {RootState} from "../store";
import {Product} from "./index";

export const selectProductState = (state: RootState) => state.product;

export const selectProductIds = (state: RootState) => selectProductState(state).ids;
export const selectProductById = (state: RootState, id: string): Product =>
  selectProductState(state).entities[id];

export const selectProductNameById = (state: RootState, id: string) =>
  selectProductState(state).entities[id]?.name;

export const selectIsProductsLoading = (state: RootState) =>
  selectProductState(state).status === "loading";
export const selectIsProductsFailed = (state: RootState) =>
  selectProductState(state).status === "failed";

export const selectProducts = (state: RootState) =>
{
    let arrays = Object.values(selectProductState(state).entities);

    let newArr = [];
    for (let i = 0; i < arrays.length; i++) {

            newArr.push({id: arrays[i].id, name: arrays[i].name});

    }
    return newArr;
};
