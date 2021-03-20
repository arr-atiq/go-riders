import React from 'react';
import './DisplayHome.css';
import {Link} from 'react-router-dom';

const DisplayHome = (props) => {
    const { name, image, id } = props.rider;
    return (
        <div className="rider-interface">
           <div className="card-content">
               <img src={image} alt=""/>
               <button> <Link to={"/destination/"+id}>{name}</Link> </button>
           </div>
        </div>
    );
};

export default DisplayHome;