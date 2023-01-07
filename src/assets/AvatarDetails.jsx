import React from "react";
import styles from "../styles/avatardetails.module.scss";
// import image4 from "../assets/images/image4.png";
import star1 from "../assets/images/star1.png";
import star2 from "../assets/images/star2.png";
import { navigation } from "./NavData";
import { Skeleton } from "@mui/material";
// import star2 from "../assets/images/star2.png";
const AvatarDetails = ({ user }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <div className={styles.first}>
          <img
            src={
              user ? (
                user.profile.avatar
              ) : (
                <Skeleton
                  variant="circular"
                  animation="waave"
                  height={100}
                  width={100}
                />
              )
            }
            alt="Avatar"
            height={100}
            width={100}
          />
          <div>
            <p>
              {user ? (
                user.profile.lastName + " " + user.profile.firstName
              ) : (
                <Skeleton variant="rectangular" width={"70px"} height={10} />
              )}
            </p>
            <p>
              {user ? (
                user.accountNumber
              ) : (
                <Skeleton variant="rectangular" width={"70px"} height={10} />
              )}
            </p>
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
          <p>
            {user ? (
              user.accountBalance
            ) : (
              <Skeleton variant="rectangular" width={"70px"} height={10} />
            )}
          </p>
          <p>
            {user ? (
              user.profile.bvn
            ) : (
              <Skeleton variant="rectangular" width={"70px"} height={10} />
            )}
            /Providus Bank
          </p>
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
