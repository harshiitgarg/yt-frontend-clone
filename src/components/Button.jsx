import React from 'react'
import { useSelector } from 'react-redux'

//Removed the button component as it is not functional
const Button = ({name}) => {
  const isDarkMode = useSelector((store) => store.theme.isDarkMode);
  return (
    <div className={`h-8 m-1 p-1 px-2 rounded-lg ${isDarkMode ? "bg-search-color text-white" : "bg-gray-200"}`}>{name}</div>
  )
}

export default Button