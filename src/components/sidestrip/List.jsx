import React from 'react';
import styles from './List.module.css';
import cross from '../../assets/cross.png';
import user from "../../assets/images/Avatar.png";
import zero from "../../assets/images/Avatar0.png";
import one from "../../assets/images/Avatar1.png";
import two from "../../assets/images/Avatar2.png";
import three from "../../assets/images/Avatar3.png";
import four from "../../assets/images/Avatar4.png";
import five from "../../assets/images/Avatar5.png";
import six from "../../assets/images/Avatar6.png";
import seven from "../../assets/images/Avatar7.png";
import eight from "../../assets/images/Avatar8.png";
import nine from "../../assets/images/Avatar9.png";
import ten from "../../assets/images/Avatar10.png";
import arrow from "../../assets/sidearrow.png";

function List() {
  return (
    <div style={{display:"flex",flexDirection:"column"}}>
        <div className={styles.cross}>
        <img src={cross} alt="cross"/>
        </div>
        <div style={{
          display:"flex",
          flexDirection:"column",
          alignItems:"center",
          gap:"1rem",
          justifyContent:"center",
          paddingTop:"3rem",
          flex:0.95
          }}>
        <img src={user} alt="user" />
        <img src={zero} alt="user" />
        <img src={one} alt="user" />
        <img src={two} alt="user" />
        <img src={three} alt="user" />
        <img src={four} alt="user" />
        <img src={five} alt="user" />
        <img src={six} alt="user" />
        <img src={seven} alt="user" />
        <img src={eight} alt="user" />
        <img src={nine} alt="user" />
        <img src={ten} alt="user" />
        </div>
        <div className={styles.arrow}>
        <img src={arrow} alt="arrow"/>
        </div>
    </div>
  )
}

export default List