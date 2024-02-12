import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { sideBarIconList } from "./utils/sideIconBarList";

const Sidebar = () => {
  const isDarkMode = useSelector((store) => store.theme.isDarkMode);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  //Early return pattern
  if (!isMenuOpen) return null;
  return (
    <div
      className={`transition-all duration-400 z-20 pl-3 ${
        isMenuOpen ? "w-48" : "w-0"
      } fixed top-0 h-full overflow-auto mr-4 scroll-smooth no-scrollbar ${
        isDarkMode ? "bg-dark-color text-white" : "bg-white text-black"
      }`}
      style={{ top: "60px", left: isMenuOpen ? "0px" : "-200px" }}
    >
      <ul className="mt-2 mb-6">
        {sideBarIconList.map((icondata, index) => (
          <Link
            to={
              "/" + (icondata.name != "Home" ? `search?q=${icondata.name}` : "")
            }
            key={icondata.name + index}
          >
            <li
              className={`flex gap-1 rounded-lg ${
                isDarkMode
                  ? "hover:text-white hover:bg-search-color "
                  : "text-black hover:bg-gray-300"
              }`}
              key={index}
            >
              <span className="p-2 my-2">{icondata.key}</span>
              <span className="p-1 my-2">{icondata.name}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
