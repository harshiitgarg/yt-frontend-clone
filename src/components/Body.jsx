import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Body = () => {
  const isDarkMode = useSelector((store) => store.theme.isDarkMode);
  return (
    <>
    <Header />
    <div className={`flex gap-6 ${isDarkMode && "bg-dark-color text-white"}`}>
      <Sidebar />
      <Outlet />
    </div>
    </>
  );
};

export default Body;
