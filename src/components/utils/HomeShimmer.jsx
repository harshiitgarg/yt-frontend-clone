import React from "react";
import { useSelector } from "react-redux";

const HomeShimmer = () => {
  const isDarkMode = useSelector((store) => store.theme.isDarkMode);
  return (
    <div className="overflow-hidden">
      <div className="shimmer-container flex flex-wrap gap-4 mt-4 overflow-hidden">
        <div
          className={`shimmer-item ${
            isDarkMode ? "bg-search-color" : "bg-gray-300"
          } w-96 md:w-72 h-56 md:h-40 rounded-lg max-sm:mx-4 mb-16 md:mb-28`}
        ></div>
        <div
          className={`shimmer-item ${
            isDarkMode ? "bg-search-color" : "bg-gray-300"
          } w-96 md:w-72 h-56 md:h-40 rounded-lg max-sm:mx-4 mb-16 md:mb-28`}
        ></div>
        <div
          className={`shimmer-item ${
            isDarkMode ? "bg-search-color" : "bg-gray-300"
          } w-96 md:w-72 h-56 md:h-40 rounded-lg max-sm:mx-4 mb-16 md:mb-28`}
        ></div>
        <div
          className={`shimmer-item ${
            isDarkMode ? "bg-search-color" : "bg-gray-300"
          } w-96 md:w-72 h-56 md:h-40 rounded-lg max-sm:mx-4 mb-16 md:mb-28`}
        ></div>
        <div
          className={`shimmer-item ${
            isDarkMode ? "bg-search-color" : "bg-gray-300"
          } w-96 md:w-72 h-56 md:h-40 rounded-lg max-sm:mx-4 mb-16 md:mb-28`}
        ></div>
        <div
          className={`shimmer-item ${
            isDarkMode ? "bg-search-color" : "bg-gray-300"
          } w-96 md:w-72 h-56 md:h-40 rounded-lg max-sm:mx-4 mb-16 md:mb-28`}
        ></div>
        <div
          className={`shimmer-item ${
            isDarkMode ? "bg-search-color" : "bg-gray-300"
          } w-96 md:w-72 h-56 md:h-40 rounded-lg max-sm:mx-4 mb-16 md:mb-28`}
        ></div>
        <div
          className={`shimmer-item ${
            isDarkMode ? "bg-search-color" : "bg-gray-300"
          } w-96 md:w-72 h-56 md:h-40 rounded-lg max-sm:mx-4 mb-16 md:mb-28`}
        ></div>
        <div
          className={`shimmer-item ${
            isDarkMode ? "bg-search-color" : "bg-gray-300"
          } w-96 md:w-72 h-56 md:h-40 rounded-lg max-sm:mx-4 mb-16 md:mb-28`}
        ></div>
        <div
          className={`shimmer-item ${
            isDarkMode ? "bg-search-color" : "bg-gray-300"
          } w-96 md:w-72 h-56 md:h-40 rounded-lg max-sm:mx-4 mb-16 md:mb-28`}
        ></div>
        <div
          className={`shimmer-item ${
            isDarkMode ? "bg-search-color" : "bg-gray-300"
          } w-96 md:w-72 h-56 md:h-40 rounded-lg max-sm:mx-4 mb-16 md:mb-28`}
        ></div>
        <div
          className={`shimmer-item ${
            isDarkMode ? "bg-search-color" : "bg-gray-300"
          } w-96 md:w-72 h-56 md:h-40 rounded-lg max-sm:mx-4 mb-16 md:mb-28`}
        ></div>
      </div>
    </div>
  );
};

export default HomeShimmer;
