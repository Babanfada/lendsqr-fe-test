import React from "react";
import styles from "../styles/usersummary.module.scss";
// import { TiGroup } from "react-icons/ti";
const UserSummary = ({ summary }) => {
  return (
    <div className={styles.wrapper}>
      <div style={summary.style}>{summary.icon}</div>
      <p>{summary.name}</p>
      <p>{summary.number}</p>
    </div>
  );
};

export default UserSummary;
