import React, { useContext } from "react";
import styles from "../styles/users.module.scss";
import UserSummary from "./UserSummary";
import { userSummaryData } from "./NavData";
import { dataContext } from "../App";
import BasicTable from "./BasicTable";
import BasicPopover from "./SimplePopper";
const Users = () => {
  const { users, setusers } = useContext(dataContext);
  return (
    <div className={styles.wrapper}>
      <h1>Users</h1>
      <div>
        {userSummaryData.map((summary, index) => {
          return <UserSummary key={index} summary={summary} />;
        })}
      </div>
      <div className={styles.table}>
        {users ? <BasicTable /> : "there is no data"}
      </div>
    </div>
  );
};

export default Users;
