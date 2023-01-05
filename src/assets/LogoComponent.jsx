import React from "react";
import union from "../assets/images/union.png";
import styles from "../styles/logocomp.module.scss";
const LogoComponent = () => {
  return (
    <div className={styles.logo}>
      <img src={union} alt="logo image" />
      <h1 className="div">lendsqr</h1>
    </div>
  );
};

export default LogoComponent;
