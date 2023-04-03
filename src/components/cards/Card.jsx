import React from 'react';
import styles from "../../components/cards/Card.module.css";

import add from "../../assets/addbutton.png";

function Card({text,girl,guy,icon,paper}) {
  return (
    <div className={styles.card}>
        <div className={styles.head}>
            <h5>{text}</h5>
            <img src={paper} style={{height:"1rem"}}alt="icon"/>
        </div>
        <div className={styles.tags}>
          <h7 className={styles.simple}>#UI007</h7>
          <h7 className={styles.blu}>Design</h7>
          <h7 className={styles.yello}>Backlog</h7>
        </div>
        { icon?(
        <div style={{display:"flex",padding:"0.3rem",flexDirection:"row",width:"50%",gap:"1rem"}}>
         <div style={{display:"flex",alignItems:"center"}}>
            <img style={{height:"1.2rem",width:"1.2rem"}}src={girl} alt="girl1" />
            <img style={{height:"1.2rem",width:"1.2rem"}}src={guy} alt="guy" />
            <div style={{marginRight:"0.3rem",width:"1.2rem",height:"1.2rem",color:"grey",backgroundColor:"lightgray",borderRadius:"2rem"}}>
                <p style={{marginTop:"0.1rem",fontSize:"0.5rem"}}>+3</p></div>
            <img style={{left:"2rem",border:"2px dotted lightgrey",borderRadius:"5rem",height:"1rem",width:"1rem"}} src={add} alt="add"/>
          </div>
        
            <img src={icon} style={{height:"1rem",width:"100%"}} alt="tag"/>
        </div>):("")}
    </div>
  )}
    

export default Card;
