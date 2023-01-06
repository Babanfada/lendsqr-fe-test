import React from 'react'
import styles from "../styles/clientdetailscontent.scss";
const ClientDetailsContent = ({clientdata}) => {
  return (
    <div className={styles.wrapper}>
        <p>{clientdata[4]}</p>
        <p></p>
      
    </div>
  )
}

export default ClientDetailsContent
