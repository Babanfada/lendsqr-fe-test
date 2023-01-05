import React, { useContext } from "react";
import styles from "../styles/users.module.scss";
import UserSummary from "./UserSummary";
import { userSummaryData } from "./NavData";
import { dataContext } from "../App";
import BasicTable from "./BasicTable";
import BasicPopover from "./SimplePopper";
import { Skeleton, Stack } from "@mui/material";
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
        {users ? (
          <BasicTable />
        ) : (
          <Stack row={2}>
            <Skeleton animation="wave" width={"90%"} height={"100px"} />
            <Skeleton animation="wave" width={"90%"} height={"100px"} />
            <Skeleton animation="wave" width={"90%"} height={"100px"} />
            <Skeleton animation="wave" width={"90%"} height={"100px"} />
            <Skeleton animation="wave" width={"90%"} height={"100px"} />
            <Skeleton animation="wave" width={"90%"} height={"100px"} />
            <Skeleton animation="wave" width={"90%"} height={"100px"} />
          </Stack>
        )}
      </div>
    </div>
  );
};

export default Users;
