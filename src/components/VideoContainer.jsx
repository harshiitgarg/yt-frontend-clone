import React, { useEffect, useState, useRef, useCallback } from "react";
import { YOUTUBE_URL } from "../constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setChannelId } from "./utils/channelIdSlice";
import HomeShimmer from "./utils/HomeShimmer";
const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [page, setPage] = useState(1);
  const observer = useRef();
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const dispatch = useDispatch();

  const lastVideoElementRef = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prevPageNumber) => prevPageNumber + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`${YOUTUBE_URL}&page=${page}`);
      const json = await data.json();
      if (Array.isArray(json.items)) {
        setVideos((prevVideos) => {
          return [...prevVideos, ...json.items];
        });
      }
    };
    fetchData();
  }, [page]);

  return (
    <div
      className={`flex md:flex-wrap flex-col md:flex-row  ${
        isMenuOpen ? "md:ml-56" : "md:ml-8"
      } scroll-smooth overflow-x-hidden`}
    >
      {Array.isArray(videos) && videos.length == 0 ? (
        <HomeShimmer />
      ) : (
        videos.map((video, index) => {
          if (videos.length === index + 1) {
            return (
              <Link
                ref={lastVideoElementRef}
                to={"/watch?v=" + video.id}
                key={video.id}
              >
                <VideoCard info={video} />
              </Link>
            );
          } else {
            return (
              <Link
                to={"/watch?v=" + video.id}
                key={index}
                onClick={() =>
                  dispatch(setChannelId(video?.snippet?.channelId))
                }
              >
                <VideoCard info={video} />
              </Link>
            );
          }
        })
      )}
    </div>
  );
};

export default VideoContainer;
