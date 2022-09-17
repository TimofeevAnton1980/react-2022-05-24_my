import {createAction, createReducer, createSlice, PayloadAction} from "@reduxjs/toolkit";
// import {BasketState} from "../../types/Basket";

// type State = {
//   productId?: number
// };

// export const basketSlice = createSlice({
//     name: "basket",
//     initialState,
//     reducers: {
//         add: (state: State, action: PayloadAction<string> ) => {
//             state[action.payload] = (state[action.payload] || 0) + 1;
//
//             return state;
//         },
//         remove: (state, action: PayloadAction<string>) => {
//             state[action.payload] = state[action.payload] ? state[action.payload] - 1 : 0;
//
//             return state;
//         },
//     },
// });

export type BasketState = Record<string, number>;

interface BasketActionPayload {
    productId: string
}
const initialState:BasketState = {};

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        add: (state: BasketState, action: PayloadAction<BasketActionPayload> ) => {
            const productId = action.payload?.productId;
            if (!productId) {
                return state;
            }
            state[productId] = (state[productId] || 0) + 1;
            return state;
        },
        remove: (state: BasketState, action: PayloadAction<BasketActionPayload>) => {
            const productId = action.payload?.productId;
            if (!productId || !state[productId]) {
                return state;
            }
            state[productId] = (state[productId] || 0) - 1;
            return state;
        },
        clean: () => ({}),
    },
});