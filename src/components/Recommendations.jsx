import React, { useEffect, useState } from "react";
import { VIDEO_RECOMMENDATIONS_API } from "../constant";
import { useSelector } from "react-redux";
import RecVideo from "./RecVideo";
import { Link } from "react-router-dom";
import Loader from "./utils/Loader";

const Recommendations = () => {
  const channelId = useSelector((store) => store.channelId.channelId);

  const [recVideoList, setRecVideoList] = useState(null);
  useEffect(() => {
    fetchRecommendations();
  }, []);
  const fetchRecommendations = async () => {
    const data = await fetch(VIDEO_RECOMMENDATIONS_API + channelId);
    const json = await data.json();

    setRecVideoList(json?.items);
  };
  if (recVideoList == null && window.innerWidth < 768) return <Loader />;
  return (
    <div className="">
      {recVideoList.map((data, index) => (
        <Link
          to={"/watch?v=" + data?.contentDetails?.upload?.videoId}
          key={index}
        >
          <RecVideo data={data} />
        </Link>
      ))}
    </div>
  );
};

export default Recommendations;
