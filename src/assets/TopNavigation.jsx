import React from "react";
import LogoComponent from "./LogoComponent";
import SearchComponent from "./SearchComponent";
import image4 from "../assets/images/image4.png";
import { BsBell } from "react-icons/bs";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { RiArrowDropDownFill } from "react-icons/ri";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { grey } from "@mui/material/colors";
import { Avatar } from "@mui/material";
import styles from "../styles/topnavigation.module.scss";
const TopNavigation = () => {
  return (
    <div className={styles.wrapper}>
      <LogoComponent />
      <SearchComponent />
      <div className={styles.div1}>
        <p>Docs</p>
        <NotificationsNoneIcon
          sx={{ fontSize: 40, color: "#213F7D" }}
          className={styles.bell}
        />
        <div className={styles.div}>
          <Avatar alt="Adedeji" src={image4} sx={{ width: 56, height: 56 }} />
          <span style={{ color: "black" }}>
            <p>Adedeji</p>
            <ArrowDropDownIcon
              className={styles.arrow}
              sx={{ fontSize: 30, color: "#213F7D", width: 30, height: 30 }}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;
