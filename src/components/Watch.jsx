import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "./utils/appSlice";
import { useEffect, useState } from "react";
import LiveChat from "./LiveChat";
import WatchPageDetails from "./WatchPageDetails";
import Recommendations from "./Recommendations";

const Watch = () => {
  let [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  // Close the menu when navigating to this page.
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const isDarkMode = useSelector((store) => store.theme.isDarkMode);
  const [showChat, setShowChat] = useState(false);
  const videoId = searchParams.get("v");
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [videoId]);
  const smScreen = window.innerWidth < 768;
  return (
    <>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-10"></div>
      )}
      <div className={`w-full ${isMenuOpen ? "opacity-50" : ""}`}>
        <div className="md:my-4 md:ml-16 flex max-sm:flex-col overflow-hidden">
          <div>
            <iframe
              width={`100%`}
              height={`${smScreen ? "220" : "500"}`}
              src={
                "https://www.youtube.com/embed/" +
                searchParams.get("v") +
                "?autoplay=1&mute=0"
              }
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
            <WatchPageDetails videoId={videoId} />
          </div>
          <div className="ml-4 mx-4 ">
            {showChat && <LiveChat />}
            <button
              onClick={() => setShowChat(!showChat)}
              className={` p-1 ${
                isDarkMode
                  ? "bg-dark-color text-white border border-gray-300 hover:bg-search-color"
                  : "border border-gray-200 hover:bg-gray-200"
              } mt-2  w-full ml-2 rounded-full max-sm:hidden`}
            >
              {showChat ? "Hide chat" : "Show chat"}
            </button>
            <Recommendations />
          </div>
        </div>
      </div>
    </>
  );
};

export default Watch;
