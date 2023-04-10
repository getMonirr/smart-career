import { smFetcher } from "./categoriesAndJobsLoader"

export const appliedJobLoader = async () => {
    const { jobs } = await smFetcher('../jobs.json');
    const appliedJobCart = JSON.parse(localStorage.getItem('job-cart')) || [];

    const appliedJob = [];

    jobs.map(jb => {
        appliedJobCart.map(ajb => {
            if (ajb === jb.id) {
                appliedJob.push(jb)
            }
        })
    })

    return appliedJob;
}