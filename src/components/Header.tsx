import { Close, Menu } from "../icons/icons";

import { useState } from "react";

interface HeaderProps {
  setCategory: (category: string) => void;
}

const Header = ({ setCategory }: HeaderProps) => {
  // list of category
  const categories = [
    "Business",
    "Entertainment",
    "General",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ];

  const handleCategoryClick = (category: string) => {
    setCategory(category);
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <header className="">
      {/* header */}
      <div className="bg-[#fff] w-full h-[4.5rem] text-center top-0 left-0 shadow-md p-4 z-40 fixed flex flex-row items-center">
        {!isSidebarOpen && (
          <button
            className="flex flex-row space-x-1 items-center absolute left-4 cursor-pointer"
            onClick={toggleSidebar}
          >
            <Menu width="36" height="36" />
            <span className="mt-1 font-thin mb-1">Menu</span>
          </button>
        )}

        <div className="mx-auto cursor-pointer">
          <img
            src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
            className="h-14 w-full "
            alt="inshorts icon"
          />
        </div>
      </div>

      <div className="relative">
        {/* close button */}
        {isSidebarOpen && (
          <button
            className="absolute flex flex-row space-x-1 items-center justify-center bg-[#fff] top-4 left-[17rem] px-3 py-1 z-50"
            onClick={toggleSidebar}
          >
            <Close height="18" width="18" />
            <span className="mt-1 font-thin mb-2 text-sm">Close</span>
          </button>
        )}

        {/* sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-56 bg-gray-800 text-white transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-50`}
        >
          <div className="p-2 flex justify-start items-start border-b border-gray-600">
            <h4 className="font-thin text-[#808290]">Categories</h4>
          </div>
          <ul className="p-4 space-y-0.5">
            {categories.map((category) => (
              <li
                key={category}
                onClick={() => handleCategoryClick(category)}
                className="block hover:bg-gray-600 p-2"
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-0 z-30"
            onClick={toggleSidebar}
          ></div>
        )}
      </div>
    </header>
  );
};

export default Header;
