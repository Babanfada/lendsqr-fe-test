import React from 'react'
import styles from "../styles/userdetails.module.scss"
import AvatarDetails from './AvatarDetails'
import BacktoUser from './BacktoUser'
const UserDetails = () => {
  return (
    <div className={styles.wrapper}>
     <BacktoUser />
     <AvatarDetails />
    </div>
  )
}

export default UserDetails
