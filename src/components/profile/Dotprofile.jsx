import React from 'react';
import styles from "./Dotprofile.module.css";
import progress from "../../assets/images/Progress.png";

function Dotprofile({image}) {
  return (
    <div>
        <div className={styles.profile}>
        <img src={progress} className={styles.progress} style={{height:'45px',width:'45px',borderRadius:"50%"}} alt="progress"/>    
        <img src={image} className={styles.avatar} style={{height:'35px',width:'35px',borderRadius:"50%"}} alt="avatar"/>
        <span className={styles.notif}>2</span>
        <div style={{position:"absolute",bottom:"0",right:"2rem"}}>
        <div className={styles.statusborder}>
        <span className={styles.status}>        
        </span>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Dotprofile;