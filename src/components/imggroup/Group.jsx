import React from 'react';
import girl from "../../assets/images/girl.png";
import girl1 from "../../assets/images/girl1.png";
import guy from "../../assets/images/guy.png";
import image from '../../assets/images/Avatar.png';
import add from "../../assets/addbutton.png";
function group() {
  return (
    <div>
        <div style={{display:"flex",alignItems:"center",position:"relative"}}>
            <img style={{position:"absolute",left:"-5.5rem"}}src={girl} alt="girl"  />
            <img style={{position:"absolute",left:"-4.5rem"}}src={girl1} alt="girl1" />
            <img style={{position:"absolute",left:"-3.5rem"}}src={guy} alt="guy" />
            <img style={{position:"absolute",left:"-2.5rem"}}src={image} alt="girl" />
            <div style={{position:"absolute",left:"-1.5rem",width:"2.3rem",height:"2.3rem",color:"grey",backgroundColor:"lightgray",borderRadius:"2rem"}}>
                <p style={{marginTop:"0.4rem"}}>+3</p></div>
            <img style={{border:"2px dotted lightgrey",borderRadius:"5rem",position:"absolute",left:"1rem"}} src={add} alt="add"/>
          </div>
    </div>
  )
}

export default group;