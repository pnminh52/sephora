import React from "react";
import { Outlet } from "react-router-dom";
import AdminFooter from "../component/admin/AdminFooter";
import AdminHeader from "../component/admin/AdminHeader";

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
