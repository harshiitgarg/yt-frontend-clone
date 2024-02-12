import React from "react";

const Loader = () => {
  return (
    <div class="flex flex-row h-screen md:ml-[750px] ml-36 gap-2 z-20">
      <div class="w-4 md:w-8 h-4 md:h-8 rounded-full bg-red-700 animate-bounce"></div>
      <div class="w-4 md:w-8 h-4 md:h-8 rounded-full bg-red-700 animate-bounce [animation-delay:-.3s]"></div>
      <div class="w-4 md:w-8 h-4 md:h-8 rounded-full bg-red-700 animate-bounce [animation-delay:-.5s]"></div>
    </div>
  );
};

export default Loader;
