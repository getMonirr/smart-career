import { smFetcher } from "./categoriesAndJobsLoader"

export const jobLoader = async ({ params }) => {
    const { jobs } = await smFetcher('../jobs.json');
    const targetJob = await jobs.find(j => j.id == params.jobId);
    return targetJob;
}