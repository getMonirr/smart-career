export const categoryLoader = async () => {
    const res = await fetch('categories.json');
    return res.json()
}