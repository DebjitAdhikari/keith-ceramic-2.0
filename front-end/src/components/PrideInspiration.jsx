import { Link } from "react-router-dom"

function PrideInspiration() {
    return (
        <div className="min-h-[50vh] w-[100vw] py-6 px-2  bg-gray-100">
                <div className="max-w-7xl  mx-auto flex flex-col  justify-around items-start mt-10 px-2 md:px-8  md:gap-8">
                {/* Text Section */}
                <div className="">
                    <h1 className=" text-xl md:text-3xl font-bold border-l-4 border-blue-800 pl-2 text-[#FD5D14] mb-4 md:mb-10">OUR PRIDE OUR INSPIRATON</h1>
                </div>
                {/* details and image */}
                <div className="flex gap-4    w-full justify-around items-start flex-col ">
                    {/* Image Section */}
                    <div className="flex gap-5 self-center sm:self-start flex-col md:flex-row">
                    {/* image section 1 */}
                    <div className="relative rounded-lg w-full md:w-1/2 h-64 md:h-96 overflow-hidden group">
                        <img
                        src="https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg"
                        alt="Mission"
                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                        <div className="text-white flex flex-col justify-end w-full gap-4 h-full text-lg font-bold p-2 sm:p-6">
                            <h1 className="sm:text-2xl">Mr. Ratan Tata</h1>
                            <p className="  text-xs sm:text-sm md:text-md font-light leading-relaxed">
                            Chairman                    
                            </p>
                        </div>
                        </div>
                    </div>
                    {/* image section 2 */}
                    <div className="relative rounded-lg w-full md:w-1/2 h-64 md:h-96 overflow-hidden group">
                        <img
                        src="https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg"
                        alt="Mission"
                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                        <div className="text-white flex flex-col justify-end w-full gap-4 h-full text-lg font-bold p-2 sm:p-6">
                            <h1 className="sm:text-2xl">Mr. Ratan Tata</h1>
                            <p className="  text-xs sm:text-sm md:text-md font-light leading-relaxed">
                            Chairman                    
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>

                    {/* details */}
                    <div className=" max-w-[900px] md:text-left">
                        <div className="space-y-2 text-left text-gray-700 text-sm md:text-md font-medium  leading-loose">
                            
                            <p className="text-lg"> Meet John, the Unsung Champion of the Breakroom

                                John, our dedicated facilities manager, is often seen quietly ensuring our workspace runs smoothly. But this month, he went above and beyond, surprising us with his unexpected kindness and resourcefulness.<br></br>
                                
                                A recent plumbing issue threatened to disrupt our workflow. John, noticing the inconvenience, took initiative. He not only swiftly resolved the problem but also took the extra step of installing a new, more efficient water filtration system in the breakroom.
                                <br></br>
                                His thoughtful gesture has not only improved the breakroom experience but also fostered a sense of community and appreciation among his colleagues. John &apos; s dedication to making our workplace a better place is a true inspiration. 
                                </p>
                            
                            <button className="flex bg-[#FD5D14] p-1 sm:p-2 rounded-md text-white  ">
                                <Link to="about" className="flex gap-2 items-center">
                                    <span>See more </span>
            
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

export default PrideInspiration
