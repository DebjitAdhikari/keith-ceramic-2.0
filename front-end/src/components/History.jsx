function History() {
    return (
        <div className=" w-[90vw] mx-auto md:max-w-7xl mt-[100px] md:mt-[250px] flex flex-col gap-5">
            <h1 className=" text-xl md:text-3xl font-bold border-l-4 border-blue-800 pl-2 text-[#FD5D14] mb-4 md:mb-10">Our History</h1>
             {/* timeline */}
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
              {/* 1988 */}
                <li>
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="#FD5D14"
                      className="h-5 w-5">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="timeline-start mb-10 hover:cursor-pointer md:text-end bg-[#02245B] px-6 py-6 rounded-xl shadow-lg hover:bg-[#033D7B] transition-all duration-300 ease-in-out">
                    <time className="font-mono font-bold italic text-[#ffff] text-xl">1988</time>
                    {/* <div className="text-lg text-[#FD5D14] font-extrabold mb-3">Intial</div> */}
                    <div className="text-[#E6E6FA] leading-relaxed text-xs md:text-base opacity-90 hover:opacity-100 transition-all duration-300">
                        INITIALLY STARTED AS A TRADER OF CASTINGS, FORGINGS, MACHINED 
                        PARTS, AND FABRICATED COMPONENTS. 
                    </div>
                  </div>
                  
                  <hr  />
                </li>
              {/* 1992 */}
                <li>
                  <hr  />
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="#FD5D14"
                      className="h-5 w-5">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="timeline-end mb-10 hover:cursor-pointer md:text-end bg-[#02245B] px-6 py-6 rounded-xl shadow-lg hover:bg-[#033D7B] transition-all duration-300 ease-in-out">
                    <time className="font-mono font-bold italic text-[#ffff] text-xl">1992</time>
                    {/* <div className="text-lg text-[#FD5D14] font-extrabold mb-3">Second</div> */}
                    <div className="text-[#E6E6FA] leading-relaxed text-xs md:text-base opacity-90 hover:opacity-100 transition-all duration-300">
                        FORMALLY INCORPORATED KEITH CERAMIC (KTC)
                    </div>
                  </div>
                  <hr  />
                </li>
              {/* 1992 */}
                <li>
                  <hr  />
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="#FD5D14"
                      className="h-5 w-5">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="timeline-start mb-10 hover:cursor-pointer md:text-end bg-[#02245B] px-6 py-6 rounded-xl shadow-lg hover:bg-[#033D7B] transition-all duration-300 ease-in-out">
                    <time className="font-mono font-bold italic text-[#ffff] text-xl">1993</time>
                    <div className="md:text-lg text-[#FD5D14] font-extrabold mb-3">EXPANSION INTO CASTING MANUFACTURING</div>
                    <div className="text-[#E6E6FA] leading-relaxed text-xs md:text-base opacity-90 hover:opacity-100 transition-all duration-300">
                      LEASING 3 SMALL FOUNDRIES
                      FOR ENHANCED PRODUCTION, WHILE CONTINUING TO TRADE IN OTHER IRON AND
                      STEEL PRODUCTS.
                      
                    </div>
                  </div>
                  <hr  />
                </li>
              {/* 1993 */}
                
              {/* 2004 */}
                <li>
                  <hr  />
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="#FD5D14"
                      className="h-5 w-5">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="timeline-end mb-10 hover:cursor-pointer md:text-end bg-[#02245B] px-6 py-6 rounded-xl shadow-lg hover:bg-[#033D7B] transition-all duration-300 ease-in-out">
                    <time className="font-mono font-bold italic text-[#ffff] text-xl">2004</time>
                    <div className="md:text-lg text-[#FD5D14] font-extrabold mb-3">PURSUIT OF BACKWARD INTEGRATION: A KEY TURNING POINT FOR GROWTH 
                        AND SUCCESS</div>
                    <span className="text-[#E6E6FA] leading-relaxed text-xs md:text-base opacity-90 hover:opacity-100 transition-all duration-300">
                        WE PURSUED BACKWARD INTEGRATION, MARKING A SIGNIFICANT TURNING POINT 
                        THAT LAID THE FOUNDATION FOR OUR CONTINUOUS GROWTH AND LONG-TERM 
                        SUCCESS. THIS STRATEGIC DECISION ALLOWED US TO GAIN MORE CONTROL OVER 
                        PRODUCTION PROCESS, ENHANCE PRODUCT QUALITY, AND IMPROVE OPERATIONAL 
                        EFFICIENCY. 
                    </span>
                  </div>
                  <hr  />
                </li>
              {/* 2012 */}
                <li>
                    <hr  />
                    <div className="timeline-middle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="#FD5D14"
                        className="h-5 w-5">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="timeline-start mb-10 hover:cursor-pointer md:text-end bg-[#02245B] px-6 py-6 rounded-xl shadow-lg hover:bg-[#033D7B] transition-all duration-300 ease-in-out">
                      <time className="font-mono font-bold italic text-[#ffff] text-xl">2012</time>
                      <div className="md:text-lg text-[#FD5D14] font-extrabold mb-3">PURSUIT OF BACKWARD INTEGRATION: A KEY TURNING POINT FOR GROWTH 
                          AND SUCCESS</div>
                      <span className="text-[#E6E6FA] leading-relaxed text-xs md:text-base opacity-90 hover:opacity-100 transition-all duration-300">
                          WE PURSUED BACKWARD INTEGRATION, MARKING A SIGNIFICANT TURNING POINT 
                          THAT LAID THE FOUNDATION FOR OUR CONTINUOUS GROWTH AND LONG-TERM 
                          SUCCESS. THIS STRATEGIC DECISION ALLOWED US TO GAIN MORE CONTROL OVER 
                          PRODUCTION PROCESS, ENHANCE PRODUCT QUALITY, AND IMPROVE OPERATIONAL 
                          EFFICIENCY. 
                      </span>
                    </div>
                    <hr  />
                </li>
                {/* 2018 */}
                  <li>
                    <hr  />
                    <div className="timeline-middle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="#FD5D14"
                        className="h-5 w-5">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="timeline-end mb-10 hover:cursor-pointer md:text-end bg-[#02245B] px-6 py-6 rounded-xl shadow-lg hover:bg-[#033D7B] transition-all duration-300 ease-in-out">
                      <time className="font-mono font-bold italic text-[#ffff] text-xl">2018</time>
                      <div className="md:text-lg text-[#FD5D14] font-extrabold mb-3">ADDITION OF NEW EQUIPMENT TO ENHANCE OPERATIONS </div>
                      <span className="text-[#E6E6FA] leading-relaxed text-xs md:text-base opacity-90 hover:opacity-100 transition-all duration-300">
                        
                        WE EXPANDED OUR MACHINING CAPACITY BY INSTALLING NEW LATHE MACHINES 
                        AND RADIAL DRILLS. WE ALSO INSTALLED A SHOT BLASTING MACHINE AND A 
                        WEIGHBRIDGE TO FURTHER ENHANCE OUR OPERATIONS. THESE UPGRADES HAVE 
                        IMPROVED OUR PRODUCTION EFFICIENCY, PRODUCT QUALITY, AND OVERALL 
                        OPERATIONAL CAPABILITIES, ALLOWING US TO BETTER SERVE OUR CUSTOMERS WITH 
                        MACHINED CASTINGS AND SUPERIOR SURFACE FINISH
                      </span>
                    </div>
                    <hr  />
                  </li>
                {/* 2022 */}
                <li>
                  <hr  />
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="#FD5D14"
                      className="h-5 w-5">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="timeline-start mb-10 hover:cursor-pointer md:text-end bg-[#02245B] px-6 py-6 rounded-xl shadow-lg hover:bg-[#033D7B] transition-all duration-300 ease-in-out">
                    <time className="font-mono font-bold italic text-[#ffff] text-xl">2022</time>
                    <div className="md:text-lg text-[#FD5D14] font-extrabold mb-3">INSTALLATION OF HIGH-PRESSURE MOULDING LINE: ADVANCED
                      AUTOMATION FOR ENHANCED EFFICIENCY
                      </div>
                    <span className="text-[#E6E6FA] leading-relaxed text-xs md:text-base opacity-90 hover:opacity-100 transition-all duration-300">
                      WE INSTALLED A FULLY AUTOMATED PLC CONTROLLED HIGH-PRESSURE
                      MOULDING LINE, COMPLETE WITH A FULLY AUTOMATED SAND PLANT AND MOULD
                      HANDLING SYSTEM. THIS STATE-OF-THE-ART TECHNOLOGY HAS SIGNIFICANTLY
                      BOOSTED OUR PRODUCTION EFFICIENCY, ALLOWING US TO MANUFACTURE HIGHQUALITY PRECISION CASTINGS CONSISTENTLY WITH IMPROVED TURNAROUND
                      TIMES.                      
                    </span>
                  </div>
                  <hr  />
              </li>
              {/* 2023 */}
              <li>
                <hr  />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="#FD5D14"
                    className="h-5 w-5">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd" />
                  </svg>
                </div>
                <div className="timeline-end mb-10 hover:cursor-pointer md:text-end bg-[#02245B] px-6 py-6 rounded-xl shadow-lg hover:bg-[#033D7B] transition-all duration-300 ease-in-out">
                  <time className="font-mono font-bold italic text-[#ffff] text-xl">2023</time>
                  <div className="md:text-lg text-[#FD5D14] font-extrabold mb-3"> AWARDED ONE STAR EXPORT HOUSE STATUS BY GOVERNMENT OF INDIA</div>
                  <span className="text-[#E6E6FA] leading-relaxed text-xs md:text-base opacity-90 hover:opacity-100 transition-all duration-300">
                    WE WERE PROUDLY AWARDED THE PRESTIGIOUS ONE STAR EXPORT HOUSE STATUS
                    BY THE GOVERNMENT OF INDIA. THIS RECOGNITION HIGHLIGHTS OUR EXCELLENCE
                    IN INTERNATIONAL TRADE AND UNDERSCORES OUR REPUTATION AS A RELIABLE
                    EXPORTER OF HIGH-QUALITY CASTINGS AND OTHER IRON AND STEEL PRODUCTS.
                  </span>
                </div>
                <hr  />
            </li>
            {/* 2024 */}
                <li>
                  <hr  />
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="#FD5D14"
                      className="h-5 w-5">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="timeline-start mb-10 hover:cursor-pointer md:text-end bg-[#02245B] px-6 py-6 rounded-xl shadow-lg hover:bg-[#033D7B] transition-all duration-300 ease-in-out">
                    <time className="font-mono font-bold italic text-[#ffff] text-xl">2024</time>
                    <div className="md:text-lg text-[#FD5D14] font-extrabold mb-3">INSTALLATION OF 110 KW “ON GRID” ROOFTOP SOLAR POWER GENERATION
                      SYSTEM </div>
                    <span className="text-[#E6E6FA] leading-relaxed text-xs md:text-base opacity-90 hover:opacity-100 transition-all duration-300">
                      WE HAVE INSTALLED A STATE-OF-THE-ART 110 KW ON GRID ROOFTOP SOLAR
                      POWER GENERATION SYSTEM. THIS ECO-FRIENDLY INITIATIVE UNDERSCORES OUR
                      COMMITMENT TO SUSTAINABILITY AND REDUCING OUR CARBON FOOTPRINT, WHILE
                      ENSURING A RELIABLE AND COST-EFFECTIVE ENERGY SOLUTION FOR OUR
                      MANUFACTURING OPERATIONS.
                    </span>
                  </div>
                </li>
            </ul>
        </div>
    )
}

export default History
