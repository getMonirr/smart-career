// // use local storage to manage cart data
// const addToDb = id => {
//     let appliedJob = getShoppingCart();
//     // add quantity
//     const quantity = appliedJob[id];
//     if (!quantity) {
//         appliedJob[id] = 1;
//     }
//     else {
//         const newQuantity = quantity + 1;
//         appliedJob[id] = newQuantity;
//     }
//     localStorage.setItem('shopping-book-cart', JSON.stringify(appliedJob));
// }

// const removeFromDb = id => {
//     const shoppingCart = getShoppingCart();
//     if (id in shoppingCart) {
//         delete shoppingCart[id];
//         localStorage.setItem('shopping-book-cart', JSON.stringify(shoppingCart));
//     }
// }

// const getShoppingCart = () => {
//     let shoppingCart = {};

//     //get the shopping cart from local storage
//     const storedCart = localStorage.getItem('shopping-book-cart');
//     if (storedCart) {
//         shoppingCart = JSON.parse(storedCart);
//     }
//     return shoppingCart;
// }

// const deleteShoppingCart = () => {
//     localStorage.removeItem('shopping-book-cart');
// }


// export {
//     addToDb,
//     removeFromDb,
//     getShoppingCart,
//     deleteShoppingCart
// }

export const addToDataBase = (id) => {
    const appliedJobCart = JSON.parse(localStorage.getItem('job-cart')) || [];
    const exist = appliedJobCart.includes(id);
    if (!exist) {
        appliedJobCart.push(id);
        localStorage.setItem('job-cart', JSON.stringify(appliedJobCart));
    }
    return

}