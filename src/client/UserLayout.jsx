import React from "react";
import UserHeader from "./../component/UserHeader";
import UserFooter from "./../component/UserFooter";
import { Outlet } from "react-router-dom";
import UserNavbar from './../component/UserNavbar';
const UserLayout = () => {
  return (
    <div>
      <UserHeader />
      <main>
        <Outlet />
      </main>
      <UserNavbar />
      <UserFooter />
    </div>
  );
};

export default UserLayout;
