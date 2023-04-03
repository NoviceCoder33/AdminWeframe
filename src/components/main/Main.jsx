import React,{useState} from 'react'
import styles from './Main.module.css';
import image from '../../assets/images/Avatar.png';
import search from '../../assets/search.png';
import searchdoor from '../../assets/searchdoor.png';
import mic from '../../assets/mic.png';
import folder from '../../assets/folder.png';
import bell from '../../assets/bell.png';
import Dotprofile from '../profile/Dotprofile';
import pen from "../../assets/pen.png";
import Group from "../../components/imggroup/Group";
import Card from '../cards/Card';
import Cards from '../cards/Cards';
import Cardo from '../cards/Cardo';

import toggleIcon from '../../assets/Vector.png';
import vector1 from "../../assets/Vector1.png";
import vector2 from "../../assets/Vector2.png";
import vector3 from "../../assets/Vector3.png";
import vector4 from "../../assets/Vector4.png";
import vector5 from "../../assets/Vector5.png";
import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icondown.png';
import icon4 from '../../assets/iconlock.png';
import twitter from "../../assets/twitter.png";
import dots from "../../assets/threedot.png";
import add from "../../assets/addbutton.png";

import girl from "../../assets/images/girl.png";
import girl1 from "../../assets/images/girl1.png";
import guy from "../../assets/images/guy.png";
import guy1 from "../../assets/images/guy1.png";
import icon from "../../assets/Icons.png";
import cmnt from "../../assets/Iconscmnt.png";
import paper from "../../assets/bluepaper.png";
import paper0 from "../../assets/pagetick.png";






function Main({isOpen,setIsopen}) {
  const handleToggleList = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  return (
      <div className={styles.main}>
        <div className={styles.content}>
            <div className={styles.input} style={{backgroundColor: 'white'}}>
            <img src={search} alt='search' style={{height:'1rem'}}/>
            <p style={{color:'lightgrey',fontSize:'12px'}}>Search Tasks</p>
            <img src={searchdoor} alt='searchdoor' style={{height:'1rem'}}/>
            </div>

           <img src={mic} alt='mic' style={{height:'1rem'}} />
          

            <div className={styles.nav}>
                <p style={{fontSize:"small"}}>Dashboard</p>
                <p style={{color:'grey',fontSize:'12px'}}>MyTasks</p>
                <p style={{color:'grey',fontSize:'12px'}}>MyTasks</p>
                <p style={{color:'grey',fontSize:'12px'}}>Reporting</p>
                <p style={{color:'grey',fontSize:'12px'}}>Portfolios</p>
                <p style={{color:'grey',fontSize:'12px'}}>Goal</p>

            </div>

            <div className={styles.sideicon}>
            <img src={folder} alt='folder' style={{height:'1rem'}} size={15} />
            <img src={bell} alt='bell' style={{height:'1rem'}} size={15}/>
            <Dotprofile image={image}/>
            </div>
      </div>
      <div className={styles.dashhead}style={{justifyContent:"space-between"}}  >
            <h4>Dashboard</h4> 
            <img onClick={handleToggleList} src={toggleIcon} alt='toggleIcon' style={{height:'10px'}}/>
      </div>
      <div className={styles.container}>
      <div style={{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"5rem",justifyContent:"space-around",height:"max-content"}}>
          <h3>Task Boards <img src={pen} alt="pen" style={{height:"15px"}}/></h3>
          <div className={styles.tag}>
                <p style={{color:'#3B82F6',fontSize:"small",display:"flex",flexDirection:"column"}}>Timeline
                <span style={{
                  background: "#3B82F6",
                     height: "3px",
                }}></span>
                </p>
                <p style={{color:'grey',fontSize:'12px'}}>Calender</p>
                <p style={{color:'grey',fontSize:'12px'}}>Dashboard</p>
                <p style={{color:'grey',fontSize:'12px'}}>Progress</p>
                <p style={{color:'grey',fontSize:'12px'}}>Forms</p>
                <p style={{color:'grey',fontSize:'12px'}}>More</p>

            </div>
            <div style={{height:"15px"}}><Group/></div>    
        </div>

          <div style={{display:"flex",flexDirection:"row",alignItems:"center",flexWrap:"wrap",gap:"1rem"}}>
            <div style={{display:"flex",height:"2.2rem",padding:"0.5rem"}}>
            <div className={styles.bloc1}><img src={icon1} style={{height:"10px"}} alt="icon"/>
            <h6 style={{color:"lightgrey"}}>Board View</h6>
            </div>
            <div className={styles.bloc2}><img src={icon2} style={{height:"10px"}} alt="icon"/>
            <h6  style={{color:"lightgrey"}}>List View</h6>
            </div>
            </div>

            <div className={styles.bloc}>
              <img src={icon4} alt="icon" style={{height:"12px"}}/>
              <h6>Limited Access</h6>
              <img src={icon3} alt="icon" style={{height:"6px"}}/>
            </div>
            <div className={styles.bloc}>
            <h6>Owners</h6>
            <img src={twitter} alt="icon" style={{height:"24px"}}/>
            <h6 style={{color:"#606C80"}}>Twitter Team</h6>
            </div>

            <div className={styles.sminput} style={{backgroundColor: 'white'}}>
            <img src={search} alt='search' style={{height:'1rem'}}/>
            <p style={{color:'lightgrey',fontSize:'12px'}}>Search Tasks</p>
            </div>
            
            <div style={{display:"flex",flexDirection:"row",alignItems:"center",gap:"0.5rem"}}>
              <div className={styles.block}><img src={vector1} alt="icon"/></div>
              <div className={styles.blocks}><img src={vector2} alt="icon"/></div>
              <div className={styles.blocks}><img src={vector3} alt="icon"/></div>
              <div className={styles.blocks}><img src={vector4} alt="icon"/></div>
              <div className={styles.blocks}><img src={vector5} alt="icon"/></div>
            </div>
        </div>

      </div>
       <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"2rem"}}>
        <div className={styles.back}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <h5 style={{display:"flex",gap:"2px",alignItems:"center"}}>Backlog Tasks
            <span style={{padding:"0.3rem",borderRadius:"0.5rem",fontSize:"10px",backgroundColor:"#EAB3081A",color:"#CA8A04"}}>5
            </span></h5>
          <img src={dots} alt="dots" style={{height:"3px"}} />
          </div>
          <Card text={"Modal Answer"} girl={girl} guy={guy} icon={icon} paper={paper} />
          <Card text={"Create calendar, chat and email app pages"}girl={girl1} guy={guy1} icon={cmnt}paper={paper}/>
          <Cardo text={"Product Design, Figma, Sketch(Software), Prototype"} user={guy} icon={cmnt}paper={paper0}/>
          <Card text={"Change email option process"}girl={girl} guy={guy} icon={cmnt}paper={paper0}/>
          <Card text={"Post launch reminder/ Post list"}paper={paper0}/>
          <Cards/>
          
        </div>
        <div className={styles.todo}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <h5 style={{display:"flex",gap:"2px",alignItems:"center"}}>ToDo Tasks
            <span style={{padding:"0.3rem",borderRadius:"0.5rem",fontSize:"10px",backgroundColor:"#EC48991A",color:"#DB2777"}}>3
            </span></h5>
          <img src={dots} alt="dots" style={{height:"3px"}} />
          </div>
          <div className={styles.card}>
        <div className={styles.head}>
            <h5>Model Answer</h5>
            <img src={paper} style={{height:"1rem"}}alt="icon"/>
        </div>
        <div className={styles.tags}>
          <h7 className={styles.simple}>#UI037</h7>
          <h7 className={styles.redd}>ToDo</h7>
        </div>
        <div style={{display:"flex",padding:"0.3rem",flexDirection:"row",width:"50%",gap:"1rem"}}>
         <div style={{display:"flex",alignItems:"center"}}>
            <img style={{height:"1.2rem",width:"1.2rem"}}src={girl} alt="girl1" />
            <img style={{height:"1.2rem",width:"1.2rem"}}src={guy} alt="guy" />
            <div style={{marginRight:"0.3rem",width:"1.2rem",height:"1.2rem",color:"grey",backgroundColor:"lightgray",borderRadius:"2rem"}}>
                <p style={{marginTop:"0.1rem",fontSize:"0.5rem"}}>+3</p></div>
            <img style={{left:"2rem",border:"2px dotted lightgrey",borderRadius:"5rem",height:"1rem",width:"1rem"}} src={add} alt="add"/>
          </div>
        
            <img src={icon} style={{height:"1rem",width:"100%"}} alt="tag"/>
        </div>
       </div>
       <div className={styles.card}>
        <div className={styles.head}>
            <h5>Profile Page Structure</h5>
            <img src={paper0} style={{height:"1rem"}}alt="icon"/>
        </div>
        <div className={styles.tags}>
          <h7 className={styles.simple}>#UI037</h7>
          <h7 className={styles.redd}>Development</h7>
        </div>
        <div style={{display:"flex",padding:"0.3rem",flexDirection:"row",width:"50%",gap:"1rem"}}>
         <div style={{display:"flex",alignItems:"center"}}>
            <img style={{height:"1.2rem",width:"1.2rem"}}src={girl} alt="girl1" />
            <img style={{height:"1.2rem",width:"1.2rem"}}src={guy} alt="guy" />
            <div style={{marginRight:"0.3rem",width:"1.2rem",height:"1.2rem",color:"grey",backgroundColor:"lightgray",borderRadius:"2rem"}}>
                <p style={{marginTop:"0.1rem",fontSize:"0.5rem"}}>+3</p></div>
            <img style={{left:"2rem",border:"2px dotted lightgrey",borderRadius:"5rem",height:"1rem",width:"1rem"}} src={add} alt="add"/>
          </div>
        
            <img src={cmnt} style={{height:"1rem",width:"100%"}} alt="tag"/>
        </div>
       </div>
       
       <div className={styles.card}>
        <div className={styles.head}>
            <h5>Add authentication pages</h5>
            <img src={paper} style={{height:"1rem"}}alt="icon"/>
        </div>
        <div className={styles.tags}>
          <h7 className={styles.simple}>#UI023</h7>
          <h7 className={styles.redd}>ToDo</h7>
          
        </div>
        </div>
         <Cards/>
        </div>

        <div className={styles.process}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <h5 style={{display:"flex",gap:"2px",alignItems:"center"}}>InProcess Tasks
            <span style={{padding:"0.3rem",borderRadius:"0.5rem",fontSize:"10px",backgroundColor:"#A855F71A",color:"#9333EA"}}>2
            </span></h5>
          <img src={dots} alt="dots" style={{height:"3px"}} />
          </div>

          <div className={styles.card}>
        <div className={styles.head}>
            <h5>Model Structure</h5>
            <img src={paper0} style={{height:"1rem"}}alt="icon"/>
        </div>
        <div className={styles.tags}>
          <h7 className={styles.simple}>#UI017</h7>
          <h7 className={styles.purp}>InProcess</h7>
        </div>
        <div style={{display:"flex",padding:"0.3rem",flexDirection:"row",width:"50%",gap:"1rem"}}>
         <div style={{display:"flex",alignItems:"center"}}>
            <img style={{height:"1.2rem",width:"1.2rem"}}src={girl} alt="girl1" />
            <img style={{height:"1.2rem",width:"1.2rem"}}src={guy} alt="guy" />
            <div style={{marginRight:"0.3rem",width:"1.2rem",height:"1.2rem",color:"grey",backgroundColor:"lightgray",borderRadius:"2rem"}}>
                <p style={{marginTop:"0.1rem",fontSize:"0.5rem"}}>+3</p></div>
            <img style={{left:"2rem",border:"2px dotted lightgrey",borderRadius:"5rem",height:"1rem",width:"1rem"}} src={add} alt="add"/>
          </div>
        
            <img src={cmnt} style={{height:"1rem",width:"100%"}} alt="tag"/>
        </div>
       </div>

       <div className={styles.card}>
        <div className={styles.head}>
            <h5>Model Structure</h5>
            <img src={paper0} style={{height:"1rem"}}alt="icon"/>
        </div>
        <div className={styles.tags}>
          <h7 className={styles.simple}>#UI03</h7>
          <h7 className={styles.purp}>InProcess</h7>
        </div>
        <div style={{display:"flex",padding:"0.3rem",flexDirection:"row",width:"50%",gap:"1rem"}}>
         <div style={{display:"flex",alignItems:"center"}}>
            <img style={{height:"1.2rem",width:"1.2rem"}}src={girl} alt="girl1" />
            <img style={{height:"1.2rem",width:"1.2rem"}}src={guy} alt="guy" />
            <div style={{marginRight:"0.3rem",width:"1.2rem",height:"1.2rem",color:"grey",backgroundColor:"lightgray",borderRadius:"2rem"}}>
                <p style={{marginTop:"0.1rem",fontSize:"0.5rem"}}>+3</p></div>
            <img style={{left:"2rem",border:"2px dotted lightgrey",borderRadius:"5rem",height:"1rem",width:"1rem"}} src={add} alt="add"/>
          </div>
        
            <img src={cmnt} style={{height:"1rem",width:"100%"}} alt="tag"/>
        </div>
       </div>
        <Cards/>
        </div>

        <div className={styles.done}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <h5 style={{display:"flex",gap:"2px",alignItems:"center"}}>Backlog Tasks
            <span style={{padding:"0.3rem",borderRadius:"0.5rem",fontSize:"10px",backgroundColor:"#22C55E1A",color:"#16A34A"}}>5
            </span></h5>
          <img src={dots} alt="dots" style={{height:"3px"}} />
          </div>

        <div className={styles.card}>
        <div className={styles.head}>
            <h5>Profile Page Structure</h5>
            <img src={paper} style={{height:"1rem"}}alt="icon"/>
        </div>
        <div className={styles.tags}>
          <h7 className={styles.simple}>#UI33</h7>
          <h7 className={styles.greenn}>Done</h7>
        </div>
        <div style={{display:"flex",padding:"0.3rem",flexDirection:"row",width:"50%",gap:"1rem"}}>
         <div style={{display:"flex",alignItems:"center"}}>
            <img style={{height:"1.2rem",width:"1.2rem"}}src={girl} alt="girl1" />
            <img style={{height:"1.2rem",width:"1.2rem"}}src={guy} alt="guy" />
            <div style={{marginRight:"0.3rem",width:"1.2rem",height:"1.2rem",color:"grey",backgroundColor:"lightgray",borderRadius:"2rem"}}>
                <p style={{marginTop:"0.1rem",fontSize:"0.5rem"}}>+3</p></div>
            <img style={{left:"2rem",border:"2px dotted lightgrey",borderRadius:"5rem",height:"1rem",width:"1rem"}} src={add} alt="add"/>
          </div>
        
            <img src={cmnt} style={{height:"1rem",width:"100%"}} alt="tag"/>
        </div>
       </div>

       <div className={styles.card}>
        <div className={styles.head}>
            <h5>Profile Page Structure</h5>
            <img src={paper0} style={{height:"1rem"}}alt="icon"/>
        </div>
        <div className={styles.tags}>
          <h7 className={styles.simple}>#UI03</h7>
          <h7 className={styles.purp}>InProcess</h7>
        </div>

        <div style={{display:"flex",padding:"0.3rem",flexDirection:"row",width:"50%",gap:"1rem"}}>
         <div style={{display:"flex",alignItems:"center"}}>
            <img style={{height:"1.2rem",width:"1.2rem"}}src={girl} alt="girl1" />
            <img style={{height:"1.2rem",width:"1.2rem"}}src={guy} alt="guy" />
            <div style={{marginRight:"0.3rem",width:"1.2rem",height:"1.2rem",color:"grey",backgroundColor:"lightgray",borderRadius:"2rem"}}>
                <p style={{marginTop:"0.1rem",fontSize:"0.5rem"}}>+3</p></div>
            <img style={{left:"2rem",border:"2px dotted lightgrey",borderRadius:"5rem",height:"1rem",width:"1rem"}} src={add} alt="add"/>
          </div>
        
            <img src={cmnt} style={{height:"1rem",width:"100%"}} alt="tag"/>
        </div>
       </div>
       
       <div className={styles.card}>
        <div className={styles.head}>
            <h5>Profile Page Structure</h5>
            <img src={paper0} style={{height:"1rem"}}alt="icon"/>
        </div>
        <div className={styles.tags}>
          <h7 className={styles.simple}>#UI223</h7>
          <h7 className={styles.greenn}>Done</h7>
        </div>
        <div style={{display:"flex",padding:"0.3rem",flexDirection:"row",width:"50%",gap:"1rem"}}>
         <div style={{display:"flex",alignItems:"center"}}>
            <img style={{height:"1.2rem",width:"1.2rem"}}src={guy} alt="guy" />
            <div style={{marginRight:"0.3rem",width:"1.2rem",height:"1.2rem",color:"grey",backgroundColor:"lightgray",borderRadius:"2rem"}}>
                <p style={{marginTop:"0.1rem",fontSize:"0.5rem"}}>+3</p></div>
            <img style={{left:"2rem",border:"2px dotted lightgrey",borderRadius:"5rem",height:"1rem",width:"1rem"}} src={add} alt="add"/>
          </div>
        
            <img src={cmnt} style={{height:"1rem",width:"100%"}} alt="tag"/>
        </div>
       </div>

       <Cards/>

        </div>
       </div>
      
      </div>
  )
}

export default Main;