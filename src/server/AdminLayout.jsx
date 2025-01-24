import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "../component/AdminHeader";
import AdminFooter from "../component/AdminFooter";
const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <AdminHeader />
      <main>
        <Outlet />
      </main>
      <AdminFooter />
    </div>
  );
};

export default AdminLayout;
