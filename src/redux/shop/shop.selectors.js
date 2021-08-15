import { createSelector } from "reselect";



const selectShops = state =>state.shops;

export const selectShopSections = createSelector(
    [selectShops],
    shops=> shops.items
)

export const selectCollectionsForPreview =createSelector(
    [selectShopSections],
    shops => Object.keys(shops).map(key=>shops[key])
)


export const selectCollection = collectionUrlParam =>createSelector(
    [selectShopSections],
    shops=> shops[collectionUrlParam]
)