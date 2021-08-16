import SHOP_DATA from "../../pages/shop/shop.data";
import { ShopActionTypes } from "./shop.types";

const INITIAL_STATE = {
    items: null,
}

export const shopReducer = (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case ShopActionTypes.UPDATE_COLLECTIONS:
        return{
            ...state,
            items: action.payload
        }
        default:
            return state;
    }
}