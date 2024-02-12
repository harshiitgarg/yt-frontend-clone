import { abbreviateNumber } from "js-abbreviation-number";
import React from "react";
import { useSelector } from "react-redux";
import { PublishedTimeOfVideo } from "./utils/publishedData";
import { formatDuration } from "./utils/helper";

const VideoCard = ({ info }) => {
  const { snippet, statistics, contentDetails } = info || {};
  const { title, channelTitle, thumbnails, publishedAt } = snippet || {};
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const isDarkMode = useSelector((store) => store.theme.isDarkMode);
  return (
    <div>
      <div
        className={`${
          isMenuOpen ? "md:w-72 md:mx-4 md:my-4" : "md:w-80 md:mx-6 md:my-4"
        } px-2 m-4`}
      >
        <div className="relative md:transform transition duration-500 hover:scale-105">
          <img
            src={thumbnails?.medium?.url}
            alt="video"
            className="rounded-lg w-full"
          />
          <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 px-1 rounded text-sm text-white">
            {formatDuration(contentDetails?.duration?.slice(2))}
          </div>
        </div>
        <h1 className="font-semi-bold text-md my-1">{title}</h1>
        <h2
          className={`text-sm ${
            isDarkMode ? "text-gray-400" : "text-gray-800"
          }`}
        >
          {channelTitle}
        </h2>
        <div
          className={`flex gap-2 text-sm ${
            isDarkMode ? "text-gray-400" : "text-gray-800"
          } `}
        >
          <h2>{abbreviateNumber(statistics?.viewCount)} views</h2>
          <PublishedTimeOfVideo publishedAt={publishedAt} />
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
