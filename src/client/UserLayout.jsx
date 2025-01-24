import React from "react";
import UserHeader from "./../component/UserHeader";
import UserFooter from "./../component/UserFooter";
import { Outlet } from "react-router-dom";
const UserLayout = () => {
  return (
    <div>
      <UserHeader />
      <main>
        <Outlet />
      </main>
      <UserFooter />
    </div>
  );
};

export default UserLayout;
