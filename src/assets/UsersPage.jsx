import React, { useContext } from "react";
import SideNavigation from "./SideNavigation";
import TopNavigation from "./TopNavigation";
import { dataContext } from "../App";
import { Outlet } from "react-router-dom";

const UsersPage = () => {
  const { handleMenu, openNav, setopenNav } = useContext(dataContext);
  return (
    <div style={{ width: "113vw" }}>
      <TopNavigation />
      <SideNavigation />
      <Outlet />
    </div>
  );
};

export default UsersPage;
