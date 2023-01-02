import React from "react";
import styles from "../styles/Heading.module.scss";
const Heading = ({ Header, margin, opacity, size }) => {
  return (
    <div
      title={Header.name}
      style={{
        marginBottom: margin,
        opacity: opacity,
        // padding: "10px 0 10px 2.48vw",
        size,
      }}
      className={styles.wrapper}
    >
      <span> {Header.icon}</span>
      <span style={{ fontSize: size }}> {Header.name}</span>
      <span> {Header.icon1}</span>
    </div>
  );
};

export default Heading;
