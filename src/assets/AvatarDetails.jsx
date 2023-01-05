import React from "react";
import styles from "../styles/avatardetails.module.scss";
import image4 from "../assets/images/image4.png";
import star1 from "../assets/images/star1.png";
import star2 from "../assets/images/star2.png";
import { navigation } from "./NavData";
// import star2 from "../assets/images/star2.png";
const AvatarDetails = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <div className={styles.first}>
          <img src={image4} alt="Avatar" height={100} width={100} />
          <div>
            <p>Grace Effiom</p>
            <p>LJJDSJDS</p>
          </div>
        </div>
        <div className={styles.second}>
          <p>User's Tier</p>
          <p>
            <img src={star1} alt="rating" height={14.08} width={13.34} />
            <img src={star2} alt="rating" height={14.08} width={13.34} />
            <img src={star2} alt="rating" height={14.08} width={13.34} />
          </p>
        </div>
        <div className={styles.third}>
          <p>#200,000,000</p>
          <p>984983439/PROVIDUS BANK</p>
        </div>
      </div>

      <div className={styles.bottom}>
        {navigation.map((nav, index) => {
          return (
            <ul key={index}>
              <li>{nav}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default AvatarDetails;
