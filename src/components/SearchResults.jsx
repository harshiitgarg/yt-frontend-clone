import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { SEARCH_RESULTS_API, API_KEY } from "../constant";
import SearchVideoCard from "./SearchVideoCard";
import HomeShimmer from "./utils/HomeShimmer";
import SearchShimmer from "./utils/SearchShimmer";
import { setChannelId } from "./utils/channelIdSlice";
import { openMenu } from "./utils/appSlice";

const SearchResults = () => {
  const [params] = useSearchParams();
  const query = params.get("q");
  const [searchResults, setSearchResults] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.innerWidth > 768) {
      dispatch(openMenu());
    }
  }, [query]);

  useEffect(() => {
    fetchData();
  }, [query]);

  const fetchData = async () => {
    const data = await fetch(SEARCH_RESULTS_API + query + "&key=" + API_KEY);
    const json = await data.json();
    setSearchResults(json?.items);
  };
  if (searchResults?.length === 0 && window.innerWidth > 768) {
    return <SearchShimmer />;
  }
  if (searchResults?.length === 0 && window.innerWidth < 768) {
    return <HomeShimmer />;
  }
  return (
    <div>
      {Array.isArray(searchResults) &&
        searchResults.map((result, i) => (
          <Link
            key={result?.id?.videoId}
            to={"/watch?v=" + result?.id?.videoId}
            onClick={() => {
              dispatch(setChannelId(result?.snippet?.channelId));
            }}
          >
            <SearchVideoCard data={result?.snippet} />
          </Link>
        ))}
    </div>
  );
};

export default SearchResults;
