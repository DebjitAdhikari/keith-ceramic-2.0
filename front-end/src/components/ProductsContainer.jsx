import { useNavigate } from "react-router-dom"

function ProductsContainer() {
  const navigate = useNavigate()
  function gotoProduct(){
    navigate("/product")
  }
    return (
        <div
        className="w-[90%] lg:w-[80%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn"
      >
        {/* Product Cards */}
        <div
          className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 relative"
        >
          <img
            src="https://images.unsplash.com/photo-1666809434902-b77f5ca82d3b?q=80&w=1974&auto=format&fit=crop"
            alt="Water Distribution"
            className="w-full h-48 object-cover"
           />
          <div className="p-4 text-center">
            <h3 className="font-bold text-[#02245B] text-lg">Water Distribution</h3>
          </div>
          <div
          onClick={gotoProduct}
            className="w-12 h-12 bg-[#FD5D14] text-white flex justify-center items-center rounded-full absolute bottom-4 right-4 shadow-md cursor-pointer hover:bg-[#02245B] transition duration-300">
            
            <i className="fa-solid fa-arrow-right text-lg"></i>
          </div>
        </div>

        <div
          className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 relative items-center"
        >
          <img
            src="https://www.kiswok.com/assets/upload/product-image/d5af326e5155b7206e7bab3a73c48292.jpg"
            alt="Municipal Castings"
            className="w-full h-48 object-cover"
           />
          <div className="p-4 text-center mr-[15px]">
            <h3 className="font-bold text-[#02245B] text-lg">
              Municipal & Public Utility Castings
            </h3>
          </div>
          <div
          onClick={gotoProduct}
            className="w-12 h-12 bg-[#FD5D14] text-white flex justify-center items-center rounded-full absolute bottom-4 right-4 shadow-md cursor-pointer hover:bg-[#02245B] transition duration-300">
            
            <i className="fa-solid fa-arrow-right text-lg"></i>
          </div>
        </div>

        <div
          className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 relative"
        >
          <img
            src="https://images.unsplash.com/photo-1628352081506-83c43123ed6d?q=80&w=1896&auto=format&fit=crop"
            alt="Agricultural Castings"
            className="w-full h-48 object-cover"
           />
          <div className="p-4 text-center">
            <h3 className="font-bold text-[#02245B] text-lg">
              Agricultural Castings
            </h3>
          </div>
          <div
          onClick={gotoProduct}
            className="w-12 h-12 bg-[#FD5D14] text-white flex justify-center items-center rounded-full absolute bottom-4 right-4 shadow-md cursor-pointer hover:bg-[#02245B] transition duration-300">
            
            <i className="fa-solid fa-arrow-right text-lg"></i>
          </div>
        </div>

        <div
          className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 relative"
        >
          <img
            src="https://images.unsplash.com/photo-1602603559625-fc3630f0aa75?q=80&w=1974&auto=format&fit=crop"
            alt="Railway Castings"
            className="w-full h-48 object-cover"
           />
          <div className="p-4 text-center">
            <h3 className="font-bold text-[#02245B] text-lg">Railway Castings</h3>
          </div>
          <div
          onClick={gotoProduct}
            className="w-12 h-12 bg-[#FD5D14] text-white flex justify-center items-center rounded-full absolute bottom-4 right-4 shadow-md cursor-pointer hover:bg-[#02245B] transition duration-300">
            
            <i className="fa-solid fa-arrow-right text-lg"></i>
          </div>
        </div>

        <div
          className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 relative"
        >
          <img
            src="https://www.kiswok.com/assets/upload/product-image/e13f434f9cc95be541bc64c73ace7396.jpg"
            alt="Counter Weights"
            className="w-full h-48 object-cover"
           />
          <div className="p-4 text-center">
            <h3 className="font-bold text-[#02245B] text-lg">Counter Weights</h3>
          </div>
          <div
          onClick={gotoProduct}
            className="w-12 h-12 bg-[#FD5D14] text-white flex justify-center items-center rounded-full absolute bottom-4 right-4 shadow-md cursor-pointer hover:bg-[#02245B] transition duration-300">
            
            <i className="fa-solid fa-arrow-right text-lg"></i>
          </div>
        </div>

        <div
          className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 relative"
        >
          <img
            src="https://images.unsplash.com/photo-1567016557389-5246a1940bdc?q=80&w=1780&auto=format&fit=crop"
            alt="Furniture"
            className="w-full h-48 object-cover"
           />
          <div className="p-4 text-center">
            <h3 className="font-bold text-[#02245B] text-lg">Furniture</h3>
          </div>
          <div
          onClick={gotoProduct}
            className="w-12 h-12 bg-[#FD5D14] text-white flex justify-center items-center rounded-full absolute bottom-4 right-4 shadow-md cursor-pointer hover:bg-[#02245B] transition duration-300">
            
            <i className="fa-solid fa-arrow-right text-lg"></i>
          </div>
        </div>

        <div
          className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 relative"
        >
          <img
            src="https://images.unsplash.com/photo-1695967372350-5be90709e7db?q=80&w=1974&auto=format&fit=crop"
            alt="High Tension Power Transmission"
            className="w-full h-48 object-cover"
           />
          <div className="p-4 text-start right-3 ">
            <h3 className="font-bold text-[#02245B] text-lg ">
              High Tension Power Transmission
            </h3>
          </div>
          <div
          onClick={gotoProduct}
            className="w-12 h-12 bg-[#FD5D14] text-white flex justify-center items-center rounded-full absolute bottom-4 right-4 shadow-md cursor-pointer hover:bg-[#02245B] transition duration-300">
            
            <i className="fa-solid fa-arrow-right text-lg"></i>
          </div>
        </div>

        <div
          className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 relative"
        >
          <img
            src="https://images.unsplash.com/photo-1700825560405-8a3b2329298b?q=80&w=2070&auto=format&fit=crop"
            alt="Miscellaneous Castings"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="font-bold text-[#02245B] text-lg">
              Miscellaneous Castings
            </h3>
          </div>
          <div
          onClick={gotoProduct}
            className="w-12 h-12 bg-[#FD5D14] text-white flex justify-center items-center rounded-full absolute bottom-4 right-4 shadow-md cursor-pointer hover:bg-[#02245B] transition duration-300">
            
            <i className="fa-solid fa-arrow-right text-lg"></i>
          </div>
        </div>
      </div>
    )
}

export default ProductsContainer
