import React, { useContext } from "react";
import SideNavigation from "./SideNavigation";
import TopNavigation from "./TopNavigation";
import { dataContext } from "../App";
import { Button } from "@mui/material";
import SimplePopper from "./SimplePopper";
import SimplePopper2 from "./SimplePopper2";

const UsersPage = () => {
  const { handleMenu, openNav, setopenNav } = useContext(dataContext);
  return (
    <div style={{ width: "113vw" }}>
      <TopNavigation />
      <SideNavigation />
      <SimplePopper />
      <SimplePopper2 />
      {/* <Button>click</Button> */}
    </div>
  );
};

export default UsersPage;
