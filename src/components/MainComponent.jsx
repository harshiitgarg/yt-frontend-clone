import React, { useEffect, useState } from "react";
import VideoContainer from "./VideoContainer";
import { useDispatch, useSelector } from "react-redux";
import { openMenu } from "./utils/appSlice";

const MainComponent = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const [darkBackground, setDarkBackground] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (window.innerWidth < 768) {
      setDarkBackground(true);
    }
    if (window.innerWidth > 768) {
      dispatch(openMenu());
    }
  }, []);
  return (
    <div className={` overflow-x-hidden`}>
      {isMenuOpen && darkBackground && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-10"></div>
      )}
      {/* <ButtonList /> */}
      <VideoContainer />
    </div>
  );
};

export default MainComponent;
