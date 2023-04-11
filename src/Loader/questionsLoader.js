export const questionLoader = async () => {
    const res = await fetch('/questions.json');
    return await res.json()
}