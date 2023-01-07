import React from "react";
import union from "./images/Union.png";
import styles from "../styles/lendsqr.module.scss";
import pablo from "./images/pablo-sign-in-1.svg";
const Lendsqr = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <img src={union} alt="logo image" />
        <h1 className="div">lendsqr</h1>
      </div>
      <img className={styles.img} src={pablo} alt="pablo-sign-in-1" />
    </div>
  );
};

export default Lendsqr;
