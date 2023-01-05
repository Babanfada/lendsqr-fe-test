import React from 'react'
// import { subHeader } from "./NavData";
import styles from "../styles/subhead.module.scss";
const SubHead = ({subHeader}) => {
  return <div className={styles.wrapper}>{subHeader}</div>;
}

export default SubHead