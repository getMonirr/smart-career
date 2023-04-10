const smFetcher = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

export const categoriesAndJobsLoader = async () => {

    const categories = await smFetcher('categories.json');
    const jobs = await smFetcher('jobs.json');

    return { categories, jobs }
}