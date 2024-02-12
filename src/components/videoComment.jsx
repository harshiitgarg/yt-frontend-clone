import React from "react";
import { PublishedTimeOfVideo } from "./utils/publishedData";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { abbreviateNumber } from "js-abbreviation-number";
import { useSelector } from "react-redux";

const VideoComment = ({ data }) => {
  data = data?.snippet?.topLevelComment?.snippet;
  const {
    authorDisplayName,
    authorProfileImageUrl,
    likeCount,
    publishedAt,
    textDisplay,
  } = data || {};
  const isDarkMode = useSelector((store) => store.theme.isDarkMode);
  return (
    <div className="flex mt-2 my-2">
      <div className="mt-2 mr-2 rounded-full w-12 h-12 overflow-hidden" >
        <img
          src={authorProfileImageUrl}
          alt="profile"
          className="w-full h-full object-contain rounded-full"
        />
      </div>
      <div className="flex flex-col mt-2 gap-1 w-[900px]">
        <div className={`flex text-sm`}>
          <div className="mr-2 font-semibold">{authorDisplayName}</div>
          <div className={`${isDarkMode ? "text-gray-300": "text-gray-600"} text-xs mt-0.5`}>
            <PublishedTimeOfVideo publishedAt={publishedAt} />
          </div>
        </div>
        <div className="text-sm">
          <p>{textDisplay}</p>
        </div>
        <div className="flex">
          <BiLike className="text-xl mr-1" />
          <span>{abbreviateNumber(likeCount)}</span>
          <BiDislike className="text-xl ml-2 mr-2" />
        </div>
      </div>
    </div>
  );
};

export default VideoComment;
