import React, { useEffect, useState } from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import { CHANNEL_IMG_API } from "../constant";
import { useSelector } from "react-redux";

// Channel Details of the Main Video in the Watch Page
const ChannelDetails = ({ channelId, channelTitle }) => {
    const isDarkMode = useSelector((store) => store.theme.isDarkMode);
  const [details, setDetails] = useState(null);

  useEffect(() => {
    getChannelImage();
  }, []);

  const getChannelImage = async () => {
    const data = await fetch(CHANNEL_IMG_API + "&id=" + channelId);
    const json = await data.json();
    setDetails(json);
  };
  if (details == null) return <></>;
  const imgUrl = details?.items[0]?.snippet?.thumbnails?.high?.url || "";
  const subscriberCount = details?.items[0]?.statistics?.subscriberCount || 0;

  return (
    <div className="flex items-center">
      <img
        className="w-12 h-12 mr-1 rounded-full"
        alt="channelImage"
        src={imgUrl}
      />
      <div>
        <p className="text-md">{channelTitle}</p>
        <p className={`text-xs ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
          {abbreviateNumber(subscriberCount)} subscribers
        </p>
      </div>
    </div>
  );
};

export default ChannelDetails;
