import React, { useEffect, useState } from "react";
import { VIDEO_DETAILS_API } from "../constant";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { abbreviateNumber } from "js-abbreviation-number";
import ChannelDetails from "./ChannelDetails";
import { PiShareFatThin } from "react-icons/pi";
import { PublishedTimeOfVideo } from "./utils/publishedData";
import { FiMoreHorizontal } from "react-icons/fi";
import ReadMore from "./utils/ReadMore";
import { useSelector } from "react-redux";
import Comments from "./Comments";
import Loader from "./utils/Loader";

const WatchPageDetails = ({ videoId }) => {
  const isDarkMode = useSelector((store) => store.theme.isDarkMode);
  const [videoDetails, setVideoDetails] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, [videoId]);
  const fetchData = async () => {
    const data = await fetch(VIDEO_DETAILS_API + "&id=" + videoId);
    const json = await data.json();
    {
      json.items && setVideoDetails(json.items[0]);
    }
    setLoading(false);
  };
  const { channelTitle, channelId, description, title, publishedAt, tags } =
    videoDetails?.snippet || {};
  const { commentCount, likeCount, viewCount } = videoDetails?.statistics || {};
  if (tags) {
    var tagList = tags.slice(0, 5);
  }
  if (loading && window.innerWidth < 768) return <Loader />;
  return (
    <div className={`w-full max-sm:mx-0.5`}>
      <h1 className=" text-xl my-2">{title}</h1>
      {/* bada div */}
      <div className="flex justify-between max-sm:flex-col">
        <div className="flex mt-1">
          {channelId && channelTitle && (
            <ChannelDetails channelId={channelId} channelTitle={channelTitle} />
          )}
        </div>
        <div className="flex mt-5 my-2">
          <div
            className={`flex ${
              isDarkMode ? "bg-search-color" : "bg-gray-300"
            } p-2 mx-2 rounded-full`}
          >
            <BiLike className="text-xl mr-2" />
            <p className="mr-2">{abbreviateNumber(likeCount)}</p>
            <span className="">|</span>
            <BiDislike className="text-xl ml-1 mr-2" />
          </div>
          <button
            className={`${
              isDarkMode ? "bg-search-color" : "bg-gray-300"
            } p-2 rounded-full px-4 flex`}
          >
            <PiShareFatThin className="text-xl mr-1 mt-1" />
            Share
          </button>
          <FiMoreHorizontal
            className={`${
              isDarkMode
                ? "bg-search-color text-white"
                : "bg-gray-300 text-black"
            } p-2 rounded-full w-12 h-9 flex text-2xl mx-2`}
          />
        </div>
      </div>
      {/* description box starts */}
      <div
        className={`${
          isDarkMode ? "bg-search-color" : "bg-gray-300"
        }  rounded-lg w-full mt-4 my-3 p-3`}
      >
        <span className="mr-2">{abbreviateNumber(viewCount)} views</span>
        <PublishedTimeOfVideo publishedAt={publishedAt} />
        {tags != null && tags.length > 0 && (
          <span className="text-blue-800 dark:text-blue-500 mx-2">
            #{tags[0]}
          </span>
        )}
        {tags != null && tags.length > 1 && (
          <span className="text-blue-800 dark:text-blue-500">#{tags[1]}</span>
        )}
        {tags != null && tags.length > 2 && (
          <span className="text-blue-800 dark:text-blue-500 mx-2">
            #{tags[2]}
          </span>
        )}
        {description && (
          <div>
            <ReadMore>{description}</ReadMore>
          </div>
        )}
        {tagList &&
          tagList.map((tag, index) => (
            <span key={index} className="mr-2">
              #{tag}
            </span>
          ))}
      </div>
      <Comments videoId={videoId} commentCount={commentCount} />
    </div>
  );
};

export default WatchPageDetails;
