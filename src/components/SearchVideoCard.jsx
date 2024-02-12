import React, { useEffect, useState } from "react";
import { CHANNEL_IMG_API } from "../constant";
import { PublishedTimeOfVideo } from "./utils/publishedData";
import { useSelector } from "react-redux";
import HomeShimmer from "./utils/HomeShimmer";
import SearchShimmer from "./utils/SearchShimmer";

const SearchVideoCard = ({ data }) => {
  const [details, setDetails] = useState(null);
  const isDarkMode = useSelector((store) => store.theme.isDarkMode);
  useEffect(() => {
    if (data) {
      getChannelImg();
    }
  }, []);
  const getChannelImg = async () => {
    if (data && data.channelId) {
      const res = await fetch(CHANNEL_IMG_API + "&id=" + data?.channelId);
      const json = await res.json();
      setDetails(json);
    }
  };
  const imgUrl = details?.items[0].snippet?.thumbnails?.high?.url || {};
  return (
    <div
      className={`flex max-sm:flex-col flex-row py-2 ${
        isDarkMode
          ? "dark:bg-dark-color text-white"
          : "white:bg-white text-black"
      } max-sm:px-4 max-sm:pb-10 md:ml-56 mt-4 max-sm:w-screen overflow-hidden`}
    >
      {/* Thumbnail */}
      <img
        className="flex justify-center rounded-lg h-40 "
        src={data?.thumbnails?.medium?.url}
      />
      {/* Video Details */}
      <div className="px-2 flex flex-col">
        <span className="font-md text-lg ">{data?.title}</span>
        {data?.publishedAt && (
          <p
            className={`text-sm white: ${
              isDarkMode ? " dark:text-slate-300" : "text-slate-700"
            } mb-2 `}
          >
            <PublishedTimeOfVideo publishedAt={data?.publishedAt} />
          </p>
        )}
        <div className="flex items-center">
          <img className="w-8 my-2 rounded-full" src={imgUrl}></img>
          <span
            className={`flex items-center px-2 text-sm  ${
              isDarkMode ? " dark:text-slate-200" : "text-black"
            }`}
          >
            {data?.channelTitle}
          </span>
        </div>
        {/* Video Description */}
        <span
          className={`text-sm  ${
            isDarkMode ? " dark:text-slate-300" : "text-slate-700"
          }`}
        >
          {data?.description}
        </span>
      </div>
    </div>
  );
};

export default SearchVideoCard;
