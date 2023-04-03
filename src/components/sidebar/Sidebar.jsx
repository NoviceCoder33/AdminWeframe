import React from 'react';
import Simpleprofile from '../profile/Simpleprofile';
import styles from './Sidebar.module.css';
import image from '../../assets/images/Avatar.png';
import toggleIcon from '../../assets/Vector.png';
import updown from "../../assets/updown.png"; 
import up from "../../assets/up.png";
import inbox from "../../assets/dashboard/imgicon.png";
import folder from "../../assets/dashboard/folderup.png";
import boards from "../../assets/dashboard/blockplus.png";
import updates from "../../assets/dashboard/clockicon.png";
import analytics from "../../assets/dashboard/loading.png";
import crm from "../../assets/dashboard/sectionicon.png";
import ecomm from "../../assets/dashboard/tagicon.png";
import crypto from "../../assets/dashboard/Vectorcrypto.png";
import project from "../../assets/dashboard/Vectorproject.png";
import nft from "../../assets/dashboard/imgsrch.png";
import setting from "../../assets/dashboard/Vectorsettings.png";
import hash from "../../assets/dashboard/Vectorhash.png";
import add from "../../assets/dashboard/Vectorblueadd.png";

function Sidebar({isOpen,setIsopen}) {
  const handleToggleList = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };
  return (
    <div>
      <div className={styles.dashhead}style={{gap: "8.9rem"}}  >
            <h4>Dashboard</h4> 
            <img src={toggleIcon} alt='toggleIcon' style={{height:'10px'}}/>
      </div>
      
        <div className={styles.user}>
              <Simpleprofile image={image}/>
              <div>
                <h5>Nancy Martino
                <p style={{color:"lightgrey",fontSize:'12px'}}>Designer</p>
                </h5>
              </div>
              <img src={updown} style={{height:'14px'}} alt='updown'/>
         </div>
         <div className={styles.dashboard}>
          <div className={styles.sidenames} style={{gap: "8.5rem"}}>
          <h5 style={{color:"grey"}}>DASHBOARD</h5>
          <img src={up} style={{height:'6px'}}  alt="up"/>
          </div>
          <div className={styles.sidenames}  style={{gap: "9.3rem"}}>
          <div className={styles.tags}>
           <img src={inbox} alt="inbox" style={{height:'10px'}} />
           <h5>Inbox</h5>
          </div>  
           <h6 className={styles.number}>4</h6>
          </div>
          <div className={styles.sidenames}  style={{gap: "6.5rem"}}>
          <div className={styles.tags}>
           <img src={folder} alt="Drivefiles" style={{height:'10px'}} />
           <h5>Drive Files</h5>
          </div>  
          <h6 className={styles.number}>435</h6>
          </div>
          <div className={styles.sidenames} style={{gap: "8.9rem"}}>
          <div className={styles.tags}>
           <img src={boards} alt="boards" style={{height:'10px'}} />
           <h5>Boards</h5>
          </div>  
          <h6 className={styles.number}>5</h6>
          </div>
          <div className={styles.singlename} style={{paddingRight: "9.5rem"}}>
          <div className={styles.tags}>
           <img src={updates} alt="updates" style={{height:'10px'}} />
           <h5>Updates</h5>
          </div>  
          </div>
          <div className={styles.sidenames} style={{gap: "8.1rem"}}>
          <div className={styles.tags}>
           <img src={analytics} alt="analytics" style={{height:'10px'}} />
           <h5>Analytics</h5>
          </div>  
          <h6 className={styles.number}>2</h6>
          </div>
          <div className={styles.sidenames}style={{gap: "5.5rem"}}>
          <div className={styles.tags}>
           <img src={crm} alt="crm" style={{height:'10px'}} />
           <h5>CRMDashboard</h5>
          </div>  
          <h6 className={styles.number}>2</h6>
          </div>
          <div className={styles.singlename} style={{paddingRight: "8rem"}}>
          <div className={styles.tags}>
           <img src={ecomm} alt="ecomm" style={{height:'10px'}} />
           <h5>Ecommerce</h5>
          </div>  
          </div>
          <div className={styles.singlename} style={{paddingRight: "6.2rem"}}>
          <div className={styles.tags}>
           <img src={crypto} alt="crypto" style={{height:'10px'}} />
           <h5>Cryptocurrency</h5>
          </div>  
          </div>
          <div className={styles.singlename} style={{paddingRight: "9.5rem"}}>
          <div className={styles.tags}>
           <img src={project} alt="project" style={{height:'10px'}} />
           <h5>Projects</h5>
          </div>  
          </div>
          <div className={styles.singlename} style={{paddingRight: "6rem"}}>
          <div className={styles.tags}>
           <img src={nft} alt="nft" style={{height:'10px'}} />
           <h5>NFTMarketplace</h5>
          </div>  
          </div>
          <div className={styles.sidenames} style={{gap: "8.5rem"}}>
          <div className={styles.tags}>
           <img src={setting} alt="setting" style={{height:'10px'}} />
           <h5>Settings</h5>
          </div>  
          <h6 className={styles.number}>2</h6>
          </div>
         </div>

         <div className={styles.dashboard}>
         <div className={styles.sidenames} style={{gap: "9.5rem"}}>
          <h5 style={{color:"grey"}}>PROJECTS</h5>
          <img src={up} style={{height:'6px'}}  alt="up"/>
          </div>
          <div className={styles.sidenames}style={{gap: "4rem"}}>
          <div className={styles.tags}>
           <img src={hash} alt="hash" style={{height:'10px'}} />
           <h5 >Additional Calender</h5>
          </div>  
          <h6 className={styles.number}>6</h6>
          </div>
          <div className={styles.sidenames}style={{gap: "4.3rem"}}>
          <div className={styles.tags}>
           <img src={hash} alt="hash" style={{height:'10px'}} />
           <h5>Brand Logo Design</h5>
          </div>  
          <h6 className={styles.number}>11</h6>
          </div>
          <div className={styles.sidenames}style={{paddingRight: "7rem"}}>
          <div className={styles.tags}>
           <img src={hash} alt="hash" style={{height:'10px'}} />
           <h5>User Research</h5>
          </div>  
          </div>
          <div className={styles.sidenames}style={{gap: "5rem"}}>
          <div className={styles.tags}>
           <img src={hash} alt="hash" style={{height:'10px'}} />
           <h5>Marketing Sales</h5>
          </div>  
          <h6 className={styles.number}>23</h6>
          </div>
          <div className={styles.sidenames}style={{gap: "3rem"}}>
          <div className={styles.tags}>
           <img src={hash} alt="hash" style={{height:'10px'}} />
           <h5>New Project Template</h5>
          </div>  
          <h6 className={styles.number}>2</h6>
          </div>
          <div className={styles.singlename} style={{paddingRight: "6rem"}}>
          <div className={styles.tags}>
           <img src={add} alt="add" style={{height:'10px'}} />
           <h5>Add New Project</h5>
          </div>  
          </div>
         </div>

    
  </div>
  )
}

export default Sidebar