
const JobCatagory = ({ catagories }) => {
    const { name, jobsAvailable, icon } = catagories;
    return (
        <div className="bg-purple-50 py-6 px-4 rounded-lg" >
            <div className="py-3">
                <img src={icon} alt="" />
            </div>

            <div>
                <h1 className="text-lg font-semibold">{name}</h1>
                <small>{jobsAvailable}</small>
            </div>

        </div>

      



    );
};

export default JobCatagory;