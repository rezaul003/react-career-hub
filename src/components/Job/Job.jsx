import { CiLocationOn } from "react-icons/ci";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";


const Job = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="card card-compact bg-base-100 border ">
            <div className="py-6 pl-6 w-36">
            <img 
                    src={logo}
                    alt="Shoes" />
            </div>
            <div className="card-body">
                <h2 className="card-title">Technical Database Engineer</h2>
                <h5>{company_name}</h5>
                <div>
                    <button className="px-5 py-2 font-bold text-[#7E90FE] border rounded border-[#7E90FE] mr-4">{remote_or_onsite}</button>

                    <button className="px-5 py-2 font-bold text-[#7E90FE] border rounded border-[#7E90FE] mr-4">{job_type}</button>
                </div>

                <div className="mt-4 flex">
                    <h2 className="flex mr-6"><CiLocationOn className="text-2xl mr-2"></CiLocationOn> {location}</h2>
                    <h2 className="flex"><HiOutlineCurrencyDollar  className="text-2xl mr-2 items-center"></HiOutlineCurrencyDollar > Salary: {salary}</h2>
                </div>

                <div className="card-actions pt-2">
                    <button className="btn text-[#FFF] bg-[#9873FF] ">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Job;