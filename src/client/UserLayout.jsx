import React from "react";
import UserHeader from "./../component/UserHeader";
import UserFooter from "./../component/UserFooter";
import { Outlet } from "react-router-dom";
import UserNavbar from './../component/UserNavbar';
const UserLayout = () => {
  return (
    <div>
      <div className="sticky z-10 top-0">
      <UserHeader />  

      </div>
        <Outlet />
      <UserNavbar />
      <UserFooter />
    </div>
  );
};

export default UserLayout;
