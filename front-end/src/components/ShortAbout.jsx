import { Link } from "react-router-dom"

function ShortAbout() {
    return (
        <div className="min-h-[50vh] w-[100vw] py-6 px-2 flex items-center justify-center bg-gray-100">

                <div className="max-w-7xl  mx-auto flex flex-col lg:flex-row justify-around items-center mt-10 px-2 md:px-8  md:gap-8">
                    {/* Text Section */}
                    <div className="max-w-[700px]  md:text-left">
                        <h1 className=" text-xl md:text-3xl font-bold border-l-4 border-blue-800 pl-2 text-[#FD5D14] mb-4 md:mb-10">A LEGACY OF CASTING PROGRESS</h1>
                        <ul className="space-y-2 text-left text-gray-700 text-sm md:text-md font-medium  leading-loose">
                            <li >▣ 
                                KEITH CERAMIC (KTC): LEADING & WELL-ESTABLISHED MANUFACTURER & 
                            EXPORTER OF GREY IRON CASTINGS SINCE 1992 <br></br>
                            KEITH CERAMIC (KTC) IS A FAMILY-OWNED BUSINESS WITH OVER THREE DECADES 
                            OF EXPERIENCE IN MANUFACTURING GREY IRON CASTINGS. FOUNDED IN 1992, WE 
                            HAVE BECOME A DISTINGUISHED MANUFACTURER AND EXPORTER OF HIGH
                            QUALITY GREY IRON CASTINGS WITH AN ANNUAL INSTALLED PRODUCTION 
                            CAPACITY OF 30,000 MT. <br></br>
                            </li>
                            <li>▣ STRATEGIC LOCATION FOR EFFICIENT OPERATIONS <br></br>
                                KTC IS STRATEGICALLY LOCATED WITH EASY ACCESS TO 2 NEARBY PORTS AND A 
                                RAILWAY STATION, MAKING IT EASIER TO TRANSPORT MULTI-AXLE GOODS 
                                EFFICIENTLY. OUR FACILITY IS CONVENIENTLY SITUATED ALONG A NATIONAL 
                                HIGHWAY, ENSURING SMOOTH LOGISTICS AND TIMELY DELIVERY. </li>
                            <li> 
                            <button className="flex bg-[#FD5D14] p-1 sm:p-2 rounded-md text-white  ">
                                <Link to="/about" className="flex gap-2 items-center" >
                                <span>See more </span>
        
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>                      
                                </Link>
                            </button>
                        </li>
                        </ul>
                        </div>
                    {/* Image Section */}
                    <div className="mt-6 max-w-[500px]">
                        <img className="rounded-lg  w-full" src="./assets/gifs/team-management-gif.gif" alt="Who we are" />
                    </div>
                </div>

            </div>
    )
}

export default ShortAbout
