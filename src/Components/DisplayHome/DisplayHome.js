import React from 'react';
import './DisplayHome.css';

const DisplayHome = (props) => {
    const { name, image } = props.rider;
    return (
        <div className="rider-interface">
           <div className="card-content">
               <img src={image} alt=""/>
               <button>{name}</button>
           </div>
        </div>
    );
};

export default DisplayHome;