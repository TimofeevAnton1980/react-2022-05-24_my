import styles from "./styles.module.css";
import { useReducer } from "react";
import React from "react";
import {Review} from "../../store/review";
import StarRating from "../StarRating/StarRating";

enum CountActionKind {
  changeName = "changeName",
  changeText = "changeText",
  changeRating = "changeRating",
}

interface CountAction {
  type: CountActionKind;
  payload: any;
}

interface CountState {
  name?: string;
  text?: string;
  rating?: number;
}

// const actionTypes = {
//     changeName: 'changeName',
//     changeText: 'changeText',
//     changeRating: 'changeRating',
// }

// const DEFAULT_STATE = {name: 'Default name', text: '', rating: 0};

const reducer = (state: CountState, action: CountAction) => {
  switch (action.type) {
    case CountActionKind.changeName:
      return { ...state, name: action.payload };

    case CountActionKind.changeText:
      return { ...state, text: action.payload };

    case CountActionKind.changeRating:
      return { ...state, rating: action.payload };
    default:
      return state;
  }
};
interface NewReviewFormProps {
    onAdd: (f: Review) => Review;
    reviewIds: (string | undefined)[];

}
export const NewReviewForm: React.FC<NewReviewFormProps> = ({onAdd = (f: Review) => f, reviewIds}) => {
  const [state, dispatch] = useReducer(reducer, {
    name: "Default name",
    text: "",
    rating: 0,
  });
  const NewReview: Review = {
    id: (reviewIds.length + 1).toString(),
    userId: state.name,
    text: state.text,
    rating: state.rating,
}
  return (
    <div className={styles.root}>
      <h3>New Review</h3>
      <span className={styles.title}>Name</span>
      <input
        className={styles.name}
        placeholder="Default name"
        // value={state.name}
        onChange={(event) => {
          dispatch({
            type: CountActionKind.changeName,
            payload: event.target.value,
          });
        }}
      />

      <span className={styles.title}>Text</span>
      <input
        className={styles.text}
        placeholder="Default text"
        // value={state.text}
        onChange={(event) => {
          dispatch({
            type: CountActionKind.changeText,
            payload: event.target.value,
          });
        }}
      />

      <span className={styles.title}>Rating</span>
      {/*<input*/}
      {/*  value={state.rating}*/}
      {/*  type="number"*/}
      {/*  max="5"*/}
      {/*  min="0"*/}
      {/*  onChange={(event) => {*/}
      {/*    dispatch({*/}
      {/*      type: CountActionKind.changeRating,*/}
      {/*      payload: Number(event.target.value),*/}
      {/*    });*/}
      {/*  }}*/}
      {/*/>*/}

        <StarRating
            selectedStars={state.rating}
            onRate={(rating) => {
                dispatch({
                type: CountActionKind.changeRating,
                payload: Number(rating),
            }); return rating;
            }}
        />

      <button type="submit" onClick={() => onAdd(NewReview)} className={styles.submitButton}>
        PUBLISH REVIEW
      </button>
    </div>
  );
};
