import React from "react";
import Button from "./Button";
import { tags } from "../constant";
import { useSelector } from "react-redux";

//Removed the button component as it is not functional
const ButtonList = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div
      className={`flex my-1 gap-2 overflow-auto no-scrollbar ml-3 ${
        isMenuOpen ? "md:ml-[234px] " : "md:ml-16 "
      }`}
    >
      {tags.map((name, index) => {
        return <Button name={name} key={index} />;
      })}
    </div>
  );
};

export default ButtonList;
