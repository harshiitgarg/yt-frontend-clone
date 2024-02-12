import React from "react";
import { useSelector } from "react-redux";

const ChatMessage = ({ name, message }) => {
  const isDarkMode = useSelector((store) => store.theme.isDarkMode);
  return (
    <div>
      <div
        className={`flex items-center gap-2 p-1 ${
          isDarkMode ? "hover:bg-search-color " : "hover:bg-gray-200"
        } ml-2`}
      >
        <img
          src="src\assets\360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz-removebg-preview.png"
          alt="user"
          className="w-8"
        />
        <h1 className="font-bold">{name}</h1>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
