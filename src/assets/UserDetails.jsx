import React, { useState, useEffect } from "react";
import styles from "../styles/userdetails.module.scss";
import AvatarDetails from "./AvatarDetails";
import BacktoUser from "./BacktoUser";
import ClientDetails from "./ClientDetails";
import { useParams, Link } from "react-router-dom";
import { dataContext } from "../App";
import { useContext } from "react";
const UserDetails = () => {
  const { users } = useContext(dataContext);
  // const [user, setuser] = useState();
  // const fetchData = async () => {
  //   try {
  //     const url =
  //       " https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/1 ";
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     setuser(data);
  //     console.log(user);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  const { id } = useParams();
  const user = users.find((data) => {
    return data.id == id;
  });
  return (
    <div className={styles.wrapper}>
      <BacktoUser user={user} />
      <AvatarDetails user={user} />
      <ClientDetails user={user} />
    </div>
  );
};

export default UserDetails;
