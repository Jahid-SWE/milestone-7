const getCartFromLocalStorage= ()=>{
    const storedCartString= localStorage.getItem('cart')
    if(storedCartString){
        const storedCart= JSON.parse(storedCartString)
        return storedCart
    }
    return []
}

const saveCartToLocalStorage=cart=>{
    const cartStringfied= JSON.stringify(cart)
    localStorage.setItem('cart', cartStringfied)
}
const addToCartLocalStorage=id=>{
    const cart= getCartFromLocalStorage();
     const newCart= [...cart, id]


     // save cart to local storage
     saveCartToLocalStorage(newCart)
}


const removeFromLocalStorage=id=>{
    const storedCart= getCartFromLocalStorage()
    const remainingCart=storedCart.filter(storedCart=>storedCart!==id)
    saveCartToLocalStorage(remainingCart)
}

export {
    getCartFromLocalStorage as getStoreCart,
    addToCartLocalStorage as addToStoreCart,
    removeFromLocalStorage as removeFromCart
    }