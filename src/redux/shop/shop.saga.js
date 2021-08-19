import { takeLatest, call, all, put } from "@redux-saga/core/effects";
import {
  convertCollectionsSnapShotToMap,
  firestore,
} from "../../firebase/firebase.utils";
import {
  fetchCollectionsFailure,
  fetchCollectionsSuccess,
} from "./shop.actions";

import { ShopActionTypes } from "./shop.types";

export function* fetchCollectionsAsync() {
  yield console.log("I am fired");
  try {
    const CollectionRef = firestore.collection("collections");
    const snapshot = yield CollectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapShotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
  //   CollectionRef.get()
  //     .then((snapshot) => {
  //       const collectionMap = convertCollectionsSnapShotToMap(snapshot);
  //       dispatch(fetchCollectionsSuccess(collectionMap));
  //     })
  //     .catch((error) => dispatch(fetchCollectionsFailure()));
}

export function* fetchColectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchColectionsStart)]);
}
