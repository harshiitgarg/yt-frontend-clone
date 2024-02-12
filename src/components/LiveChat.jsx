import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "./utils/chatSlice";
import ChatMessage from "./ChatMessage";
import { generateRandomNames, makeRandomMessage } from "./utils/helper";
import { IoMdSend } from "react-icons/io";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const messages = useSelector((store) => store.chat.messages);
  const isDarkMode = useSelector((store) => store.theme.isDarkMode);
  useEffect(() => {
    const timeInterval = setInterval(() => {
      dispatch(
        addMessages({
          name: generateRandomNames(),
          message: makeRandomMessage(15),
        })
      );
    }, 2000);
    return () => clearInterval(timeInterval);
  }, []);
  return (
    <div className="border border-gray-300 rounded-lg mx-2">
      <div className=" flex flex-col-reverse h-[450px] w-full overflow-y-auto ">
        {messages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessages({
              name: "Harshit",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
        className="flex items-center"
      >
        <input
          type="text"
          className={`p-1 w-10/12 ${
            isDarkMode ? "bg-search-color text-white" : "bg-gray-200 text-black"
          } rounded-lg m-2  `}
          value={liveMessage}
          placeholder="Chat publicly..."
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button>
          <IoMdSend className="text-2xl" />
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
