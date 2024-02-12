import React, { useEffect, useState } from "react";
import { VIDEO_DETAILS_API } from "../constant";
import { PublishedTimeOfVideo } from "./utils/publishedData";
import { abbreviateNumber } from "js-abbreviation-number";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const RecVideo = ({ data }) => {
  const videoId = data?.contentDetails?.upload?.videoId;
  const [searchParams] = useSearchParams();
  const query = searchParams.get("v");
  const [videoDetails, setVideoDetails] = useState(null);
  const isDarkMode = useSelector((store) => store.theme.isDarkMode);
  useEffect(() => {
    fetchRecVideo();
  }, [videoId]);
  const fetchRecVideo = async () => {
    const data = await fetch(VIDEO_DETAILS_API + "&id=" + videoId);
    const json = await data.json();
    setVideoDetails(json?.items[0]);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [query]);
  if (videoDetails == null) return null;
  const { channelTitle, publishedAt, title } =
    videoDetails?.snippet || {};
  const { url } = videoDetails?.snippet?.thumbnails?.high || {};
  const { viewCount } = videoDetails?.statistics || 0;

  return (
    <div className="mt-4 gap-2 md:flex">
      {url && (
        <div className="">
          <img
            src={url}
            alt="thumbnail"
            className="rounded-lg md:w-[180px] md:h-[120px] "
          />
        </div>
      )}
      <div className="w-[300px]">
        {title && <div className="text-sm my-1">{title}</div>}
        {channelTitle && (
          <div
            className={`${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            } text-xs`}
          >
            {channelTitle}
          </div>
        )}
        <div
          className={`flex gap-2 ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          } text-xs`}
        >
          {viewCount && (
            <div className="">{abbreviateNumber(viewCount)} views</div>
          )}
          {publishedAt && <PublishedTimeOfVideo publishedAt={publishedAt} />}
        </div>
      </div>
    </div>
  );
};

export default RecVideo;
