import React from "react";
import UserFooter from "./../component/UserFooter";
import { Outlet } from "react-router-dom";
import UserNavbar from './../component/UserNavbar';
import UserHeader2 from "../component/UserHeader2";
import UserHeader1 from './../component/UserHeader1';
import UserHeader3 from './../component/UserHeader3';
const UserLayout = () => {
  return (
    <div>
      <UserHeader1 />
      <div className="sticky top-0 z-10 md:static">
        <UserHeader2 />
      </div>
      <UserHeader3 />
        <Outlet />
      <UserNavbar />
      <UserFooter />
    </div>
  );
};

export default UserLayout;
