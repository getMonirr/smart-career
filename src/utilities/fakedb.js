
export const addToDataBase = (id) => {
    const appliedJobCart = JSON.parse(localStorage.getItem('job-cart')) || [];
    const exist = appliedJobCart.includes(id);
    if (!exist) {
        appliedJobCart.push(id);
        localStorage.setItem('job-cart', JSON.stringify(appliedJobCart));
    }
    return

}