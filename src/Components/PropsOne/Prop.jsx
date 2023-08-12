import React from 'react';
import "./Prop.css"

const Prop = (props) => {
    return (
        <div >
            <div className='Card'>
            <p style={{backgroundColor: props.color,height:"220px"}}></p>
            <h3 >{props.heading}</h3>
            <p style={{paddingLeft:"20px", marginTop:"-10px"}}>{props.title}</p>
            </div>
        </div>
    );
}

export default Prop;
