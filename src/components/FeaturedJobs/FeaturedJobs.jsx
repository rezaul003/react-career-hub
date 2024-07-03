import { useEffect } from "react";
import { useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {


    const [jobs, setJobs] = useState([]);

    const [dataLength, setDataLength] = useState(4);


    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <div>
            <div className="text-center mt-24 mb-12">
                <h1 className="text-4xl font-semibold pb-4">Featured Jobs</h1>
                <p >Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-4">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }

            </div>
            <div className={`flex justify-center mb-6 ${dataLength === jobs.length ? 'hidden' : ''}`}>
                <button onClick={() => setDataLength(jobs.length)} className="btn  text-[#FFF] bg-[#9873FF] ">See All Jobs</button>
            </div>

        </div>
    );
};

export default FeaturedJobs;