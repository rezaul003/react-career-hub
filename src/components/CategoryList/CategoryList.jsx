import JobCatagory from "../JobCatagory/JobCatagory";

const CategoryList = () => {

    const jobCategories = [
        {
            "id": 1,
            "name": "Account & Finance",
            "jobsAvailable": 300,
            "icon": "https://github.com/khaadihut/Assets/blob/main/assets/icons/accounts.png?raw=true"
        },
        {
            "id": 2,
            "name": "Creative Design",
            "jobsAvailable": "100+",
            "icon": "https://github.com/khaadihut/Assets/blob/main/assets/icons/creative.png?raw=true"
        },
        {
            "id": 3,
            "name": "Marketing & Sales",
            "jobsAvailable": 150,
            "icon": "https://github.com/khaadihut/Assets/blob/main/assets/icons/marketing.png?raw=true"
        },
        {
            "id": 4,
            "name": "Engineering Job",
            "jobsAvailable": 224,
            "icon": "https://github.com/khaadihut/Assets/blob/main/assets/icons/chip.png?raw=true"
        }
    ];
    console.log(jobCategories.length)

    return (
        <div>
            <div className="text-center m-8">
                <h1 className="text-4xl font-semibold p-6">Job Category List</h1>
                <p className="">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className="grid grid-cols-4 rounded gap-6 mb-4 ">
                {
                    jobCategories.map(catagories => <JobCatagory key={jobCategories.id} catagories={catagories} ></JobCatagory> )
                }
            </div>

        </div>
    );
};

export default CategoryList;