import React, { useState, useEffect } from "react";
import styles from "../styles/clientdetails.module.scss";
import { clientdata } from "../assets/NavData";
import ClientDetailsContent from "./ClientDetailsContent";
import { Skeleton } from "@mui/material";
// import { clientdatum } from "../assets/NavData";
// import { dataContext } from "../App";
// import { useContext } from "react";
const ClientDetails = ({ user }) => {
  return (
    <div className={styles.wrapper}>
      {/* {clientHeading.map((client, index) => {
        return ( */}
      <div className={styles.container}>
        <h1>{clientdata[0]}</h1>
        <div>
          <div>
            <p>{clientdata[4]}</p>
            <p>
              {user ? (
                user.profile.lastName + " " + user.profile.firstName
              ) : (
                <Skeleton variant="rectangular" width={"70px"} height={10} />
              )}
            </p>
          </div>
          <div>
            <p>{clientdata[5]}</p>
            <p>
              {user ? (
                user.profile.phoneNumber
              ) : (
                <Skeleton variant="rectangular" width={"70px"} height={10} />
              )}
            </p>
          </div>
          <div>
            <p>{clientdata[6]}</p>
            <p>
              {user ? (
                user.email
              ) : (
                <Skeleton variant="rectangular" width={"70px"} height={10} />
              )}
            </p>
          </div>
          <div>
            <p>{clientdata[7]}</p>
            <p>
              {user ? (
                user.profile.bvn
              ) : (
                <Skeleton variant="rectangular" width={"70px"} height={10} />
              )}
            </p>
          </div>
          <div>
            <p>{clientdata[8]}</p>
            <p>
              {user ? (
                user.profile.gender
              ) : (
                <Skeleton variant="rectangular" width={"70px"} height={10} />
              )}
            </p>
          </div>
          <div>
            <p>{clientdata[9]}</p>
            <p>
              {user ? (
                user.userName
              ) : (
                <Skeleton variant="rectangular" width={"70px"} height={10} />
              )}
            </p>
          </div>
          <div>
            <p>{clientdata[10]}</p>
            <p>
              {user ? (
                user.profile.currency
              ) : (
                <Skeleton variant="rectangular" width={"70px"} height={10} />
              )}
            </p>
          </div>
          <div>
            <p>{clientdata[11]}</p>
            <p>
              {user ? (
                user.profile.address
              ) : (
                <Skeleton variant="rectangular" width={"70px"} height={10} />
              )}
            </p>
          </div>
        </div>
        {/* <ClientDetailsContent clientdata= {clientdata} /> */}
      </div>

      <div className={styles.container}>
        <h1>{clientdata[1]}</h1>
        <div>
          <div>
            <p>{clientdata[12]}</p>
            <p>
              {user ? (
                user.education.level
              ) : (
                <Skeleton variant="rectangular" width={"70px"} height={10} />
              )}
            </p>
          </div>
          <div>
            <p>{clientdata[13]}</p>
            <p>
              {user ? (
                user.education.employmentStatus
              ) : (
                <Skeleton variant="rectangular" width={"70px"} height={10} />
              )}
            </p>
          </div>
          <div>
            <p>{clientdata[14]}</p>
            <p>
              {user ? (
                user.education.sector
              ) : (
                <Skeleton variant="rectangular" width={"70px"} height={10} />
              )}
            </p>
          </div>
          <div>
            <p>{clientdata[15]}</p>
            <p>
              {user ? (
                user.education.duration
              ) : (
                <Skeleton variant="rectangular" width={"70px"} height={10} />
              )}
            </p>
          </div>
          <div>
            <p>{clientdata[16]}</p>
            <p>
              {user ? (
                user.education.officeEmail
              ) : (
                <Skeleton variant="rectangular" width={"70px"} height={10} />
              )}
            </p>
          </div>
          <div>
            <p>{clientdata[17]}</p>
            <p>
              {user ? (
                user.education.monthlyIncome
              ) : (
                <Skeleton variant="rectangular" width={"70px"} height={10} />
              )}
            </p>
          </div>
          <div>
            <p>{clientdata[18]}</p>
            <p>
              {user ? (
                user.education.loanRepayment
              ) : (
                <Skeleton variant="rectangular" width={"70px"} height={10} />
              )}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <h1>{clientdata[2]}</h1>
        <div>
          <div>
            <p>{clientdata[19]}</p>
            <p>
              {user ? (
                user.socials.twitter
              ) : (
                <Skeleton variant="rectangular" width={"70px"} height={10} />
              )}
            </p>
          </div>
          <div>
            <p>{clientdata[20]}</p>
            <p>
              {" "}
              {user ? (
                user.socials.facebook
              ) : (
                <Skeleton variant="rectangular" width={"70px"} height={10} />
              )}
            </p>
          </div>
          <div>
            <p>{clientdata[21]}</p>
            <p>
              {" "}
              {user ? (
                user.socials.instagram
              ) : (
                <Skeleton variant="rectangular" width={"70px"} height={10} />
              )}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <h1>{clientdata[3]}</h1>
        <div>
          <div>
            <p>{clientdata[22]}</p>
            <p>
              {user ? (
                user.guarantor.lastName + " " + user.guarantor.firstName
              ) : (
                <Skeleton variant="rectangular" width={"70px"} height={10} />
              )}
            </p>
          </div>
          <div>
            <p>{clientdata[23]}</p>
            <p>
              {user ? (
                user.guarantor.phoneNumber
              ) : (
                <Skeleton variant="rectangular" width={"70px"} height={10} />
              )}
            </p>
          </div>
          <div>
            <p>{clientdata[24]}</p>
            <p>
              {user ? (
                user.education.officeEmail
              ) : (
                <Skeleton variant="rectangular" width={"70px"} height={10} />
              )}
            </p>
          </div>
        </div>
      </div>
      {/* );
      })} */}
    </div>
  );
};

export default ClientDetails;
