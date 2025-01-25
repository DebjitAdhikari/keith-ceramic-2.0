import { useState } from "react";

function MissionVisionComponent() {
  const [isEditing, setIsEditing] = useState(false); // State to control the visibility of buttons
  const [aboutData, setAboutData] = useState({ header: "", content: "" }); // State to store form data
  const [YearBackgroundImage, setYearBackgroundImage] = useState(null); // State for the image preview

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAboutData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setIsEditing(true); // Show buttons when input changes
  };

  // Handle file input changes
  const handleBackgroundPhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setYearBackgroundImage(fileUrl);
      setIsEditing(true); // Show buttons when file input changes
    }
  };

  // Handle form submission
  const handleSubmit = () => {
    console.log("Submitted Data:", aboutData);
    console.log("Uploaded Image:", YearBackgroundImage);
    setIsEditing(false); // Hide buttons after submission
  };

  // Handle cancel
  const handleCancel = () => {
    setIsEditing(false);
    setAboutData({ header: "", content: "" }); // Reset form data
    setYearBackgroundImage(null); // Reset image preview
  };

  return (
    <div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* principles Heading */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Heading 1
                  </label>
                  <input
                    type="text"
                    name="header"
                    value={aboutData?.header || ""}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                    placeholder="Enter heading"
                    disabled={!isEditing}
                  />
                </div>
      
                {/* heding Description */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Heading 1 Description
                  </label>
                  <input
                    type="text"
                    name="content"
                    value={aboutData?.content || ""}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                    placeholder="Enter description"
                    disabled={!isEditing}
                  />
                </div>
      
                {/* heading 1 Image */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Heading 1 Image
                  </label>
                  <input
                    type="file"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                    onChange={handleBackgroundPhotoChange}
                    disabled={!isEditing}
                  />
                  {YearBackgroundImage && (
                    <div className="mt-4">
                      <img
                        src={YearBackgroundImage}
                        alt="Year Background"
                        className="w-full h-auto rounded-lg shadow-md"
                      />
                    </div>
                  )}
                </div>
              </div>
                {/* Submit & Cancel Buttons */}
                {isEditing && (
                  <div className="flex justify-start space-x-4 mt-6">
                    <button
                      type="submit"
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      Submit
                    </button>
                    <button
                      type="button"
                      onClick={()=>setIsEditing(false)}
                      className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                      Cancel
                    </button>
                  </div>
                )}
                {!isEditing && (
              <div className="p-4">
                <button
                  type="button"
                  className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500"
                  onClick={()=>setIsEditing(true)}
                >
                  Edit
                </button>
              </div>
            )}
        </div>
  );
}

export default MissionVisionComponent;
