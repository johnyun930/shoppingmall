import {
  firestore,
  convertCollectionsSnapShotToMap,
} from "../../firebase/firebase.utils";
import { ShopActionTypes } from "./shop.types";

export const FETCH_COLLECTIONS_START = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const CollectionRef = firestore.collection("collections");
    dispatch(FETCH_COLLECTIONS_START());

    CollectionRef.get()
      .then((snapshot) => {
        const collectionMap = convertCollectionsSnapShotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionMap));
      })
      .catch((error) => dispatch(fetchCollectionsFailure()));
  };
};

