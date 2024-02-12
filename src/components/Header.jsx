import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu, toggleMenu } from "./utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../constant";
import { cachedResults } from "./utils/searchSlice";
import { toggleTheme } from "./utils/themeSlice";
import { IoIosMenu } from "react-icons/io";
import youtubelogoLightMode from "../assets/youtubelogoLightMode.png";
import youtubelogoDarkMode from "../assets/yt-logoDrakMode.png";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { GoSearch } from "react-icons/go";
import { BsArrowLeftShort } from "react-icons/bs";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [smSearch, setSmSearch] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const isDarkMode = useSelector((store) => store.theme.isDarkMode);

  useEffect(() => {
    if (window.innerWidth < 768) {
      dispatch(closeMenu());
    }
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSuggestions();
      }
    }, 200);
    return () => {
      // cleanup function to clear the timeout when component unmounts
      clearTimeout(timer);
    };
  }, [searchQuery]);
  const getSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    //update cache
    dispatch(
      cachedResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleThemeHandler = () => {
    dispatch(toggleTheme());
  };
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search?q=" + searchQuery, { relative: "path" });
    setShowSuggestions(false);
  };
  return (
    <div
      className={`grid grid-flow-col sticky top-0 z-20 w-full py-4 md:py-0 ${
        isDarkMode ? "bg-dark-color" : "bg-white"
      }`}
    >
      {smSearch && (
        <div className="flex justify-start ">
          <button
            onClick={() => {
              setSmSearch(false);
            }}
          >
            <BsArrowLeftShort className="text-3xl text-white" />
          </button>
        </div>
      )}
      <div
        className={`flex md:col-span-2  items-center mx-4 ${
          smSearch ? "max-sm:hidden" : ""
        }`}
      >
        {/* //HamburgerMenu */}
        <IoIosMenu
          onClick={toggleMenuHandler}
          className={`text-3xl ${
            isDarkMode ? "dark:text-white" : "white:text-black"
          } cursor-pointer `}
        />
        {/* Logo */}
        <Link to="/">
          <img
            className="h-6 md:mx-4 mx-1 cursor-pointer"
            alt="youtubeLogo"
            src={isDarkMode ? youtubelogoDarkMode : youtubelogoLightMode}
          ></img>
        </Link>
      </div>
      <div
        className={`${
          smSearch
            ? "col-span-10"
            : "col-span-10 max-sm:flex max-sm:justify-end"
        } md:ml-24`}
      >
        <div className="flex items-center">
          {/* Search bar */}
          <input
            type="search"
            placeholder="Search"
            className={`${
              smSearch ? "w-full" : "w-1/2 max-sm:hidden"
            } border border-search-color md:ml-32 p-0.5 md:p-1 rounded-l-full pl-4 md:pl-4 md:my-4 ${
              isDarkMode && "bg-dark-color text-white"
            }`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => {
              const screenWidth = window.innerWidth;
              if (screenWidth <= 768) {
                if (!smSearch) setSmSearch(true);
              }
              setShowSuggestions(true);
            }}
            onBlur={() => {
              setTimeout(() => {
                setShowSuggestions(false);
              }, 200);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit(e);
              }
            }}
          />
          {/* Search btn */}
          <button
            className={`md:p-1 rounded-r-full border border-search-color ${
              !smSearch ? "max-sm:border-none max-sm:rounded-full" : ""
            } ${isDarkMode ? "bg-search-color " : "bg-white "}`}
            onClick={() => {
              const screenWidth = window.innerWidth;
              if (screenWidth < 768 && !smSearch) {
                if (!smSearch) setSmSearch(true);
              } else navigate("/search?q=" + searchQuery, { relative: "path" });
            }}
          >
            <GoSearch
              className={`text-2xl mx-2 max-sm:mt-1 p-0.5 ${
                isDarkMode ? "dark:text-gray-300" : "white:text-gray-300"
              } `}
            />
          </button>
        </div>
        {showSuggestions && searchQuery != "" && (
          <div
            className={`fixed md:ml-32 shadow-lg w-72 md:w-[34rem] rounded-lg ${
              isDarkMode ? "bg-dark-color text-white" : "bg-white"
            }`}
          >
            <ul>
              {suggestions &&
                suggestions.map((elem) => {
                  return (
                    <li
                      className={`p-1 cursor-pointer ${
                        isDarkMode
                          ? "hover:bg-search-color"
                          : "hover:bg-gray-100"
                      } flex gap-2`}
                      key={elem}
                    >
                      <Link
                        to={"/search?q=" + elem}
                        className="flex gap-2"
                        onClick={() => setSearchQuery(elem)}
                      >
                        <GoSearch
                          className={`text-2xl mx-1 max-sm:mt-1 p-0.5 ${
                            isDarkMode
                              ? "dark:text-gray-300"
                              : "white:text-gray-300"
                          } `}
                        />
                        {elem}
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1 flex">
        <div className="flex items-center mx-4">
          {!isDarkMode ? (
            <MdOutlineDarkMode
              onClick={toggleThemeHandler}
              className="text-3xl cursor-pointer"
            />
          ) : (
            <MdOutlineLightMode
              onClick={toggleThemeHandler}
              className="text-3xl text-white cursor-pointer"
            />
          )}
        </div>
        <div
          className={`flex justify-center md:col-span-1 col-span-2 items-center`}
        >
          <BiUserCircle
            className={`text-3xl md:text-4xl font-normal ${
              !isDarkMode ? "dark:text-black" : "white: text-gray-200"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
