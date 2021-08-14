export const addItemToCart = (cartItems,cartItemToAdd) =>{
    const existingCartItem = cartItems.find(cartItem=>cartItem.id===cartItemToAdd.id);

    if(existingCartItem){
        return cartItems.map(cartItem => cartItem.id===cartItemToAdd.id?{...cartItem, quantity:cartItem.quantity+1}
            :cartItem
            )
    }

    return [...cartItems,{...cartItemToAdd,quantity:1}]
}

export const removeItemToCart = (cartItems,cartItemToRemove) =>{
  
        return cartItemToRemove.quantity>1? cartItems.map(cartItem => cartItem.id===cartItemToRemove.id?{...cartItem, quantity:cartItem.quantity-1}:cartItem)
            :cartItems.filter( cartItem=>cartItem.id!==cartItemToRemove.id)
    

}