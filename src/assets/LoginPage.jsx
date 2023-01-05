import React from 'react'
import styles from "../styles/loginpage.module.scss";
import Lendsqr from "./Lendsqr";
import Login from "./Login";
const LoginPage = () => {
  return (
    <div className={styles.app}>
      <Lendsqr />
      <Login />
    </div>
  );
}

export default LoginPage