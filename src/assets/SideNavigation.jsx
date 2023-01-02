import React from "react";
import styles from "../styles/sidenav.module.scss";
import Heading from "./Heading";
import { Header } from "./NavData";
import SubHead from "./subHead";
import { subHeader } from "./NavData";
import { contents } from "./NavData";

const SideNavigation = () => {
  const customersContents = contents.slice(0, 8);
  const businessContents = contents.slice(8, 17);
  const settingContents = contents.slice(17, 21);
  console.log(settingContents);
  return (
    <div className={styles.wrapper}>
      <Heading margin="41px" Header={Header[0]} />
      <Heading margin="41px" opacity="0.6" Header={Header[1]} />
      <SubHead subHeader={subHeader[0]} />
      <div className={styles.customer}>
        {customersContents.map((customer, index) => {
          return (
            <div key={index} style={{ opacity: "0.6" }}>
              <Heading Header={customer} />
            </div>
          );
        })}
      </div>
      <SubHead subHeader={subHeader[1]} />
      <div className={styles.customer}>
        {businessContents.map((business, index) => {
          return (
            <div key={index} style={{ opacity: "0.6" }}>
              <Heading Header={business} />
            </div>
          );
        })}
      </div>
      <SubHead subHeader={subHeader[2]} />
      <div className={styles.customer}>
        {settingContents.map((setting, index) => {
          return (
            <div key={index} style={{ opacity: "0.6" }}>
              <Heading Header={setting} />
            </div>
          );
        })}
      </div>
      <Heading margin="10px" Header={Header[2]} />
      {/* <Heading Header={Header[3]} size="12px" /> */}
      <div className={styles.version}>v1.2.0</div>
    </div>
  );
};

export default SideNavigation;
