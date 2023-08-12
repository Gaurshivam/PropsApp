import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="Main">
      <div className="menu">
        <div style={{display:"flex"}}>
            <img src={props.logoImage} height={50} width={50} style={{borderRadius:"50%",marginTop:"15px"}} alt="" />
            <span style={{marginTop:"20px",marginLeft:"10px",fontSize:"20px ",fontWeight:"bold"}}>{props.name}</span>
        </div>
        <div style={{marginTop:"-15px"}}>
          <h2>{props.heading}</h2>
          <p style={{marginTop:"-15px"}}>{props.content}</p>
        </div>
        <div style={{display:"flex", marginTop:"-15px"}}>
            <p>{props.Date}</p>&nbsp;&nbsp;
            <p>{props.Time}</p>&nbsp;&nbsp;
            <p>{props.Tech}</p>
        </div>
      </div>
      <div className="Image">
        <img
          src={props.image}
          alt="ImageO"
        />
      </div>
    </div>
  );
};

export default Card;
