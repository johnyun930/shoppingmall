import { createSelector } from "reselect";

const selectShops = state =>state.shops;

export const selectShopSections = createSelector(
    [selectShops],
    shops=> shops.items
)