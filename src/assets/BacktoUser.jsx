import React from "react";
import styles from "../styles/backtouser.module.scss";
import arrow from "../assets/images/arrow.png";
import { BootstrapButton2 } from "./NavData";
import { BootstrapButton3 } from "./NavData";
import { Link } from "react-router-dom";
const BacktoUser = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper2}>
        <div className={styles.wrapper3}>
          <Link className={styles.wrapper3} to={`/users`}>
            <span>
              <img src={arrow} alt="arrow" height=" 9.4px" width="26.78px" />
            </span>
            <span className={styles.span}>Back to Users</span>
          </Link>
        </div>

        <div className={styles.wrapper4}>
          <p>User Details</p>
          <div>
            <BootstrapButton2>Blacklist User</BootstrapButton2>
            <BootstrapButton3>Activate User</BootstrapButton3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BacktoUser;
