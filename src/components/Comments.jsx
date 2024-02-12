import React, { useEffect, useState } from "react";
import { COMMENTS_API } from "../constant";
import VideoComment from "./videoComment";
import { abbreviateNumber } from "js-abbreviation-number";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Comments = ({ videoId, commentCount }) => {
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(true);
  useEffect(() => {
    fetchData();
  }, [videoId]);
  const fetchData = async () => {
    let data = await fetch(COMMENTS_API + videoId);
    let json = await data.json();
    setComments(json.items);
  };
  var smScreen = false;
  if (window.innerWidth < 768) {
    smScreen = true;
  }
  useEffect(() => {
    if (window.innerWidth < 768) {
      setShowComments(false);
    }
  }, []);
  return (
    comments && (
      <div>
        <div className="flex gap-1">
          <div className="mx-1">{abbreviateNumber(commentCount)} </div>
          {!smScreen && <div>Comments</div>}
          {smScreen && (
            <button
              onClick={() => {
                setShowComments(!showComments);
              }}
              className="flex items-center text-blue-500"
            >
              <div>Comments</div>
              {showComments ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
          )}
        </div>
        {showComments &&
          comments.map((data, index) => <VideoComment data={data} key={index}/>)}
      </div>
    )
  );
};

export default Comments;
