import React from "react";
import styles from "../styles/users.module.scss";
import UserSummary from "./UserSummary";
import { userSummaryData } from "./NavData";
const Users = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Users</h1>
      <div>
        {userSummaryData.map((summary, index) => {
          return <UserSummary key={index} summary={summary} />;
        })}
      </div>
    </div>
  );
};

export default Users;
