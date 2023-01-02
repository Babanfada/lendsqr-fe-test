import React, { useContext } from "react";
import SideNavigation from "./SideNavigation";
import TopNavigation from "./TopNavigation";
import { dataContext } from "../App";
const UsersPage = () => {
  const { handleMenu, openNav, setopenNav } = useContext(dataContext);
  return (
    <div>
      <TopNavigation />
      <SideNavigation />
    </div>
  );
};

export default UsersPage;
