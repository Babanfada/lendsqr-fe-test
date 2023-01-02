import React from "react";
import {BiSearch }from "react-icons/bi";
import styles from "../styles/searchcomp.module.scss";
const SearchComponent = () => {
  return (
    <div className={styles.wrapper}>
      <input type="text" placeholder="search for anything" />
      <div>
        <BiSearch className={styles.icon} color="white" />
      </div>
    </div>
  );
};

export default SearchComponent;
