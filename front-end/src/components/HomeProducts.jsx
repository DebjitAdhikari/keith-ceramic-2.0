import { Link } from "react-router-dom"

function HomeProducts() {
    return (
        <div className="min-h-[50vh] w-[100vw] py-6 px-2  bg-gray-100">
                <div className="max-w-7xl  mx-auto flex flex-col  justify-around items-start mt-10 px-2 md:px-8  md:gap-8">
                {/* Text Section */}
                <div className="">
                    <h1 className=" text-xl md:text-3xl font-bold border-l-4 border-blue-800 pl-2 text-[#FD5D14] mb-4 md:mb-10">Products</h1>
                </div>
                {/* details and image */}
                <div className="flex gap-4    w-full justify-around items-start flex-col ">
                    {/* Image Section */}
                    <div className="flex flex-col md:flex-row gap-5 self-center sm:self-start">
                    {/* Image Section 1 */}
                    <div className="relative rounded-lg w-full md:w-1/3 h-64 md:h-96 overflow-hidden group">
                        <img
                        src="./assets/images/SieveShaker.jpg"
                        alt="Product 1"
                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                    {/* Image Section 2 */}
                    <div className="relative rounded-lg w-full md:w-1/3 h-64 md:h-96 overflow-hidden group">
                        <img
                        src="./assets/images/SandRammer.jpg"
                        alt="Product 2"
                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                    {/* Image Section 3 */}
                    <div className="relative rounded-lg w-full md:w-1/3 h-64 md:h-96 overflow-hidden group">
                        <img
                        src="./assets/images/Moudle.jpg"
                        alt="Product 3"
                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                    </div>
                    

                    {/* seee more */}
                    <div className=" max-w-[900px] md:text-left">
                        <div className="space-y-2 text-left text-gray-700 text-sm md:text-md font-medium  leading-loose">
                            <button className="flex bg-[#FD5D14] p-1 sm:p-2 rounded-md text-white  ">
                                <Link to="/products" className="flex gap-2 items-center">
                                <span>Explore more products </span>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>                      
                                </Link>
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            </div>
    )
}

export default HomeProducts
