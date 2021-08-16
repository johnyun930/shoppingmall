import { createSelector } from "reselect";



const selectShops = state =>state.shops;

export const selectShopSections = createSelector(
    [selectShops],
    shops=> shops.items
)

export const selectCollectionsForPreview =createSelector(
    [selectShopSections],(items) =>
    items ? Object.keys(items).map((key) => items[key]) : []
)


export const selectCollection = (collectionUrlParam) =>
  createSelector([selectShopSections], (items) =>
  items ? items[collectionUrlParam] : null
  );