import React from 'react';
import styles from "./Simpleprofile.module.css";
import progress from "../../assets/images/Progress.png";
function Simpleprofile({image}) {
  return (
    <div>
        <div className={styles.profile}>
        <img src={progress} className={styles.progress} style={{height:'35px',width:'35px',borderRadius:"50%"}} alt="progress"/>    
        <img src={image} className={styles.avatar} style={{height:'25px',width:'25px',borderRadius:"50%"}} alt="avatar"/>
        </div>
    </div>
  )
}

export default Simpleprofile