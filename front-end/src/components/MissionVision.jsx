function MissionVision() {
    return (
        <div className="max-w-7xl  mx-auto md:flex-row justify-around items-center mt-10 px-2 md:px-8 gap-8  py-[80px]">
            {/* heading */}
            <div>
                <h1 className=" text-xl md:text-3xl font-bold border-l-4 border-blue-800 pl-2 text-[#FD5D14] mb-4 md:mb-10">Principles & core values</h1>
            </div>
            
            <div className="flex h-full flex-col md:flex-row gap-4">
                {/* Mission */}
                <div className="relative rounded-lg w-full md:w-1/2 h-64 md:h-96 overflow-hidden group">
                  <img
                    src="https://images.pexels.com/photos/8866736/pexels-photo-8866736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Mission"
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                   />
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                    <div className="text-white flex flex-col gap-7 h-full text-lg font-bold p-2 sm:p-6">
                      <h1 className="sm:text-2xl">Our Mission:</h1>
                      <ul className=" space-y-2 sm:space-y-4 text-xs sm:text-sm md:text-lg font-light leading-relaxed">
                        <li>
                          ▣ SUPPLYING HIGH-QUALITY CASTINGS WITH ON-TIME DELIVERY AT THE MOST COMPETITIVE PRICES
                        </li>
                        <li>
                          ▣ CONTINUALLY IMPROVING PROCESSES FOR SUSTAINABLE EFFICIENCY AND ENHANCED PERFORMANCE
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              
                {/* Vision */}
                <div className="relative rounded-lg w-full md:w-1/2 h-64 md:h-96 overflow-hidden group">
                    <img
                      src="https://images.pexels.com/photos/327533/pexels-photo-327533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Mission"
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                     />
                    <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                      <div className="text-white flex flex-col gap-7 h-full text-lg font-bold p-2 sm:p-6">
                        <h1 className="sm:text-2xl">Our Vision:</h1>
                        <ul className=" space-y-2 sm:space-y-4 text-xs sm:text-sm md:text-lg font-light leading-relaxed">
                          <li>
                            ▣ AIMING TO BE THE MOST PREFERRED SUPPLIER FOR ALL OUR CUSTOMERS AND 
                            A LEADING PLAYER IN THE FOUNDRY INDUSTRY UPHOLDING OUR CORE VALUES 
                            & INTEGRITY. EARN WE MUST, BUT WITH RESPECT AND DIGNITY. 
                          </li>
                          
                        </ul>
                      </div>
                    </div>
                  </div>
              </div>
              
              
            
         </div>
    )
}

export default MissionVision
