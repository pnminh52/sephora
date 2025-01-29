import React from "react";
import { Outlet } from "react-router-dom";
import UserNavbar from "../component/user/UserNavbar";
import UserHeader2 from "../component/user/UserHeader2";
import UserHeader1 from "./../component/user/UserHeader1";
import ScrollUp from "./../component/user/ScrollUp";
import UserFooter from "./../component/user/UserFooter";
import UserHeader3 from './../component/user/UserHeader3';
const UserLayout = () => {
  return (
    <div>
      <UserHeader1 />
      <div className="sticky top-0 z-10 md:static">
        <UserHeader2 />
      </div>
      
      <Outlet />
      <UserNavbar />
      <UserFooter id="footer" />
      <ScrollUp />
    </div>
  );
};

export default UserLayout;
