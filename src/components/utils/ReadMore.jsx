import React, { useState } from "react";
import { useSelector } from "react-redux";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  const isDarkMode = useSelector((store) => store.theme.isDarkMode);
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 100) : text}
      <span
        onClick={toggleReadMore}
        className={`cursor-pointer ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
      >
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};

export default ReadMore;
